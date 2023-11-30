import AboutOne from "./aboutOne";
import AboutTwo from "./aboutTwo";
import AboutThree from "./aboutThree";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <AboutOne isDesktop={isDesktop} />
      <AboutTwo isDesktop={isDesktop} />
      <AboutThree isDesktop={isDesktop} />
    </div>
  );
};
export default About;
