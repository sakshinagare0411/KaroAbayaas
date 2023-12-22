import "./styles.css";
import Navbar from "./Component/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Classes from "./routes/Classes";
import Products from "./routes/Products";
import Aboutus from "./routes/Aboutus";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>

      <Navbar />
    </div>
  );
}
