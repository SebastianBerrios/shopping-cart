export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center mt-6 space-x-2">
      {pages.map((page) => {
        const isActive = currentPage === page;
        const buttonClasses = isActive
          ? "px-3 py-1 rounded bg-blue-600 text-white"
          : "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300";

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={buttonClasses}
          >
            {page}
          </button>
        );
      })}
    </nav>
  );
}
