import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Setcard from "./Pages/Setcard";
import NoPage from "./Pages/NoPage";
import Apropos from "./Pages/Apropos";
import Appartement from "./Pages/Appartement";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Setcard />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/Appartement/:id" element={<Appartement/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
