import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { routes } from "../Router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type ROUTES = keyof typeof routes;

interface IHeaderItem {
  route: ROUTES;
  setFullsize: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderOpenVar: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, type: "tween", delayChildren: 0.3 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween" },
  },
};

const HeaderOpenItemVar: Variants = {
  hidden: { opacity: 0, x: window.outerWidth },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, type: "tween" } },
  exit: {
    opacity: 0,
    x: window.outerWidth,
    transition: { duration: 0.5, type: "tween" },
  },
};

const HeaderCloseVar: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, type: "spring", delay: 0.3 },
  },
  exit: { opacity: 0, scale: 0, transition: { duration: 0.5, type: "spring" } },
};

const HeaderItem: React.FC<IHeaderItem> = ({ route, setFullsize }) => {
  const history = useNavigate();
  const handleLink = (route: ROUTES) => {
    setFullsize(false);
    switch (route) {
      case "ACORDIAN":
        history(routes.ACORDIAN);
        break;
      case "APP_STORE":
        history(routes.APP_STORE);
        break;
      case "CARD_SLIDER":
        history(routes.CARD_SLIDER);
        break;
      case "GRID_VIEW":
        history(routes.GRID_VIEW);
        break;
      case "HOME":
        history(routes.HOME);
        break;
      case "SCALE_UP_MENU":
        history(routes.SCALE_UP_MENU);
        break;
    }
  };
  return (
    <section
      onClick={() => handleLink(route)}
      className="p-3 px-5 bg-slate-300 rounded-2xl text-lg font-semibold cursor-pointer transform skew-x-12 shadow-md border border-slate-200 hover:scale-110 transition-all duration-300"
    >
      <h1 className="transform -skew-x-12 capitalize">{route.toLowerCase()}</h1>
    </section>
  );
};

export default function Header() {
  const [fullsize, setFullsize] = useState(false);
  const toggleFullsize = () => setFullsize((prev) => !prev);

  return (
    <AnimatePresence initial={false}>
      {fullsize ? (
        <motion.header
          variants={HeaderOpenVar}
          initial="hidden"
          animate="visible"
          exit="exit"
          key="fullsizeHeader"
          className="w-full h-full fixed top-0 left-0 z-20"
        >
          <div
            onClick={toggleFullsize}
            className="w-full h-full bg-black bg-opacity-50 cursor-pointer"
          ></div>
          <motion.main
            variants={HeaderOpenItemVar}
            className="fixed top-0 right-0 h-full bg-slate-200 p-5 py-10 flex flex-col justify-end items-center max-w-xs gap-10 overflow-hidden"
          >
            <HeaderItem route="HOME" setFullsize={setFullsize} />
            <HeaderItem route="ACORDIAN" setFullsize={setFullsize} />
            <HeaderItem route="APP_STORE" setFullsize={setFullsize} />
            <HeaderItem route="CARD_SLIDER" setFullsize={setFullsize} />
            <HeaderItem route="GRID_VIEW" setFullsize={setFullsize} />
            <HeaderItem route="SCALE_UP_MENU" setFullsize={setFullsize} />
          </motion.main>
        </motion.header>
      ) : (
        <motion.header
          key="header"
          variants={HeaderCloseVar}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={toggleFullsize}
          className="fixed w-16 h-16 bg-red-500 rounded-full p-5 bottom-0 right-0 z-10 m-10 flex justify-center items-center cursor-pointer"
        >
          <FontAwesomeIcon className="text-2xl text-slate-200" icon={faPlus} />
        </motion.header>
      )}
    </AnimatePresence>
  );
}
