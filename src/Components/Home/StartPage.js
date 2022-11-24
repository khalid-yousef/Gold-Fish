import TypewriterComponent from "typewriter-effect";
import banner1 from "../../Assets/banner1.webp";
import banner2 from "../../Assets/banner2.webp";
import banner3 from "../../Assets/banner3.webp";

const StartPage = (props) => {
  return (
    <div className={`${props.className} p-0 m-0 bg-[#292D36]`}>
      {/* Background Image 1 */}
      <div className={`hidden md:block md:w-[30%] h-[100vh] relative`}>
        <img className="w-full h-full" src={banner1} alt="" />
      </div>

      {/* Background 2 */}
      <div className=" hidden md:block md:absolute md:top-0 md:left-[30%] md:w-[35%] md:h-[100vh]">
        <img className="w-full h-[100vh]" src={banner2} alt="" />
      </div>

      {/* Background3 */}
      <div className=" absolute top-0 left-0 md:left-[65%] w-[100%] md:w-[35%] h-[100vh]">
        <img className="w-full h-[100vh]" src={banner3} alt="" />
      </div>

      {/* Website Title */}
      <div
        className={`w-[100%] p-7 flex flex-col items-center gap-5 absolute bottom-0 left-[50%] bg-black bg-opacity-50 rounded-t-[20px] translate-x-[-50%] `}
      >
        <div className="">
          <h1 className="text-white font-bold text-6xl ">Gold Fish</h1>
        </div>

        <div>
          <TypewriterComponent
            options={{
              strings: [" Sushi", " Seafood", " Salads"],
              autoStart: true,
              loop: true,
              cursorClassName: "text-4xl text-[#ffdea0]",
              wrapperClassName: "text-[#ffdea0] font-bold text-4xl",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
