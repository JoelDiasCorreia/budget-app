interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`flex justify-center items-center w-10 h-10 bg-gray-100 rounded-xl cursor-pointer ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
};
