import Testimonial from "./testimonial";
import testimonialBg from "../../assets/img/map.png";
const SectionFour = () => {
  return (
    <div
      className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-16 text-neutral-800 "
      style={{
        backgroundImage: `url(${testimonialBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-12 lg:gap-16">
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-3xl md:text-4xl md:text-5xl font-extrabold capitalize text-center">
              What our clients say
            </h1>
            <p className="max-w-[40rem] text-justify md:text-center">
              Dive into firsthand experiences and testimonials, where our
              clients share their insights and reflections on their journey with
              us.
            </p>
          </div>
          <div>
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionFour;
