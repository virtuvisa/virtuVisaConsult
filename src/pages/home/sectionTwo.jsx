import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineFileText } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { motion } from "framer-motion";
import { slideDownAnim, slideUpAnim } from "../../utils/animation";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/scrollToTop";
import { FaRegRectangleList } from "react-icons/fa6";
const SectionTwo = ({ isDesktop }) => {
  const servicesItems = [
    {
      icon: <FaRegRectangleList className="h-16 w-16 md:h-20 md:w-20 " />,
      title: "Visa elibility evaluation and assessment",
    },
    {
      icon: <AiOutlineFileText className="h-16 w-16 md:h-20 md:w-20  " />,
      title: "application Process and submission assistance",
    },
    {
      icon: (
        <IoIosNotificationsOutline className="h-16 w-16 md:h-20 md:w-20  " />
      ),
      title: "application tracking and updates",
    },
  ];

  return (
    <div className="bg-neutral-900 py-16 md:py-24 px-6 md:px-12 lg:px-16 text-neutral-300 overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-12 lg:gap-16 ">
          <motion.div
            className="flex flex-col gap-6 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideDownAnim(0.3)}
          >
            <h1 className="text-4xl md:text-5xl font-bold capitalize">
              our services
            </h1>
            <p className="max-w-[40rem] text-justify md:text-center">
              We offer a comprehensive range of services tailored to meet your
              diverse visa and immigration needs. Our commitment is to simplify
              your journey by providing expert guidance, top-notch support, and
              the latest information for visitor visa.
            </p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-full">
            {servicesItems.map(({ icon, title }, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden flex flex-col gap-4 bg-neutral-800 p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500 w-full "
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={
                    isDesktop
                      ? slideUpAnim(0.3 * (idx + 1))
                      : slideUpAnim(0.15 * (idx + 1))
                  }
                >
                  <i>{icon}</i>
                  <h3 className="text-2xl font-bold capitalize">{title}</h3>

                  <Link to="/services" onClick={scrollToTop}>
                    <button className="capitalize font-semibold outline-b-[4px] flex gap-1 items-center hover:underline underline-0 hover:text-blue-400 hover:underline-offset-4 underline-offset-0">
                      learn more
                      <i>
                        <BiRightArrowAlt className="h-5 w-5" />
                      </i>
                    </button>
                  </Link>
                  <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
                  <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SectionTwo;
