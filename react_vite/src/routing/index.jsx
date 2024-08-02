import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactForm from "../hooks/USE_STATE/ReactForm";
import HooksUseRef from "../hooks/USE_REF/HooksUseRef";
import HooksUseEffect from "../hooks/USE_EFFECT/HooksUseEffect";
import MenuBar from "../components/menu-bar";
import Loader from "../components/template/Loader";

export default function Router() {
  return (
    <BrowserRouter>
      <MenuBar />
      <Routes>
        <Route path="/" element={<ReactForm />} />
        <Route path="/useref" element={<HooksUseRef />} />
        <Route path="/posts" element={<HooksUseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}
