import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AcordianPage from "./routes/AcordianPage";
import AppStorePage from "./routes/AppStorePage";
import Home from "./routes/Home";
import ScaleUpMenuPage from "./routes/ScaleUpMenuPage";
import GridView from "./routes/GridView";

function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/acordian" element={<AcordianPage />}></Route>
        <Route path="/app-store" element={<AppStorePage />}></Route>
        <Route path="/scale-up-menu" element={<ScaleUpMenuPage />}></Route>
        <Route path="/grid-view" element={<GridView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
