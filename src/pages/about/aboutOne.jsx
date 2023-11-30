import { slideLTRAnim, scaleAnim, slideUpAnim } from "../../utils/animation";
import { motion } from "framer-motion";
import trustImg from "../../assets/img/about/aboutSecOne.svg";

const AboutOne = ({ isDesktop }) => {
  return (
    <div className="bg-neutral-100 px-6 md:px-12 lg:px-16 text-neutral-800">
      <div className="h-full py-12 lg:py-16 !pt-24  w-full max-w-[1164px] mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
        <div className="text-center flex flex-wrap flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black capitalize">
            About us
          </h1>
          <p className="max-w-[40rem] mx-auto text-justify md:text-center">
            Discover who we are, what we stand for, and our commitment to
            helping you achieve your visa and immigration goals. At{" "}
            <span className="text-lg font-bold">VirtuVisaConsult</span>, we're
            dedicated to simplifying the process and making your international
            dreams a reality.
          </p>
        </div>
        <div className=" h-full flex flex-col-reverse md:flex-row md:flex-nowrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="max-w-[40rem]">
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={isDesktop ? slideLTRAnim(0) : slideUpAnim(0.3)}
            >
              <h3 className="text-xl font-semibold capitalize mb-2 md:mb-4 lg:mb-6 text-center  md:text-start">
                <span className="bg-blue-500 px-4 py-2 rounded-full text-blue-100 ">
                  Our vision
                </span>
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-start">
                At VirtuVisaConsult
              </h1>
              <p className="text-justify">
                We envision a digital platform that fosters transparency, ease
                of use, and above all, the assurance that your visa application
                process is in the safest hands. We are committed to standing as
                a fortress against scams and fraudulent practices, setting new
                standards for the industry. Our vision is to become a beacon of
                trust and reliability in the realm of visa application
                consultancy.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isDesktop ? scaleAnim(0, 0.75) : slideUpAnim(0)}
          >
            <div className="h-96 w-96 ">
              <img src={trustImg} alt="Trash Can" className="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
