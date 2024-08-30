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
import Login from "../auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import Count from "../reduxComponent/Count";
import ClassComponent from "../classComponents/ClassComponent";

export default function Router() {
  return (
    <BrowserRouter>
      {/* <MenuBar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<ReactForm />} />

        {/* /hooks/ */}
        <Route
          path="/hooks"
          element={
            <ProtectedRoute>
              <MenuBar />
            </ProtectedRoute>
          }
        >
          <Route
            path="usestate"
            element={
              <ProtectedRoute>
                <HooksUseState />
              </ProtectedRoute>
            }
          />
          <Route
            path="useref"
            element={
              <ProtectedRoute>
                <HooksUseRef />
              </ProtectedRoute>
            }
          />
          <Route
            path="posts"
            element={
              <ProtectedRoute>
                <HooksUseEffect />
              </ProtectedRoute>
            }
          />
          <Route
            path="usecontext"
            element={
              <ProtectedRoute>
                <HooksUseContext />
              </ProtectedRoute>
            }
          />
          <Route
            path="usereducer"
            element={
              <ProtectedRoute>
                <HooksUseReducer />
              </ProtectedRoute>
            }
          />
          <Route
            path="class_component"
            element={
              <ProtectedRoute>
                <ClassComponent />
              </ProtectedRoute>
            }
          />
        </Route>
        {/* settings */}
        <Route path="/settings" element={<SettingMenuBar />}>
          <Route path="change-password" element={<h2>Change Password</h2>} />
          <Route path="view-profile" element={<h2>View Profile</h2>} />
          <Route path="redux-count" element={<Count />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
