import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactForm from "../hooks/USE_STATE/ReactForm";
import HooksUseRef from "../hooks/USE_REF/HooksUseRef";
import HooksUseEffect from "../hooks/USE_EFFECT/HooksUseEffect";
import MenuBar from "../components/menu-bar";
import Loader from "../components/template/Loader";
import HooksUseContext from "../hooks/USE_CONTEXT/HooksUseContext";
import HooksUseReducer from "../hooks/USE_REDUCER/HooksUseReducer";
import HooksUseState from "../hooks/USE_STATE/HooksUseState";
import SettingMenuBar from "../components/menu-bar/setting-menu-bar";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <MenuBar /> */}
      <Routes>
        <Route path="/" element={<ReactForm />} />

        {/* /hooks/ */}
        <Route path="/hooks" element={<MenuBar />}>
          <Route path="usestate" element={<HooksUseState />} />
          <Route path="useref" element={<HooksUseRef />} />
          <Route path="posts" element={<HooksUseEffect />} />
          <Route path="usecontext" element={<HooksUseContext />} />
          <Route path="usereducer" element={<HooksUseReducer />} />
        </Route>

        {/* settings */}
        <Route path="/settings" element={<SettingMenuBar />}>
          <Route path="change-password" element={<h2>Change Password</h2>} />
          <Route path="view-profile" element={<h2>View Profile</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
