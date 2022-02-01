import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence, Variants } from "framer-motion";

const containerVar: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const menuOpenContainerVar: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const menuOpenItemVar: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ScaleUpMenuPage() {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={menuOpen ? "open" : "close"}
        variants={containerVar}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`w-full min-h-screen ${menuOpen ? "bg-black" : "bg-white"}`}
      >
        {/* menu open button */}
        <aside className="p-5 text-5xl">
          <span
            onClick={toggleMenuOpen}
            className={`cursor-pointer ${
              menuOpen ? "text-white" : "text-black"
            }`}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faTimesCircle} />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} />
            )}
          </span>
        </aside>
        {/* main content */}
        {menuOpen && (
          <motion.main
            variants={menuOpenContainerVar}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full p-5 pt-0 flex flex-col gap-5 origin-top-left"
          >
            {Array.from(Array(10).keys()).map((item) => {
              return (
                <motion.section
                  key={item}
                  variants={menuOpenItemVar}
                  className="w-1/2 p-5 h-32 bg-slate-200 rounded-3xl flex justify-center items-center"
                >
                  {item}
                </motion.section>
              );
            })}
          </motion.main>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
