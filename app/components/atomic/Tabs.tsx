import { useEffect, useState } from "react";

export const Tabs: React.FC<{
  options: string[];
  onChange?: (value: string) => void;
}> = ({ options, onChange }) => {
  const [selected, setSelected] = useState(options[0]);

  useEffect(() => {
    onChange && onChange(selected);
  }, [selected]);

  return (
    <>
      <div className="sm:hidden transition-all">
        <label htmlFor="tabs" className="sr-only">
          Select your country
        </label>
        <select
          id="tabs"
          onChange={(e) => setSelected(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
      <ul className=" transition-all hidden text-sm font-medium text-center rounded-lg shadow-sm sm:flex dark:divide-gray-700">
        {options.map((option, index) => (
          <li key={option} className="w-full focus-within:z-10">
            <a
              onClick={() => setSelected(option)}
              className={`
              inline-block w-full p-4 cursor-pointer
              border-gray-200 px-12
              hover:text-gray-700 hover:bg-gray-50 
              focus:ring-4  focus:outline-none 
              dark:hover:text-white 
              ${selected === option ? "bg-gray-100 text-gray-900 dark:text-gray-100 font-semibold" : "text-gray-500  dark:bg-gray-800 dark:hover:bg-gray-700  "}
                 ${index === 0 ? "rounded-l-lg" : ""} ${index === options.length - 1 ? "rounded-r-lg" : ""}
              `}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
