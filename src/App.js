import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CookieConsent from 'react-cookie-consent';
import PoliticaCookie from './PoliticaCookie';

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

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2B3A67',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: '#f4f5f7',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#333',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#333',
    },
    body1: {
      fontSize: '1rem',
      color: '#333',
    },
  },
  spacing: 8,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <main className="container" style={{ paddingTop: '100px', minHeight: '100vh' }}>
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
            <Route path="/politica-cookie" element={<PoliticaCookie />} />
          </Routes>
        </main>
        <Footer />

        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="birouNotarialCookieConsent"
          style={{
            background: 'rgba(0, 0, 0, 0.75)',
            color: '#fff',
            fontSize: '16px',
            padding: '20px',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
          buttonStyle={{
            backgroundColor: '#00c2a8',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
            padding: '10px 20px',
            borderRadius: '8px',
            border: 'none',
            marginTop: '10px',
          }}
          contentStyle={{
            flex: '1 1 70%',
            marginRight: '20px',
            minWidth: '250px',
          }}
          buttonWrapperClasses="cookie-button-wrapper"
          expires={150}
        >
          Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorului.
        </CookieConsent>
      </Router>
    </ThemeProvider>
  );
}

export default App;
