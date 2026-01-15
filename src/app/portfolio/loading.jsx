import BannerLoading from "../../components/Loader/BannerLoader";
import TopGap from "../../components/Shared/TopGap/TopGap";

const PortfolioLoading = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopGap />
      <BannerLoading />
      <div className="main_container py-10 md:py-16 animate-pulse">

        {/* 1. Page Header Section */}
        <div className="mb-12 max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-12 bg-gray-200 rounded"></div>
            <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>

          {/* Page Title (PORTFOLIO) */}
          <div className="h-10 w-48 bg-blue-100/50 rounded mb-6"></div>

          {/* Description Text */}
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-full bg-gray-100 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
          </div>
        </div>

        {/* 2. Portfolio Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group flex flex-col h-full border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm">

              {/* Image Area */}
              <div className="relative h-60 w-full bg-gray-200">
                {/* Badge Placeholder (e.g. "ACTIVE") */}
                <div className="absolute top-4 left-4 h-6 w-20 bg-white/50 rounded-full backdrop-blur-sm"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 relative">

                {/* Series Tag (e.g. "KYD SERIES") */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-4 w-4 bg-blue-100 rounded-sm"></div>
                  <div className="h-3 w-20 bg-gray-100 rounded"></div>
                </div>

                {/* Title */}
                <div className="space-y-2 mb-4">
                  <div className="h-6 w-full bg-gray-300 rounded"></div>
                  <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
                </div>

                {/* Arrow Icon Button (Bottom Right) */}
                <div className="mt-auto flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200"></div>
                </div>

                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-50"></div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PortfolioLoading;