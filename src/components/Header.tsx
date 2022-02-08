import { Link, PathMatch, useMatch } from "react-router-dom";
import { motion } from "framer-motion";
import { routes } from "../Router";

interface IHeaderLink {
  match: PathMatch<string> | null;
  name: string;
  href: string;
}

const HeaderLink: React.FC<IHeaderLink> = ({ href, match, name }) => {
  return (
    <div className="relative">
      <Link to={href}>{name}</Link>
      {match && (
        <motion.div
          layoutId="underline"
          className="absolute -bottom-1 left-0 w-full h-1 bg-slate-500 rounded-full"
        ></motion.div>
      )}
    </div>
  );
};

export default function Header() {
  const homeMatch = useMatch(routes.HOME);
  const acordianMatch = useMatch(routes.ACORDIAN);
  const appStoreMatch = useMatch(routes.APP_STORE);
  const scaleUpMenuMatch = useMatch(routes.SCALE_UP_MENU);
  const gridView = useMatch(routes.GRID_VIEW);
  const cardSlider = useMatch(routes.CARD_SLIDER);

  return (
    <header className="w-full p-5 px-10 bg-slate-800 flex items-center text-slate-200 text-xl font-semibold  gap-10">
      <HeaderLink match={homeMatch} href={routes.HOME} name="홈" />
      <HeaderLink
        match={acordianMatch}
        href={routes.ACORDIAN}
        name="아코디언"
      />
      <HeaderLink
        match={appStoreMatch}
        href={routes.APP_STORE}
        name="앱 스토어"
      />
      <HeaderLink
        match={scaleUpMenuMatch}
        href={routes.SCALE_UP_MENU}
        name="스케일 업 메뉴"
      />
      <HeaderLink match={gridView} href={routes.GRID_VIEW} name="그리드 뷰" />
      <HeaderLink
        match={cardSlider}
        href={routes.CARD_SLIDER}
        name="카드 슬라이더"
      />
    </header>
  );
}
