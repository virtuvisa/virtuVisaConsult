import { BiRightArrowAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { slideDownAnim, slideUpAnim } from "../../utils/animation";
import { BiCheckCircle } from "react-icons/bi";
const ServicesTwo = () => {
  const planItems = [
    {
      name: "Free Package",
      price: "free",
      description: "Essentials for a Seamless Start",
      services: [
        "Education Assessment",
        "School & Program Selection",
        "Document Collection & Verification",
        "School Application Submission And Monitoring",
        "Two (2) Complimentary Consultations",
      ],
    },
    {
      name: "Single Application Package",
      price: "10000",
      description: "Tailored Support for Solo apllicant",
      services: [
        "Education Assessment",
        "School & Program Selection",
        "Document Collection & Verification",
        "School Application Submission And Monitoring",
        "Two (2) Complimentary Consultations",
        "Two (2) Complimentary Consultations",
        "Two (2) Complimentary Consultations",
      ],
    },
    {
      name: "Family Application Package",
      price: "15000",
      description: "Unified Assistance for a Collective Journey",
      services: [
        "Education Assessment",
        "School & Program Selection",
        "Document Collection & Verification",
        "School Application Submission And Monitoring",
        "Two (2) Complimentary Consultations",
      ],
    },
  ];
  return (
    <div className="min-h-screen bg-neutral-900 py-12 md:py-16 lg:py-24 px-6  md:px-12 lg:px-16  text-neutral-300  ">
      <div className="w-full max-w-[1164px] mx-auto h-full">
        <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 ">
          <motion.div
            className="flex flex-col gap-4 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideDownAnim(0.3)}
          >
            <h1 className="text-4xl md:text-5xl font-bold capitalize">
              our packages
            </h1>
            <p className="max-w-[40rem] text-justify md:text-center">
              Choose from our array of packages, designed to cater to diverse
              needs and preferences, each promising a distinctive pathway to
              your destination. Let us be your trusted companion on this
              transformative voyage!
            </p>
          </motion.div>
          <motion.div className="grid grid-cols md:grid-cols-2  lg:grid-cols-3 gap-8 h-full w-full mx-auto justify-items-center">
            {planItems.map(({ name, description, price, services }, idx) => {
              return (
                <div
                  className={`${
                    idx === 2
                      ? "md:col-span-full lg:col-span-1  md:w-[45vw] lg:w-full"
                      : " "
                  }`}
                >
                  <div className={`bg-neutral-800 p-6 rounded-lg`} key={idx}>
                    <div className="flex flex-col gap-2 mb-10 text-center">
                      <h3 className="uppercase text-2xl font-bold text-blue-500">
                        {name}
                      </h3>
                      <p className="text-sm">{description}</p>
                    </div>
                    <p className="mb-10 text-center tracking-tight">
                      Starts at
                      <span className="text-blue-400 text-xl"> &#8369; </span>
                      <span className="text-4xl font-bold text-blue-500">
                        {price}
                      </span>
                    </p>
                    <ul className="flex flex-col gap-4 mb-8 capitalize">
                      {services.map((service, idx) => {
                        return (
                          <li key={idx} className="flex items-center gap-1">
                            <i>
                              <BiCheckCircle className="text-sky-400" />
                            </i>
                            {service}
                          </li>
                        );
                      })}
                    </ul>
                    <button className="uppercase block mx-auto">
                      <p className="px-[4vw] py-2 bg-blue-500 text-blue-100 text-center rounded">
                        Get Started
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default ServicesTwo;
