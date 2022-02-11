import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop: React.FC = ({ children }) => {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollTop;
