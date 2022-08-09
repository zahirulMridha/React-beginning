import { Route, Routes } from "react-router-dom";
import "./app.css";
import About from "./components/Pages/About";
import Clock from "./components/Pages/Clock";
import Docs from "./components/Pages/Docs";
import Effect from "./components/Pages/Effect";
import Home from "./components/Pages/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/effect" element={<Effect/>} />
        <Route path="/clock" element={<Clock/>} />
      </Routes>
    </div>
  );
}
export default App;
