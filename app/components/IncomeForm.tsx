"use client";
import { Button } from "./Button";

export const IncomeForm: React.FC = () => {
  return (
    <main className="flex justify-center px-40 py-5 max-md:px-10 max-md:py-5 max-sm:p-5">
      <div className="flex flex-col items-center px-0 py-5 max-w-[960px] w-[520px] max-md:w-full">
        <h1 className="self-start mb-5 text-3xl font-bold leading-10 text-neutral-900 max-sm:text-2xl">
          Add a new income transaction
        </h1>

        <form className="flex flex-col px-4 py-3 w-full max-w-[480px] max-sm:px-0 max-sm:py-3">
          <div className="flex flex-col w-full">
            <label className="pb-2 text-base leading-6 text-neutral-900">
              Amount
            </label>
            <input
              type="text"
              placeholder="$0.00"
              className="p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm"
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            <label className="pb-2 text-base leading-6 text-neutral-900">
              Source
            </label>
            <select className="p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm">
              <option value="">Select a source</option>
              <option value="salary">Salary</option>
              <option value="freelance">Freelance</option>
              <option value="investments">Investments</option>
            </select>
          </div>

          <div className="flex flex-col w-full mt-6">
            <label className="pb-2 text-base leading-6 text-neutral-900">
              Date
            </label>
            <input
              type="date"
              className="p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 text-slate-500 max-sm:text-sm"
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            <label className="pb-2 text-base leading-6 text-neutral-900">
              Notes (optional)
            </label>
            <textarea className="flex items-center p-4 h-14 text-base leading-6 bg-gray-100 rounded-xl border border-solid border-zinc-200 min-h-36 text-slate-500 max-sm:text-sm" />
          </div>

          <Button className="mt-6 h-12 text-base font-bold leading-6">
            Save
          </Button>
        </form>
      </div>
    </main>
  );
};
