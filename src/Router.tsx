import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AcordianPage from "./routes/AcordianPage";
import AppStorePage from "./routes/AppStorePage";
import Home from "./routes/Home";
import ScaleUpMenuPage from "./routes/ScaleUpMenuPage";
import GridView from "./routes/GridView";
import CardSliderPage from "./routes/CardSliderPage";
import OnViewportEnter from "./routes/OnViewportEnter";
import ScrollTop from "./components/ScrollTop";
import CardScatter from "./routes/CardScatter";

export const routes = {
  HOME: "/",
  ACORDIAN: "/acordian",
  APP_STORE: "/app-store",
  SCALE_UP_MENU: "/scale-up-menu",
  GRID_VIEW: "/grid-view",
  CARD_SLIDER: "/card-slider",
  ON_VIEWPORT_ENTER: "/on-viewport-enter",
  CARD_SCATTER: "/card-scatter",
};

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <ScrollTop>
        <Routes>
          <Route path={routes.HOME} element={<Home />}></Route>
          <Route path={routes.ACORDIAN} element={<AcordianPage />}></Route>
          <Route path={routes.APP_STORE} element={<AppStorePage />}></Route>
          <Route
            path={routes.SCALE_UP_MENU}
            element={<ScaleUpMenuPage />}
          ></Route>
          <Route path={routes.GRID_VIEW} element={<GridView />}></Route>
          <Route path={routes.CARD_SLIDER} element={<CardSliderPage />}></Route>
          <Route
            path={routes.ON_VIEWPORT_ENTER}
            element={<OnViewportEnter />}
          ></Route>
          <Route path={routes.CARD_SCATTER} element={<CardScatter />}></Route>
        </Routes>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default Router;
