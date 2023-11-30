import SectionTwo from "./sectionTwo";
import SectionOne from "./sectionOne";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <SectionOne isDesktop={isDesktop} />
      <SectionTwo isDesktop={isDesktop} />
      <SectionThree isDesktop={isDesktop} />
      <SectionFour isDesktop={isDesktop} />
    </div>
  );
};

export default Home;
