import BannerLoading from "../../components/Loader/BannerLoader";
import TopGap from "../../components/Shared/TopGap/TopGap";

const BlogLoading = () => {
  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      <TopGap />
      <BannerLoading />
      <div className="main_container py-10 md:py-20 animate-pulse">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* --- Left Side: Blog Grid (8 Cols) --- */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Create 4 skeleton cards */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">

                  {/* Image Placeholder */}
                  <div className="relative w-full h-60 bg-gray-200">
                    {/* Date Badge Placeholder */}
                    <div className="absolute top-4 left-4 bg-gray-300 rounded-xl w-16 h-16"></div>
                  </div>

                  {/* Content Placeholders */}
                  <div className="p-6 space-y-4">
                    {/* Meta Line */}
                    <div className="flex gap-2 items-center">
                      <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded"></div>
                      <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                      <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                      <div className="h-6 w-full bg-gray-300 rounded"></div>
                      <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                    </div>

                    {/* Read Article Button */}
                    <div className="flex gap-2 items-center mt-6">
                      <div className="h-5 w-28 bg-blue-100/50 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Side: Sidebar (4 Cols) --- */}
          <aside className="lg:col-span-4 space-y-8">

            {/* Widget 1: Explore Solutions Skeleton */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between bg-gray-50">
                <div className="h-6 w-32 bg-gray-300 rounded"></div>
                <div className="h-6 w-6 bg-gray-200 rounded"></div>
              </div>

              <div className="p-3 space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex justify-between items-center px-4 py-3 rounded-lg bg-gray-50/50">
                    <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-4 w-4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget 2: Need a Quote Skeleton (Blue Box) */}
            <div className="bg-[#064a9b]/10 rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Title & Desc */}
              <div className="h-7 w-40 bg-blue-200/50 rounded mb-3"></div>
              <div className="h-4 w-full bg-blue-100/50 rounded mb-6"></div>

              {/* Contact Info Fields */}
              <div className="space-y-4 mb-8">
                <div className="h-12 w-full bg-blue-200/30 rounded-lg border border-blue-200/20"></div>
                <div className="h-12 w-full bg-blue-200/30 rounded-lg border border-blue-200/20"></div>
              </div>

              {/* Button */}
              <div className="h-12 w-full bg-blue-200 rounded-xl"></div>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogLoading;