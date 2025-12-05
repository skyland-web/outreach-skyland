import "./App.css";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import OutreachFeatures from "./components/OutreachFeatures";
import OutreachHero from "./components/OutreachHero";
import OutreachWorkflow from "./components/OutreachWorkflow";

function App() {
  return (
    <div>
      <Navbar />
      <OutreachHero />
      <OutreachFeatures />
      <OutreachWorkflow />
      <Contact />
    </div>
  );
}

export default App;
