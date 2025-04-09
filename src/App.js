import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Contact from './pages/Contact';
import ProfilNotar from './pages/ProfilNotar';
import Servicii from './pages/Servicii';

import Divort from './pages/services/Divort';
import Contracte from './pages/services/Contracte';
import Succesiuni from './pages/services/Succesiuni';
import Testamente from './pages/services/Testamente';
import Procuri from './pages/services/Procuri';
import Declaratii from './pages/services/Declaratii';
import ConsiliereInvestitori from './pages/services/ConsiliereInvestitori';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<ProfilNotar />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/servicii" element={<Servicii />} />
          <Route path="/servicii/divort" element={<Divort />} />
          <Route path="/servicii/contracte" element={<Contracte />} />
          <Route path="/servicii/succesiuni" element={<Succesiuni />} />
          <Route path="/servicii/testamente" element={<Testamente />} />
          <Route path="/servicii/procuri" element={<Procuri />} />
          <Route path="/servicii/declaratii" element={<Declaratii />} />
          <Route path="/servicii/consiliere-investitori" element={<ConsiliereInvestitori />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
