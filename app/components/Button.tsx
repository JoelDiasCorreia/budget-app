interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary", fullWidth = false, className = "", ...props }) => {
  const baseStyles = "h-10 text-sm font-bold rounded-xl cursor-pointer border-none";
  const variantStyles = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-100 text-neutral-900",
    outline: "bg-transparent text-neutral-900 border border-gray-200",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""} ${className}`} {...props}>
      {children}
    </button>
  );
};
