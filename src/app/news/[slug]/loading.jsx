import TopGap from "../../../components/Shared/TopGap/TopGap";

const BlogDetailsLoading = () => {
  return (
    <div className="bg-white min-h-screen">
      <TopGap />
      
      <div className="main_container py-8 animate-pulse">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* --- LEFT COL: Main Article Content (8 Cols) --- */}
          <div className="lg:col-span-8">
            
            {/* 1. Breadcrumb & Meta */}
            <div className="mb-6 space-y-3">
               <div className="flex gap-2">
                 <div className="h-4 w-16 bg-gray-200 rounded"></div>
                 <div className="h-4 w-4 bg-gray-200 rounded"></div>
                 <div className="h-4 w-24 bg-gray-200 rounded"></div>
               </div>
               
               {/* Title */}
               <div className="h-8 w-3/4 md:w-5/6 bg-gray-800/10 rounded-md"></div>
               
               {/* Date / Author Line */}
               <div className="flex items-center gap-3 pt-2">
                  <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
               </div>
            </div>

            {/* 2. Featured Image */}
            <div className="w-full h-64 md:h-96 bg-gray-200 rounded-xl mb-8"></div>

            {/* 3. Content Paragraphs */}
            <div className="space-y-4">
               <div className="h-4 w-full bg-gray-100 rounded"></div>
               <div className="h-4 w-full bg-gray-100 rounded"></div>
               <div className="h-4 w-11/12 bg-gray-100 rounded"></div>
               <div className="h-4 w-full bg-gray-100 rounded"></div>
               
               {/* Gap */}
               <div className="h-8"></div>

               <div className="h-4 w-full bg-gray-100 rounded"></div>
               <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
               <div className="h-4 w-full bg-gray-100 rounded"></div>
            </div>

          </div>

          {/* --- RIGHT COL: Sidebar (4 Cols) --- */}
          <aside className="lg:col-span-4">
             
             {/* Latest News Widget Skeleton */}
             <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                
                {/* Header */}
                <div className="p-5 border-b border-gray-50 bg-gray-50/50">
                   <div className="h-5 w-32 bg-gray-300 rounded"></div>
                </div>

                {/* List Items */}
                <div className="p-2">
                   {[1, 2, 3, 4, 5].map((i) => (
                     <div key={i} className="flex gap-4 p-4 border-b border-gray-50 last:border-0 items-start">
                        {/* Thumbnail */}
                        <div className="shrink-0 w-24 h-20 bg-gray-200 rounded-lg"></div>
                        
                        {/* Text */}
                        <div className="flex-1 space-y-2 py-1">
                           <div className="h-4 w-full bg-gray-200 rounded"></div>
                           <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
                           <div className="h-3 w-20 bg-gray-100 rounded mt-2"></div>
                        </div>
                     </div>
                   ))}
                </div>

                {/* Footer Button */}
                <div className="p-4 border-t border-gray-100 bg-gray-50 text-center">
                   <div className="h-4 w-32 bg-blue-100 mx-auto rounded"></div>
                </div>

             </div>

          </aside>

        </div>
      </div>
    </div>
  );
};

export default BlogDetailsLoading;