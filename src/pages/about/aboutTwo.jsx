import { slideRTLAnim, scaleAnim, slideUpAnim } from "../../utils/animation";
import { motion } from "framer-motion";
import supportImg from "../../assets/img/about/aboutSecTwo.svg";

const AboutTwo = ({ isDesktop }) => {
  return (
    <div className="bg-neutral-200 px-6 md:px-12 lg:px-16  text-neutral-800">
      <div className="h-full py-16 w-full max-w-[1164px] mx-auto">
        <div className=" h-full flex flex-col-reverse md:flex-row-reverse md:flex-nowrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          <div className="max-w-[40rem]">
            <motion.div
              className="flex flex-col gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={isDesktop ? slideRTLAnim(0) : slideUpAnim(0.3)}
            >
              <h3 className="text-xl font-semibold capitalize mb-2 md:mb-4 lg:mb-6 text-center  md:text-start">
                <span className="bg-blue-500 px-4 py-2 rounded-full text-blue-100 ">
                  Our mission
                </span>
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center md:text-start">
                Visa Application Journey with Us
              </h1>
              <p className="text-justify">
                We aspire to be your trusted partner in navigating the
                intricacies of visa applications. Our commitment is to provide
                comprehensive guidance, top-notch support, and up-to-date
                information to ensure a smooth and successful visa application
                journey for our clients. Our aim is to eliminate the stress and
                uncertainty often associated with the process and replace it
                with confidence and peace of mind.
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
              <img src={supportImg} alt="Trash Can" className="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutTwo;
