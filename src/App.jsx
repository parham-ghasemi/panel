import "./App.css";
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/notFound/NotFound";
import { ModalProvider } from "./contexts/ModalContext";
import Home from "./components/home/Home.jsx";

function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Layout />}>
              {/* Routes Go Here ! */}
              <Route index={true} element={<Home />} />

              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;
