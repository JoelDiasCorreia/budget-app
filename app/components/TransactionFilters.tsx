interface FilterProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

export const TransactionFilters: React.FC<FilterProps> = ({
  onFilterChange,
  activeFilter,
}) => {
  const filters = [
    "All",
    "Income",
    "Expense"
  ];

  return (
    <div className="flex flex-wrap gap-3 p-3 max-sm:overflow-x-auto max-sm:flex-nowrap max-sm:px-0 max-sm:py-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-0 h-8 text-sm rounded-xl cursor-pointer max-sm:shrink-0 ${
            activeFilter === filter
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-neutral-900"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
