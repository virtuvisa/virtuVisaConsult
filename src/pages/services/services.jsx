import ServicesOne from "./servicesOne";
import ServicesTwo from "./servicesTwo";
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return (
    <div>
      <ServicesOne isDesktop={isDesktop} />
      <ServicesTwo isDesktop={isDesktop} />
    </div>
  );
};
export default Services;
