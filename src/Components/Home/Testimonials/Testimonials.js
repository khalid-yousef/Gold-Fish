import { testimonialsData } from "./testimonials-data";
import TestimonialsCard from "./TestimonialsCard";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative overflow-hidden bg-[#292D36] w-full h-[100vh] flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl -mt-32 w-[90%] text-center text-white">
        Reviews
      </h1>
      <div
        className="w-[100%] flex items-center justify-center gap-10"
      >
        <Slider
          {...settings}
          className="w-[100%] p-5 absolute left-[50%] translate-x-[-50%]"
        >
          {testimonialsData.map((item) => (
            <div key={item.id}>
              <TestimonialsCard
                name={item.name}
                desc={item.desc}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
