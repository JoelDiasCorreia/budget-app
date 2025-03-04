"use client";
import { Budget } from "./types";
import { Button } from "./Button";

interface BudgetItemProps {
  budget: Budget;
}

const BudgetItem: React.FC<BudgetItemProps> = ({ budget }) => {
  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex justify-between items-center">
        <h3 className="text-base text-neutral-900">{budget.name}</h3>
        <span className="text-sm text-neutral-900">{budget.percentage}%</span>
      </div>
      <div className="h-2 rounded bg-zinc-200">
        <div
          className="h-full rounded bg-neutral-900"
          style={{ width: `${budget.percentage}%` }}
        />
      </div>
      <p className="text-sm text-slate-500">
        ${budget.current} of ${budget.total}
      </p>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col gap-4 p-4 w-80 max-md:w-60 max-sm:hidden">
      <nav className="flex flex-col gap-2">
        <a
          href="#"
          className="flex gap-3 items-center px-3 py-2 text-sm rounded-xl cursor-pointer text-neutral-900"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.5153 9.72844L13.0153 2.65219C13.0116 2.64899 13.0082 2.64554 13.005 2.64188C12.4328 2.1215 11.5588 2.1215 10.9866 2.64188L10.9762 2.65219L3.48469 9.72844C3.17573 10.0125 2.99994 10.4131 3 10.8328V19.5C3 20.3284 3.67157 21 4.5 21H9C9.82843 21 10.5 20.3284 10.5 19.5V15H13.5V19.5C13.5 20.3284 14.1716 21 15 21H19.5C20.3284 21 21 20.3284 21 19.5V10.8328C21.0001 10.4131 20.8243 10.0125 20.5153 9.72844Z"
              fill="#121417"
            />
          </svg>
          Dashboard
        </a>
        <a
          href="#"
          className="flex gap-3 items-center px-3 py-2 text-sm rounded-xl cursor-pointer text-neutral-900"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 6C7.5 5.58579 7.83579 5.25 8.25 5.25H20.25C20.6642 5.25 21 5.58579 21 6C21 6.41421 20.6642 6.75 20.25 6.75H8.25C7.83579 6.75 7.5 6.41421 7.5 6Z"
              fill="#121417"
            />
          </svg>
          Transactions
        </a>
        <a
          href="#"
          className="flex gap-3 items-center px-3 py-2 text-sm bg-gray-100 rounded-xl cursor-pointer text-neutral-900"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.25 6.75H5.25C4.00736 3.75 3 4.75736 3 6V18C3 19.2426 4.00736 20.25 5.25 20.25H20.25C21.0784 20.25 21.75 19.5784 21.75 18.75V8.25C21.75 7.42157 21.0784 6.75 20.25 6.75Z"
              fill="#121417"
            />
          </svg>
          Budgets
        </a>
      </nav>

      <Button>Create budget</Button>

      <div className="flex flex-col">
        <div className="flex gap-4 items-center px-4 py-0 h-14">
          <div className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75H5.56031L11.0306 18.2194C11.3237 18.5124 11.3237 18.9876 11.0306 19.2806C10.7376 19.5737 10.2624 19.5737 9.96937 19.2806L3.21937 12.5306C3.07854 12.3899 2.99941 12.1991 2.99941 12C2.99941 11.8009 3.07854 11.6101 3.21937 11.4694L9.96937 4.71938C10.2624 4.42632 10.7376 4.42632 11.0306 4.71938C11.3237 5.01243 11.3237 5.48757 11.0306 5.78062L5.56031 11.25H20.25C20.6642 11.25 21 11.5858 21 12Z"
                fill="#121417"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-base text-neutral-900">Left to budget</h4>
            <p className="text-base text-neutral-900">$2,000</p>
          </div>
        </div>
        <div className="flex gap-4 items-center px-4 py-0 h-14">
          <div className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.5306 18.2194C15.6715 18.3601 15.7506 18.5509 15.7506 18.75C15.7506 18.9491 15.6715 19.1399 15.5306 19.2806L12.5306 22.2806C12.3899 22.4215 12.1991 22.5006 12 22.5006C11.8009 22.5006 11.6101 22.4215 11.4694 22.2806L8.46937 19.2806C8.17632 18.9876 8.17632 18.5124 8.46937 18.2194C8.76243 17.9263 9.23757 17.9263 9.53063 18.2194L11.25 19.9397V4.06031L9.53063 5.78062C9.23757 6.07368 8.76243 6.07368 8.46937 5.78062C8.17632 5.48757 8.17632 5.01243 8.46937 4.71938L11.4694 1.71938C11.6101 1.57854 11.8009 1.49941 12 1.49941C12.1991 1.49941 12.3899 1.57854 12.5306 1.71938L15.5306 4.71938C15.8237 5.01243 15.8237 5.48757 15.5306 5.78062C15.2376 6.07368 14.7624 6.07368 14.4694 5.78062L12.75 4.06031V19.9397L14.4694 18.2194C14.6101 18.0785 14.8009 17.9994 15 17.9994C15.1991 17.9994 15.3899 18.0785 15.5306 18.2194Z"
                fill="#121417"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-base text-neutral-900">Income</h4>
            <p className="text-base text-neutral-900">$1,500</p>
          </div>
        </div>
        <div className="flex gap-4 items-center px-4 py-0 h-14">
          <div className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.5 3H17.25V2.25C17.25 1.83579 16.9142 1.5 16.5 1.5C16.0858 1.5 15.75 1.83579 15.75 2.25V3H8.25V2.25C8.25 1.83579 7.91421 1.5 7.5 1.5C7.08579 1.5 6.75 1.83579 6.75 2.25V3H4.5C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3Z"
                fill="#121417"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="text-base text-neutral-900">Funds for December</h4>
            <p className="text-base text-neutral-900">$2,000</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export const BudgetView: React.FC = () => {
  const budgets: Budget[] = [
    {
      name: "Groceries",
      current: 600,
      total: 1000,
      percentage: 60,
    },
    {
      name: "Restaurants",
      current: 300,
      total: 1000,
      percentage: 30,
    },
    {
      name: "Entertainment",
      current: 500,
      total: 1000,
      percentage: 50,
    },
  ];

  return (
    <div className="flex min-h-[800px]">
      <Sidebar />

      <main className="flex-1 p-4 max-sm:p-2">
        <h1 className="p-4 text-3xl font-bold text-neutral-900">Budgets</h1>

        <section className="mt-4">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-neutral-900">
            December
          </h2>
          {budgets.map((budget, index) => (
            <BudgetItem key={index} budget={budget} />
          ))}
        </section>

        <section className="mt-4">
          <h2 className="px-4 pt-4 pb-2 text-lg font-bold text-neutral-900">
            November
          </h2>
          {budgets.map((budget, index) => (
            <BudgetItem key={index} budget={budget} />
          ))}
        </section>
      </main>
    </div>
  );
};
