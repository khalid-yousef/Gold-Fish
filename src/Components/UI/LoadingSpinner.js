import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center z-50 bg-[#25252d]">
      <HashLoader
        color="#FFDEA0"
        cssOverride={{}}
        loading
        size={100}
        speedMultiplier={0.5}
      />
    </div>
  );
};

export default LoadingSpinner;
