import "./App.css";
import ComparisonTable from "./components/ComparisonTable";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OutreachFeatures from "./components/OutreachFeatures";
import OutreachHero from "./components/OutreachHero";
import OutreachWorkflow from "./components/OutreachWorkflow";
import Testimonials from "./components/Testimonials";
import TrustedBy from "./components/TrustedBy";

function App() {
  return (
    <div>
      <Navbar />
      <OutreachHero />
      <TrustedBy/>
      <OutreachFeatures />
      <ComparisonTable/>
      <OutreachWorkflow />
      <Testimonials />
      <FAQ />
      <Contact />

      <Footer/>
    </div>
  );
}

export default App;
