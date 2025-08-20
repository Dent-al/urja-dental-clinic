import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import OurTeam from './Pages/Our Team';
import Services from './Pages/Services';
import HolisticDentist from './Pages/Holistic Dentist';
import HappyPatients from './Pages/Happu Patients';
import ClinicTour from './Pages/Clinic tour';
import DentalTourism from './Pages/Dental tourism';
import CasesPictures from './Pages/Cases pictures';
import BookOnline from './Pages/Book Online';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialIcons from "./SocialIcons";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <SocialIcons />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/holistic-dentist" element={<HolisticDentist />} />
          <Route path="/happy-patients" element={<HappyPatients />} />
          <Route path="/clinic-tour" element={<ClinicTour />} />
          <Route path="/dental-tourism" element={<DentalTourism />} />
          <Route path="/cases-pictures" element={<CasesPictures />} />
          <Route path="/book-online" element={<BookOnline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
