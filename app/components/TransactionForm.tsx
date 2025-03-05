import {Button} from "@/app/components/Button";
import {Category, TransactionResult} from "@/app/components/types";
import {useCallback, useState} from "react";
import {useUser} from "@auth0/nextjs-auth0/client";

interface TransactionFormProps {
    title: string;
    amountLabel: string;
    categoryLabel: string;
    categoryOptions: Category[];
    dateLabel: string;
    descriptionLabel: string;
    submitLabel: string;
    hasSucceed: boolean;
    onsubmit: (result: TransactionResult) => void;
}

export const TransactionForm: React.FC<TransactionFormProps> = (
    {
        title,
        amountLabel,
        categoryLabel,
        categoryOptions,
        dateLabel,
        descriptionLabel,
        submitLabel,
        hasSucceed,
        onsubmit
    }
) => {
    const {user, error, isLoading} = useUser();
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isError, setIsError] = useState(false);

    if(!user) return null;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsProcessing(true);
        try {
            onsubmit({
                userId: user?.sub as string,
                amount: amount,
                category: category,
                date: new Date(date).getTime(),
                description: description
            });
        } catch (e) {
            console.error(e)
            alert("An error occurred while processing your request. Please try again later.")
            setIsProcessing(false);
            setIsError(true);
        }

    }

    const buttonColor = useCallback(() => {
        if (isError) {
            return "bg-red-500 hover:bg-red-600 text-white"
        } else if (hasSucceed) {
            return "bg-green-500 hover:bg-green-600 text-white"
        } else {
            return "bg-primary-500 hover:bg-primary-600"
        }
    }, [isError, hasSucceed])

    return (
        <div className="flex flex-col items-center px-0 py-5 max-w-[960px] w-[520px] max-md:w-full">
            <h1 className="self-start mb-5 text-3xl font-bold leading-10 text-neutral-900 max-sm:text-2xl">
                {title}
            </h1>

            <form onSubmit={handleSubmit}
                  className="flex flex-col px-4 py-3 w-full max-w-[480px] max-sm:px-0 max-sm:py-3">
                <div className="flex flex-col w-full">
                    <label className="pb-2 text-base leading-6 text-neutral-900">
                        {amountLabel}
                    </label>
                    <input
                        disabled={isProcessing}
                        onInput={(event) => setAmount(parseFloat((event.target as HTMLInputElement).value))}
                        type="number"
                        placeholder="$0.00"
                        className="p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm"
                    />
                </div>

                <div className="flex flex-col w-full mt-6">
                    <label className="pb-2 text-base leading-6 text-neutral-900">
                        {categoryLabel}
                    </label>
                    <select
                        disabled={isProcessing}
                        onChange={(event) => setCategory(event.target.value)}
                        className="p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm">
                        <option value="">Select a {categoryLabel.toLowerCase()}</option>

                        {
                            categoryOptions.map((option) => {
                                return <option key={option.value} value={option.value}>{option.label}</option>
                            })
                        }
                    </select>
                </div>

                <div className="flex flex-col w-full mt-6">
                    <label className="pb-2 text-base leading-6 text-neutral-900">
                        {
                            dateLabel
                        }
                    </label>
                    <input
                        disabled={isProcessing}
                        onChange={(event) => setDate(event.target.value)}
                        type="date"
                        className="p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm"
                    />
                </div>

                <div className="flex flex-col w-full mt-6">
                    <label className="pb-2 text-base leading-6 text-neutral-900">
                        {descriptionLabel}
                    </label>
                    <textarea
                        disabled={isProcessing}
                        onChange={(event) => setDescription(event.target.value)}
                        className="flex items-center p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 min-h-36 text-slate-500 max-sm:text-sm"/>
                </div>

                <Button
                    disabled={isProcessing}
                    className={`mt-6 h-12 text-base font-bold leading-6 ${buttonColor()}`}
                    type="submit">
                    {submitLabel}
                </Button>
            </form>
        </div>
    )
}