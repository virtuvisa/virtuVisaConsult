import { slideLTRAnim, scaleAnim, slideUpAnim } from "../../utils/animation";
import { motion } from "framer-motion";
import travelImg from "../../assets/img/about/aboutSecThree.svg";

const AboutThree = ({ isDesktop }) => {
  return (
    <div className="bg-neutral-100 px-6 md:px-12 lg:px-16  text-neutral-800">
      <div className="h-full py-16 w-full max-w-[1164px] mx-auto">
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
                  Our expertise
                </span>
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-start">
                Passport to Memorable Moments
              </h1>
              <p className="text-justify">
                We excel in visitor visas, ensuring seamless journeys for your
                vacations, family reunions, and explorations. Our expertise lies
                in simplifying the application process, providing expert
                guidance, and offering tailored support for your specific
                visitor visa needs.
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
              <img src={travelImg} alt="Trash Can" className="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
