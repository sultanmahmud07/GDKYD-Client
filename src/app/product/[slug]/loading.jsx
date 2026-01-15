import BannerLoading from "../../../components/Loader/BannerLoader";
import TopGap from "../../../components/Shared/TopGap/TopGap";

const ProductDetailsLoading = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopGap />
      <BannerLoading />
      <div className="main_container px-4 py-8 animate-pulse">
        
        {/* 1. Breadcrumb & Header Area */}
        <div className="mb-10">
           {/* Breadcrumb line */}
           <div className="h-4 w-48 bg-gray-200 rounded mb-4"></div>
           {/* Large Page Title Banner */}
           <div className="h-10 w-3/4 md:w-1/2 bg-blue-50/50 rounded border border-blue-100"></div>
        </div>

        {/* 2. Main Product Grid (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
          
          {/* --- LEFT COL: Image Gallery --- */}
          <div>
            {/* Main Large Image */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-gray-200 rounded-xl mb-6 border border-gray-100">
               {/* Optional Icon placeholder in center */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-gray-300 rounded-full opacity-50"></div>
               </div>
            </div>
            
            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-4">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="aspect-square bg-gray-100 rounded-lg border border-gray-200"></div>
               ))}
            </div>
          </div>

          {/* --- RIGHT COL: Product Info --- */}
          <div className="flex flex-col h-full">
            
            {/* Product Info Badge */}
            <div className="h-6 w-32 bg-blue-100 rounded-full mb-6"></div>

            {/* Product Title */}
            <div className="space-y-3 mb-6">
               <div className="h-8 w-full bg-gray-300 rounded-md"></div>
               <div className="h-8 w-2/3 bg-gray-300 rounded-md"></div>
            </div>

            {/* Divider */}
            <div className="h-px w-20 bg-gray-200 mb-6"></div>

            {/* Description Text */}
            <div className="space-y-4 mb-8">
               <div className="h-4 w-full bg-gray-100 rounded"></div>
               <div className="h-4 w-full bg-gray-100 rounded"></div>
               <div className="h-4 w-11/12 bg-gray-100 rounded"></div>
               <div className="h-4 w-full bg-gray-100 rounded"></div>
               <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
            </div>

            {/* Tech Specs / Configuration Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="h-12 bg-gray-50 rounded-lg border border-gray-100"></div>
               ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-auto">
               <div className="h-12 w-40 bg-gray-800 rounded-lg"></div>
               <div className="h-12 w-40 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

        </div>

        {/* 3. Bottom Tabs Section */}
        <div className="border-t border-gray-100 pt-10">
           {/* Tab Headers */}
           <div className="flex gap-2 mb-8">
              <div className="h-12 w-48 bg-blue-600/20 rounded-t-lg"></div>
              <div className="h-12 w-40 bg-gray-100 rounded-t-lg"></div>
           </div>

           {/* Content Header */}
           <div className="h-6 w-1/3 bg-gray-300 rounded mb-6"></div>

           {/* Content Lines */}
           <div className="space-y-4 max-w-4xl">
              <div className="h-4 w-full bg-gray-100 rounded"></div>
              <div className="h-4 w-full bg-gray-100 rounded"></div>
              <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
              <div className="h-4 w-full bg-gray-100 rounded"></div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetailsLoading;