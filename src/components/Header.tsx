import { Link, PathMatch, useMatch } from "react-router-dom";
import { motion } from "framer-motion";

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
  const homeMatch = useMatch("/");
  const acordianMatch = useMatch("/acordian");
  const appStoreMatch = useMatch("/app-store");
  const scaleUpMenuMatch = useMatch("/scale-up-menu");
  const gridView = useMatch("/grid-view");

  return (
    <header className="w-full p-5 px-10 bg-slate-800 flex items-center text-slate-200 text-xl font-semibold  gap-10">
      <HeaderLink match={homeMatch} href="/" name="홈" />
      <HeaderLink match={acordianMatch} href="/acordian" name="아코디언" />
      <HeaderLink match={appStoreMatch} href="/app-store" name="앱 스토어" />
      <HeaderLink
        match={scaleUpMenuMatch}
        href="/scale-up-menu"
        name="스케일 업 메뉴"
      />
      <HeaderLink match={gridView} href="/grid-view" name="그리드 뷰" />
    </header>
  );
}
