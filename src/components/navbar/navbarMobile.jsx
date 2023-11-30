import { Link } from "react-router-dom";
import { navItems } from "./navbarContent";
import { scrollToTop } from "../../utils/scrollToTop";
import { motion, AnimatePresence } from "framer-motion";
import { slideDownNavAnim } from "../../utils/animation";
import { Dialog } from "@headlessui/react";
const NavbarMobile = ({ openNav, setOpenNav }) => {
  console.log(openNav);
  return (
    <AnimatePresence>
      {openNav && (
        <Dialog
          as={motion.div}
          static
          open={openNav}
          onClose={() => setOpenNav(false)}
        >
          <motion.div
            className="fixed mt-14  inset-0 block md:hidden"
            initial="hidden"
            animate={openNav ? "visible" : "hidden"}
            exit={"hidden"}
            variants={slideDownNavAnim()}
          >
            <Dialog.Panel>
              <div className="relative flex flex-col py-6 bg-blue-600 gap-10 ">
                {navItems.map(({ link, content }, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={link}
                      className="text-blue-100 capitalize  px-6 md:px-12 lg:px-16"
                      onClick={() => {
                        scrollToTop();
                        setOpenNav(false);
                      }}
                    >
                      {content}
                    </Link>
                  );
                })}
              </div>
            </Dialog.Panel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};
export default NavbarMobile;
