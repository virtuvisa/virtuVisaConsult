import { useState, useEffect } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import annie from "../../assets/img/testimonial/annie.jpg";
import susan from "../../assets/img/testimonial/susan.jpg";
import sophia from "../../assets/img/testimonial/sophia.jpg";
import florie from "../../assets/img/testimonial/susan.jpg";
const Testimonial = () => {
  let [current, setCurrent] = useState(0);

  let slides = [
    {
      img: annie,
      review:
        "We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your deviceWe redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device..",
      name: "annita r. miguel",
    },
    {
      img: susan,
      review:
        "We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device.We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device.",
      name: "susan ramirez",
    },
    {
      img: sophia,
      review:
        "We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your deviceWe redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device..",
      name: "sophia ramirez",
    },
    {
      img: annie,
      review:
        "We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device.We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device.",
      name: "annie ramirez",
    },
  ];
  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const autoTransition = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(autoTransition);
    };
  }, [current]);
  return (
    <div className=" w-full max-w-[1164px] mx-auto">
      <div className="md:overflow-hidden relative">
        <div
          className={`flex transition ease-out duration-40 pb-8`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map(({ img, review, name }, index) => (
            <div className="w-full" key={index}>
              <div className="w-[100vw] max-w-[100%]">
                <div className="relative  min-h-64 bg-white shadow-lg border-[1px] border-neutral-200 rounded-lg w-[100vw]  max-w-[90%] md:max-w-[70%] md:ml-[14vw] mx-auto">
                  <div className="absolute top-[.75rem] left-[-36%] md:block w-full md:absolute md:top-1/2 md:-translate-y-1/2 md:left-[-5rem] z-50">
                    <img
                      className="mx-auto md:mx-0 w-16 h-16 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
                      src={img}
                      alt={`Slide ${index}`}
                    />
                  </div>
                  <div className="pt-20 sm:pt-24 md:pt-0 p-6 md:p-10 md:pl-16 lg:p-12 lg:pl-24 flex flex-col justify-between h-full gap-4 text-justify">
                    <p className="md:text-lg">{review}</p>
                    <div className="md:relative md:left-0 md:top-0 absolute top-[1rem] left-[28%] sm:left-[21%]">
                      <h5 className="text-xl md:text-2xl font-bold capitalize ">
                        {name}
                      </h5>
                      <ul className="flex">
                        {[...Array(5)].map(() => (
                          <li key={Math.random()}>
                            <FaStar className="text-yellow-400 h-3 w-3 md:h-4 md:w-4" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white sm:px-2 md:px-4 text-3xl">
          <button className="border-[1px] rounded-full" onClick={previousSlide}>
            <BsFillArrowLeftCircleFill className="text-neutral-800" />
          </button>
          <button className="border-[1px] rounded-full" onClick={nextSlide}>
            <BsFillArrowRightCircleFill className="text-neutral-800" />
          </button>
        </div>
      </div>
      <div className=" py-4 flex justify-center gap-3 w-full z-30">
        {slides.map(({ img }, i) => (
          <img
            onClick={() => {
              setCurrent(i);
            }}
            src={img}
            key={"circle" + i}
            className={`transform rounded-full w-7 h-7 cursor-pointer  ${
              i == current ? "scale-[1.4]" : "bg-gray-500"
            }`}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
