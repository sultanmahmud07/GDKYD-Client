import BannerLoading from "../../components/Loader/BannerLoader";
import TopGap from "../../components/Shared/TopGap/TopGap";

const Loading = () => {
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <TopGap />
      <BannerLoading />
      <div className="main_container pb-20 pt-10">

        {/* Breadcrumb & Title Skeleton */}
        <div className="animate-pulse mb-8">
          <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
          <div className="h-8 w-3/4 md:w-1/2 bg-gray-300 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- Left Sidebar Skeleton (Matches Reference) --- */}
          <div className="hidden lg:block lg:col-span-3 space-y-8 animate-pulse">

            {/* Categories Widget */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                <div className="h-5 w-24 bg-gray-200 rounded"></div>
              </div>
              {/* Search Bar Placeholder */}
              <div className="h-10 w-full bg-gray-100 rounded-lg mb-6"></div>
              {/* List Items */}
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                    <div className="h-3 w-3 bg-gray-100 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* "Need Help" Widget Skeleton */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center space-y-4">
              <div className="h-5 w-1/2 bg-gray-200 rounded mx-auto"></div>
              <div className="h-3 w-3/4 bg-gray-100 rounded mx-auto"></div>
              <div className="pt-2 space-y-3">
                <div className="h-10 w-full bg-gray-100 rounded-lg border border-gray-200"></div>
                <div className="h-10 w-full bg-gray-300 rounded-lg"></div>
              </div>
            </div>

          </div>

          {/* --- Right Product Grid Skeleton --- */}
          <div className="col-span-1 lg:col-span-9 animate-pulse">

            {/* Top Bar (Results count & Sort) */}
            <div className="flex justify-between items-center bg-white p-4 rounded-lg mb-6 border border-gray-100">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-4 w-24 bg-gray-200 rounded"></div>
            </div>

            {/* Product Cards Grid (3 Columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm flex flex-col">

                  {/* Badge & Image Area */}
                  <div className="relative mb-4">
                    <div className="absolute right-0 top-0 h-4 w-16 bg-gray-200 rounded-full"></div>
                    <div className="w-full h-48 bg-gray-200 rounded-lg mt-6"></div>
                  </div>

                  {/* Title */}
                  <div className="space-y-2 mb-4">
                    <div className="h-5 w-full bg-gray-300 rounded"></div>
                    <div className="h-5 w-2/3 bg-gray-300 rounded"></div>
                  </div>

                  {/* Specs / Tags */}
                  <div className="flex gap-2 mb-6">
                    <div className="h-6 w-20 bg-gray-100 rounded"></div>
                    <div className="h-6 w-20 bg-gray-100 rounded"></div>
                  </div>

                  {/* Buttons (Details & Quote) */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <div className="h-10 bg-gray-100 rounded-lg border border-gray-200"></div>
                    <div className="h-10 bg-gray-300 rounded-lg"></div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Loading;