import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/utils/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Domains from "./components/pages/Domains";
import Speakers from "./components/pages/Speakers";
import Timeline from "./components/pages/Timeline";
import Prizes from "./components/pages/Prizes";
import FAQ from "./components/pages/FAQ";
import Sponsors from "./components/pages/Sponsors";
import Footer from "./components/pages/Footer";
import NotificationModal from "./components/utils/NotificationModal";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  return (
    <Router>
      <Navbar />
      <Home />
      {show && <NotificationModal onClick={handleClose} />}
      <About />
      {/* <Domains /> */}
      <Speakers />
      <Timeline />
      <Prizes />
      <FAQ />
      <Sponsors />
      <Footer />
    </Router>
  );
}

export default App;
