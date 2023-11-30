import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { slideDownAnim, slideUpAnim } from "../../utils/animation";
import {
  FaChartBar,
  FaFileSignature,
  FaPaperPlane,
  FaClipboardCheck,
  FaUserCog,
} from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const ServicesOne = ({ isDesktop }) => {
  const servicesItems = [
    {
      icon: <FaChartBar className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Individual evaluation and assessment",
      description:
        "Evaluation of an individual's eligibility for a Canadian visitor visa, taking into account factors such as travel history, financial situation, and purpose of the visit.",
    },
    {
      icon: <IoIosDocument className="h-8 w-8 md:h-10 md:w-10" />,
      title: "documents preparation and review",
      description:
        "Support in gathering and preparing all required documents. Reviewing and verifying the completeness and accuracy of the application package. ",
    },
    {
      icon: <FaFileSignature className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Account Setup And Form Assistance",
      description:
        "Real-time setting up IRCC portal or GCKEY account. Full aid on filling out, and help on completing the necessary visa application forms.",
    },
    {
      icon: <FaClipboardCheck className="h-8 w-8 md:h-10 md:w-10" />,
      title: "Polishing and Finalizing Documents",
      description:
        "Comprehensive editing phase and overall enhancement of the documents. Creating a polished and well-crafted final version, ready for submission. ",
    },
    {
      icon: <FaPaperPlane className="h-8 w-8 md:h-10 md:w-10" />,
      title: "application submission",
      description:
        "Assistance in lodging the application with a focus on precision and adherence to guidelines including appropriate submission channels and fee payment. ",
    },
    {
      icon: <FaUserCog className="h-8 w-8 md:h-10 md:w-10" />,

      title: "Follow-up, Tracking And Account Updates",
      description:
        "Ensure transparency by keeping applicants informed about the status of their visa application and providing updates on any requests for additional information.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-100 !pt-24 py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-16 text-neutral-800  overflow-hidden">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 ">
          <motion.div className="flex flex-col gap-4 items-center">
            <h1 className="text-4xl md:text-5xl font-black capitalize text-center ">
              our services and How It Work
            </h1>
            <p className="max-w-[40rem] text-justify md:text-center">
              Streamline your journey with us—from assessments to document
              preparation and beyond. Our client-focused approach and expert
              assistance redefine your experience, making your goals
              effortlessly achievable!
            </p>
          </motion.div>
          <motion.div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 h-full">
            {servicesItems.map(({ icon, title, description }, idx) => {
              return (
                <motion.div
                  key={idx}
                  className="relative overflow-hidden flex flex-col gap-4 bg-white p-6 pt-10 justify-start shadow-md rounded hover:outline outline-[1px] outline-blue-500"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={
                    isDesktop
                      ? slideUpAnim(0.3 * (idx + 1))
                      : slideUpAnim(0.1 * (idx + 1))
                  }
                >
                  <i>{icon}</i>
                  <h3 className="text-2xl font-bold capitalize">{title}</h3>
                  <p className="text-justify">{description}</p>

                  <i className="absolute top-[-3rem] right-[-1rem] h-24 w-24 bg-blue-400 opacity-50 rounded-full"></i>
                  <i className="absolute top-[-1rem] right-[-3rem] h-24 w-24  bg-blue-600 opacity-50 rounded-full"></i>
                  <h3 className="absolute top-[.5rem] right-[1rem] font-bold text-blue-50 text-2xl">
                    {idx + 1}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOne;
