import { Link, PathMatch, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { routes } from "../Router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface IMenuItem {
  name: string;
  href: string;
}

const MenuItem: React.FC<IMenuItem> = ({ href, name }) => {
  return (
    <Link to={href}>
      <section className="group flex gap-5 items-center hover:bg-slate-200 p-3 rounded-2xl">
        <div className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center group-hover:bg-slate-300">
          <FontAwesomeIcon
            className="group-hover:text-slate-700  text-slate-200 text-2xl"
            icon={faLink}
          />
        </div>
        <span className="text-slate-200 text-2xl group-hover:text-slate-700 font-semibold">
          {name}
        </span>
      </section>
    </Link>
  );
};
export default function Header() {
  const [fullsize, setFullsize] = useState(false);
  const homeMatch = useMatch(routes.HOME);
  const acordianMatch = useMatch(routes.ACORDIAN);
  const appStoreMatch = useMatch(routes.APP_STORE);
  const scaleUpMenuMatch = useMatch(routes.SCALE_UP_MENU);
  const gridView = useMatch(routes.GRID_VIEW);
  const cardSlider = useMatch(routes.CARD_SLIDER);

  return fullsize ? (
    <header className="fixed bottom-0 right-0 flex flex-col justify-end items-start cursor-pointer z-10 gap-5 p-5 h-[100vh] bg-black bg-opacity-90">
      <MenuItem href={routes.HOME} name="Home" />
      <MenuItem href={routes.ACORDIAN} name="Acordian" />
      <MenuItem href={routes.APP_STORE} name="App Store" />
      <MenuItem href={routes.CARD_SLIDER} name="Card Slider" />
      <MenuItem href={routes.GRID_VIEW} name="Grid View" />
      <MenuItem href={routes.SCALE_UP_MENU} name="Scale Up Menu" />
      <section className="p-3">
        <div
          onClick={() => setFullsize(false)}
          className="w-14 h-14 rounded-full bg-slate-800 flex justify-center items-center "
        >
          <FontAwesomeIcon className="text-slate-200 text-2xl" icon={faMinus} />
        </div>
      </section>
    </header>
  ) : (
    <header
      onClick={() => setFullsize(true)}
      className="fixed bottom-0 right-0 flex justify-center items-center mb-5 mr-5 w-14 h-14 rounded-full bg-red-500  text-slate-200 cursor-pointer z-10"
    >
      <FontAwesomeIcon className="text-2xl" icon={faPlus} />
    </header>
  );
}
