interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = "", ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-2 text-base font-medium leading-6 text-neutral-900">{label}</label>}
      <div className="flex items-center p-4 w-full h-14 bg-gray-100 rounded-xl">
        <input className={`w-full text-base leading-6 border-none bg-transparent text-slate-500 ${className}`} {...props} />
      </div>
      {error && <span className="mt-1 text-sm text-red-500">{error}</span>}
    </div>
  );
};
