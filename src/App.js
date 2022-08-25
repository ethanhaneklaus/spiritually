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
import QuotePage from "./components/QuotePage";
import TarotPage from "./components/TarotPage";
import { UserContext } from "./context/UserContext";
import ProtectedRoute from "./shared/ProtectedRoute";
import { useEffect, useContext, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const { verify } = useContext(UserContext);
  useEffect(() => {
    async function init() {
      await verify();
      setLoading(false);
    }
    init();
  }, []);

  if (loading) {
    return <></>;
  }
  return (
    <div className="wholebg">
      <Router>
        <Menu />
        <Routes>
          <Route path="/register" element={<ProtectedRoute requiresLogin={false} component={<RegisterPage />} />} />
          <Route path="/login" element={<ProtectedRoute requiresLogin={false} component={<LoginPage />} />} />
          <Route path="/quote" element={<ProtectedRoute requiresLogin={true} component={<QuotePage />} />} />
          <Route path="/tarot" element={<ProtectedRoute requiresLogin={true} component={<TarotPage />} />} />
          <Route path="*" element={<Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
