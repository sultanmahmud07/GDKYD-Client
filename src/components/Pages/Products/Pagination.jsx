"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Pagination = ({ metaData }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { currentPage, totalPage } = metaData;

  // Function to update the URL
  const handlePageChange = (pageNumber) => {
    // 1. Get current params (to keep existing filters/limits)
    const params = new URLSearchParams(searchParams);
    
    // 2. Update page number
    params.set("page", pageNumber);
    
    // 3. Ensure limit is set (optional, based on metadata)
    if (metaData.limit) {
        params.set("limit", metaData.limit);
    }

    // 4. Push new URL
    router.push(`${pathname}?${params.toString()}`, { scroll: true });
  };

  if (totalPage <= 1) return null;

  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm border border-gray-200">
        {/* Prev Button */}
        <button
          disabled={Number(currentPage) === 1}
          onClick={() => handlePageChange(Number(currentPage) - 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
        >
          <MdChevronLeft size={24} />
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPage }, (_, i) => {
          const pageNum = i + 1;
          const isActive = Number(currentPage) === pageNum;

          return (
            <button
              key={i}
              onClick={() => handlePageChange(pageNum)}
              className={`w-10 h-10 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-[#064a9b] text-white shadow-md scale-105"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          disabled={Number(currentPage) === totalPage}
          onClick={() => handlePageChange(Number(currentPage) + 1)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-gray-600"
        >
          <MdChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;