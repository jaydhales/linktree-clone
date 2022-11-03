import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";

import "./App.css";
import { useState } from "react";

function App() {
  const name = useState("james-o");
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home name={name} />} />
        <Route path="contact" element={<Contact name={name} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
