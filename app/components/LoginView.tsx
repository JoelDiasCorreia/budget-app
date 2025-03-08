"use client";
import { Button } from "./Button";
import { Input } from "./Input";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export const LoginView: React.FC = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();
  useEffect(() => {
    if (!user && !isLoading) router.push("/api/auth/login");
  }, [user, isLoading]);

  return (
    <div className="min-h-screen bg-white">
      <main className="flex justify-center px-40 py-5 bg-white min-h-[800px] max-md:px-10 max-md:py-5 max-sm:p-5">
        <div className="flex flex-col items-center px-0 py-5 w-[520px] max-sm:w-full">
          <form className="flex flex-col items-center px-4 py-5 w-full max-w-[480px]">
            <h2 className="mb-5 text-3xl font-bold leading-9 text-center text-neutral-900">Welcome to Spendwise</h2>

            <div className="px-4 py-3 w-full">
              <Input type="email" label="Email" placeholder="Enter your email" />
            </div>

            <div className="px-4 py-3 w-full">
              <Input type="password" label="Password" placeholder="Enter your password" />
            </div>

            <div className="px-4 py-0 w-full">
              <label className="flex gap-3 items-center px-0 py-3 cursor-pointer">
                <input type="checkbox" className="hidden" />
                <span className="w-5 h-5 rounded border-2 border-solid border-zinc-200" />
                <span className="text-base leading-6 text-neutral-900">Keep me signed in</span>
              </label>
            </div>

            <Button className="mx-4 my-3 w-full">Sign in</Button>

            <div className="px-4 pt-1 pb-3 w-full text-sm leading-5 text-center text-slate-500">OR</div>

            <Button variant="secondary" className="flex gap-2 justify-center items-center mx-4 my-3 w-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5 10C17.5002 13.6456 14.8788 16.7633 11.2873 17.3891C7.6958 18.0148 4.17452 15.9673 2.94178 12.5364C1.70905 9.10558 3.12197 5.28518 6.29043 3.48203C9.45889 1.67887 13.4651 2.41528 15.7852 5.22734L14.8219 6.02266C12.9264 3.72439 9.67233 3.08336 7.04684 4.49105C4.42136 5.89874 3.15434 8.96382 4.01955 11.8145C4.88476 14.6651 7.64168 16.5089 10.6067 16.2198C13.5717 15.9307 15.9205 13.5891 16.2188 10.625H10V9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10Z"
                  fill="#121417"
                />
              </svg>
              Sign in with Google
            </Button>

            <p className="px-4 pt-1 pb-3 w-full text-sm leading-5 text-center text-slate-500">Don't have an account?</p>

            <Button variant="outline" className="mx-4 my-3 w-full">
              Sign up for free
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};
