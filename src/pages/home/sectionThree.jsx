import { motion } from "framer-motion";
import { MdSmartphone } from "react-icons/md";
import { AiFillUnlock } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import fullAccess from "../../assets/img/home/homeSecTwoFullAccess.svg";
import fullAssistance from "../../assets/img/home/homeSecThreeFullAssistance.svg";
import fullVirtualTransaction from "../../assets/img/home/homeSecThreeVirtual.svg";

import {
  slideDownAnim,
  slideUpAnim,
  slideRTLAnim,
} from "../../utils/animation";
const SectionThree = ({ isDesktop }) => {
  const isMobile = useMediaQuery({ maxWidth: 476 });
  const steps = [
    {
      icon: <MdSmartphone className="h-20 w-20 " />,
      title: "seemless virtual transactions",
      content:
        "We redefined convenience. Enjoy swift and secure processes, ensuring efficiency and peace of mind from the comfort of your device.",
    },
    {
      icon: <FaHandshake className="h-20 w-20 " />,
      title: "complete assistance",
      content:
        "From start to finish, our dedicated team is committed in guiding you through every step, ensuring a smooth and stress-free journey.",
    },
    {
      icon: <AiFillUnlock className="h-20 w-20 " />,
      title: "full access",
      content:
        "Experience applying with confidence! Our comprehensive services grant you complete visibility, access and control over your application.",
    },
  ];

  return (
    <div className="bg-white px-6 md:px-12 lg:px-16 text-neutral-800">
      <div className="min-h-screen py-16 md:py-24 w-full max-w-[1164px] mx-auto overflow-hidden">
        <div className=" h-full grid lg:grid-cols-2 place-items-center items-center gap-6">
          <div className="flex flex-col gap-12 lg:gap-16 ">
            <motion.div
              className="flex flex-col gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideDownAnim(0)}
            >
              <h1 className="text-4xl md:text-5xl text-center md:text-start font-extrabold capitalize">
                Why choose us
              </h1>
              <p className="max-w-[40rem] text-justify mx-auto md:mx-0">
                At VirtuVisa Consultation, trust our expertise for a smooth,
                hassle-free visa journey with personalized service and
                convenience. Choose excellence with our dedicated team.
              </p>
            </motion.div>
            <div className="flex flex-col gap-8">
              {steps.map(({ icon, title, content }, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={
                    isDesktop
                      ? slideUpAnim(0.3 * (idx + 1))
                      : slideUpAnim(0.15 * (idx + 1))
                  }
                >
                  <div
                    className={`${
                      isMobile ? "hidden" : "flex"
                    }  gap-4 items-center`}
                  >
                    <i className="block bg-blue-200 rounded-xl p-2 text-neutral-700">
                      {icon}
                    </i>
                    <div className="flex flex-col gap-1 justify-between">
                      <h3 className="text-2xl font-bold capitalize tracking-tight">
                        {title}
                      </h3>
                      <p className="text-justify">{content}</p>
                    </div>
                  </div>
                  <div className={`${isMobile ? "block" : "hidden"} `}>
                    <h3 className="text-2xl font-bold capitalize tracking-tight mb-2">
                      {title}
                    </h3>
                    <div className="flex gap-4 items-center">
                      <div className="flex gap-4 items-start">
                        <i className="block bg-blue-200 rounded-xl p-2 text-neutral-700">
                          {icon}
                        </i>
                        <p className="text-justify">{content}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 sm:grid-rows-2 gap-4 justify-items-center  h-full w-full p-2">
            <motion.div
              className="min-h-[300px] lg:h-auto max-w-full w-full  max-w-64 lg:max-h-64  "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRTLAnim(0.9)}
            >
              <img src={fullVirtualTransaction} alt="Trash Can" className="" />
            </motion.div>
            <motion.div
              className="min-h-[300px] sm:row-span-full self-center	sm:col-end-3 max-w-64 sm:max-h-64 w-full h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRTLAnim(0.6)}
            >
              <img src={fullAssistance} alt="Trash Can" className="" />
            </motion.div>
            <motion.div
              className="min-h-[300px] lg:h-auto max-w-full w-full max-w-64 lg:max-h-64 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRTLAnim(0.3)}
            >
              <img src={fullAccess} alt="Trash Can" className="" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;
