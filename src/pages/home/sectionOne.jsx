import { motion } from "framer-motion";
import { useRef } from "react";
import {
  slideDownAnim,
  slideUpAnim,
  slideRTLAnim,
} from "../../utils/animation";
import sectionOne from "../../assets/img/home/homeSectionOne.svg";

const SectionOne = ({ isDesktop }) => {
  const sectionOneRef = useRef(null);
  return (
    <div className=" bg-neutral-100 px-6 md:px-12 lg:px-16 text-neutral-800">
      <div
        className="py-16 md:py-24 w-full max-w-[1164px] mx-auto "
        ref={sectionOneRef}
      >
        <div className="h-full mt-16 flex flex-col-reverse md:flex-row items-center gap-6">
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={
                isDesktop ? { once: true } : { root: sectionOneRef, once: true }
              }
              variants={isDesktop ? slideDownAnim(0) : slideUpAnim(0.3)}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl  text-center md:text-start xl:text-7xl font-black capitalize">
                Start your visa journey with us!
              </h1>
              <p className="text-justify md:text-start text-lg">
                At
                <span className="font-bold text-xl"> VirtuVisaConsult </span>,
                we're your visa journey partners for visitor visas. Explore,
                reunite, and experience new horizons with our expert guidance.
                We'll make your application seamless and stress-free , ensuring
                peace of mind throughout the process. Begin your journey today!
              </p>
            </motion.div>
            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={
                isDesktop ? { once: true } : { root: sectionOneRef, once: true }
              }
              variants={isDesktop ? slideUpAnim(0) : slideUpAnim(0.6)}
            >
              <button className=" transition transform block mx-auto md:mx-0 px-4 py-2 md:px-8 lg:py-3 lg:px-16 rounded-full border-2 border-blue-500 hover:bg-blue-500  hover:outline-0 font-semibold uppercase duration-100 hover:scale-[1.02] hover:shadow-lg hover:text-blue-50">
                Book free consultation now!
              </button>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={
              isDesktop ? { once: true } : { root: sectionOneRef, once: true }
            }
            variants={isDesktop ? slideRTLAnim(0) : slideUpAnim(0)}
          >
            <div className=" w-full">
              <img
                src={sectionOne}
                alt="Trash Can"
                className="min-w-[364px] lg:min-w-[450px] w-[768px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SectionOne;
