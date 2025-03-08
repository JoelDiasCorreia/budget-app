"use client";
import { Button } from "../atomic/Button";

export const ReportsView: React.FC = () => {
  return (
    <main className="px-40 py-5 max-h-[1500px] max-md:p-5">
      <section className="p-4 max-sm:p-3">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold text-neutral-900">Reports</h1>
          <p className="text-sm text-slate-500">Track your income and spending over time</p>
        </div>
      </section>

      <section className="px-4 py-3 max-sm:p-2">
        <div className="flex p-1 h-10 bg-gray-100 rounded-xl">
          <Button variant="secondary" className="flex-1 px-2 py-0 text-sm rounded-xl">
            Income
          </Button>
          <Button variant="secondary" className="flex-1 px-2 py-0 text-sm rounded-xl">
            Expenses
          </Button>
        </div>
      </section>

      <section className="px-4 py-6 max-md:p-3 max-sm:p-2">
        <div className="p-6 rounded-xl border border-solid border-zinc-200 max-md:p-4 max-sm:p-3">
          <h2 className="mb-2 text-base text-neutral-900">Income over time</h2>
          <div className="flex flex-col gap-8 px-0 py-4 min-h-[180px]">
            {/* Chart would go here - using placeholder */}
            <div className="h-40 bg-gray-100 rounded-xl" />

            <div className="flex justify-between">
              <span className="text-sm font-bold text-slate-500">Jun 21</span>
              <span className="text-sm font-bold text-slate-500">Jul 21</span>
              <span className="text-sm font-bold text-slate-500">Aug 21</span>
              <span className="text-sm font-bold text-slate-500">Sep 21</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-5 pb-3 max-md:p-3 max-sm:p-2">
        <h2 className="mb-3 text-2xl font-bold text-neutral-900">Income by category</h2>
        <div className="rounded-xl border border-solid border-zinc-200 max-md:overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-white">
                <th className="px-4 py-3 text-sm font-medium text-left text-neutral-900">Category</th>
                <th className="px-4 py-3 text-sm font-medium text-left text-neutral-900">Total</th>
                <th className="px-4 py-3 text-sm font-medium text-left text-neutral-900">June 2021</th>
                <th className="px-4 py-3 text-sm font-medium text-left text-neutral-900">July 2021</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-solid border-t-gray-200">
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">Investments</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$3,000</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$1,000</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$1,000</td>
              </tr>
              <tr className="border-t border-solid border-t-gray-200">
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">Salary</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$15,000</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$5,000</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$5,000</td>
              </tr>
              <tr className="border-t border-solid border-t-gray-200">
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">Bonus</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$1,000</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$500</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$250</td>
              </tr>
              <tr className="border-t border-solid border-t-gray-200">
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">Interest</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$100</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$50</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$25</td>
              </tr>
              <tr className="border-t border-solid border-t-gray-200">
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">Other</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$500</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$250</td>
                <td className="px-4 py-2 text-sm h-[72px] text-slate-500">$125</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
