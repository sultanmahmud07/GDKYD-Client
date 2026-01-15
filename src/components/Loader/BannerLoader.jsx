const BannerLoading = () => {
      return (
            // Full-width banner container with a placeholder background color and pulse animation
            <div className="relative h-[300px] w-full bg-gray-300 animate-pulse flex items-center">
                  {/* Container for content on the left side, matching the reference layout */}
                  <div className="main_container ">
                        <div className="">
                              {/* Title Skeleton: Two lines of thick bars */}
                              <div className="h-4 bg-gray-200 rounded-md mb-4 w-1/3"></div>
                              <div className="h-4 bg-gray-200 rounded-md mb-6 w-1/4"></div>

                              {/* Subtitle Skeleton: Three lines of thinner bars */}
                              <div className="h-2 bg-gray-200 rounded-md mb-3 w-full"></div>
                              <div className="h-2 bg-gray-200 rounded-md mb-3 w-5/6"></div>
                              <div className="h-2 bg-gray-200 rounded-md mb-8 w-1/6"></div>

                              {/* Button Skeleton: A rectangular bar */}
                              <div className="h-6 w-20 md:w-32 bg-gray-200 rounded-md"></div>
                        </div>
                  </div>
            </div>
      );
};

export default BannerLoading;