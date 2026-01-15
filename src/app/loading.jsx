import CommonLoader from "../components/Loader/CommonLoader";
import TopGap from "../components/Shared/TopGap/TopGap";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] relative overflow-hidden">
      <TopGap />

      {/* Optional: Background watermark effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[15vw] font-black text-[#064a9b]">KYD</h1>
      </div>

      <CommonLoader />
    </div>
  );
};

export default Loading;