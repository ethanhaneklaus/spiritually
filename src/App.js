import "./App.css";
import Menu from "./components/Menu";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProfilePage from "./components/ProfilePage";
import { UserContext } from "./context/UserContext";
import ProtectedRoute from "./shared/ProtectedRoute";
import { useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState("");
  return (
    <Router>
      <Menu />
      <Routes>
        <Route
          path="/register"
          element={
            <ProtectedRoute requiresLogin={false} component={<RegisterPage />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <ProtectedRoute requiresLogin={false} component={<LoginPage />}
            />
          }
        />

        {/* <Route
          path="/main"
          element={
            <ProtectedRoute requiresLogin={true} component={<MainPage />}
              setCurrentUser={setCurrentUser}
            />
          }
        /> */}

        <Route
          path="/quotes"
          element={
            <ProtectedRoute requiresLogin={true} component={<ProfilePage />}
              setCurrentUser={setCurrentUser}
            />
          }
        />
        <Route path="*" element={<Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
