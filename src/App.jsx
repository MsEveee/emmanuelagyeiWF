import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Contact from "./components/HomePage/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


