import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
