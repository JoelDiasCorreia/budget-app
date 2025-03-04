"use client";
import { Button } from "./Button";

export const ExpenseForm: React.FC = () => {
  return (
    <main className="flex justify-center px-40 py-5 max-md:px-10 max-md:py-5 max-sm:p-5">
      <form className="flex flex-col items-center px-0 py-5 w-[480px] max-sm:w-full">
        <h1 className="mb-5 text-3xl font-bold leading-10 text-neutral-900">
          Log a new expense
        </h1>

        <div className="px-4 py-3 w-full">
          <label className="mb-2 text-base leading-6 text-neutral-900">
            Amount
          </label>
          <div className="p-4 text-base leading-6 bg-gray-100 rounded-xl text-slate-500">
            $0.00
          </div>
        </div>

        <div className="px-4 py-3 w-full">
          <label className="mb-2 text-base leading-6 text-neutral-900">
            Category
          </label>
          <div className="p-4 text-base leading-6 bg-gray-100 rounded-xl text-slate-500">
            Select a category
          </div>
        </div>

        <div className="px-4 py-3 w-full">
          <label className="mb-2 text-base leading-6 text-neutral-900">
            Date
          </label>
          <div className="p-4 text-base leading-6 bg-gray-100 rounded-xl text-slate-500">
            Today
          </div>
        </div>

        <div className="px-4 py-3 w-full">
          <label className="mb-2 text-base leading-6 text-neutral-900">
            Notes
          </label>
          <div className="flex items-center p-4 text-base leading-6 bg-gray-100 rounded-xl min-h-36 text-slate-500" />
        </div>

        <div className="flex justify-end px-4 py-3 w-full">
          <Button className="w-[448px] max-sm:w-full">Save</Button>
        </div>
      </form>
    </main>
  );
};
