interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const TransactionPagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex gap-2 justify-center items-center p-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex justify-center items-center w-10 h-10 cursor-pointer disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.648 14.227C11.8678 14.4468 11.8678 14.8032 11.648 15.023C11.4282 15.2428 11.0718 15.2428 10.852 15.023L5.22703 9.39797C5.12141 9.29246 5.06206 9.14929 5.06206 9C5.06206 8.85071 5.12141 8.70754 5.22703 8.60203L10.852 2.97703C11.0718 2.75724 11.4282 2.75724 11.648 2.97703C11.8678 3.19682 11.8678 3.55318 11.648 3.77297L6.42023 9L11.648 14.227Z"
            fill="#121417"
          />
        </svg>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 text-sm rounded-3xl cursor-pointer ${
            currentPage === page ? "bg-blue-600 text-white" : "text-neutral-900"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex justify-center items-center w-10 h-10 cursor-pointer disabled:opacity-50"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.773 9.39797L7.14797 15.023C6.92818 15.2428 6.57182 15.2428 6.35203 15.023C6.13224 14.8032 6.13224 14.4468 6.35203 14.227L11.5798 9L6.35203 3.77297C6.13224 3.55318 6.13224 3.19682 6.35203 2.97703C6.57182 2.75724 6.92818 2.75724 7.14797 2.97703L12.773 8.60203C12.8786 8.70754 12.9379 8.85071 12.9379 9C12.9379 9.14929 12.8786 9.29246 12.773 9.39797Z"
            fill="#121417"
          />
        </svg>
      </button>
    </div>
  );
};
