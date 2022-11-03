import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const name = "james-o";
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
