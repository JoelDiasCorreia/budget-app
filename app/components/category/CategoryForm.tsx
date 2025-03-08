"use client";

import { Button } from "@/app/components/atomic/Button";
import { CreatableCategory, TransactionType } from "@/app/components/types";
import { useCallback, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { enqueueSnackbar } from "notistack";
import { PlusIcon } from "@heroicons/react/24/outline";

interface CategoryFormProps {
  type: TransactionType;
  hasSucceed: boolean;
  onsubmit: (result: CreatableCategory) => void;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ type, hasSucceed, onsubmit }) => {
  const { user, error, isLoading } = useUser();
  const [label, setLabel] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  if (!user) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsProcessing(true);
    try {
      if (label === "") {
        enqueueSnackbar("Please enter a label", { variant: "warning" });
        setIsProcessing(false);
        return;
      }

      onsubmit({
        userId: user?.sid as string,
        label: label,
        type: type,
      });
      hasSucceed && setLabel("");
    } catch (e) {
      console.error(e);
      enqueueSnackbar("An error occurred while processing your request. Please try again later.", { variant: "error" });
      setIsProcessing(false);
    }
  };

  return (
    <div
      className="flex flex-row place-content-between min-w-xs
            bg-white m-2 shadow-md
            border-blue-200
            hover:border-1
            rounded-md hover:shadow-lg transition-all"
    >
      <form onSubmit={handleSubmit} className="flex flex-col px-4 py-3 w-full max-w-[480px] max-sm:px-0 max-sm:py-3">
        <div className="flex flex-row w-full justify-between items-center">
          <input
            disabled={isProcessing}
            onInput={(event) => setLabel((event.target as HTMLInputElement).value)}
            type="text"
            placeholder="Add a new category"
            className="w-full mr-2 p-4 h-10 focus:outline-none text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm"
          />
          <Button
            disabled={isProcessing}
            className={`flex justify-center items-center rounded-xl w-14 h-10 text-base font-bold leading-6 bg-primary-500 hover:bg-primary-600`}
            type="submit"
          >
            <PlusIcon className={`w-6 h-6 text-white cursor-pointer hover:text-white`} />
          </Button>
        </div>
      </form>
    </div>
  );
};
