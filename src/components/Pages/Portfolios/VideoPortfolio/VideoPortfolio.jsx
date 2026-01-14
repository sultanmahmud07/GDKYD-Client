// "use client"

const VideoPortfolio =  ({locale, videos}) => {

  return (
    <div className="my-5 md:my-14">
      <div className="main_container">
          {/* Title */}
        <div className=" mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#252B42]">
            {"Video Portfolio"}
          </h2>
          <div className="h-1 w-20 bg-[#064a9b] rounded-full"></div>
        </div>
        <div className="w-full md:w-full grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {videos?.map((video, i) => {
            return (
              <div key={i} className="relative w-full h-0 pb-[56.25%]">
              {video ? (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={video?.link}
                  title="Left Side Video"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200">
                  <div className="loader border-t-4 border-b-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoPortfolio;
