import React from 'react';
import '../App.css';
import img1 from '../assets/1.png';
import img3 from '../assets/3.png';
import img5 from '../assets/5.png';
import img7 from '../assets/7.png';
import stamp from '../assets/stampilare.png';
import consult from '../assets/consultare.png';
import signed from '../assets/semnat.png';
function Home() {
    return (
        <>

            {/* Hero section */}
            <section id="hero" className="glass-dark hero-section">
                <h1>Biroul Notarial Roșu Elisabeta</h1>
                <p>Profesionalism, promptitudine și confidențialitate în servicii notariale.</p>
                <a href="#contact" className="btn">Contactați-ne</a>
            </section>

            {/* About section */}
            <section id="despre" className="glass-light about-section">
                <h2>Despre noi</h2>
                <div className="about-flex">
                    <div className="about-content">
                        <p>Elisabeta Roșu, notar public cu peste 20 de ani de experiență, oferă servicii notariale complete și consultanță juridică de specialitate. Biroul nostru este dedicat să ofere clienților soluții eficiente, corecte și personalizate, într-un mediu primitor și profesionist.</p>
                    </div>
                    <div className="about-image">
                        <img src={img3} alt="Interiorul biroului notarial" />
                    </div>
                </div>
            </section>

            {/* Services section */}
            <section id="servicii" className="glass-light services-section">
                <h2>Servicii</h2>
                <p>Oferim o gamă completă de servicii notariale pentru persoane fizice și juridice, inclusiv:</p>
                <div className="services-list">
                    <div className="service-card">
                        <img src={stamp} alt="Ștampilarea unui document" />
                        <h3>Autentificări și Legalizări</h3>
                        <p>Autentificăm documente oficiale și legalizăm copii ale actelor, asigurându-ne că acestea au forță legală și sunt recunoscute de autorități.</p>
                    </div>
                    <div className="service-card">
                        <img src={consult} alt="Consultanță pentru succesiune" />
                        <h3>Succesiuni și Testamente</h3>
                        <p>Oferim asistență completă în procedurile de succesiune și la întocmirea testamentelor, garantând confidențialitate și consiliere profesionistă la fiecare pas.</p>
                    </div>
                    <div className="service-card">
                        <img src={signed} alt="Semnarea unui contract la notar" />
                        <h3>Contracte și Procuri</h3>
                        <p>Autentificăm contracte de vânzare-cumpărare, împrumut sau alte acte, precum și procuri speciale sau generale, asigurând validitatea și siguranța documentelor dumneavoastră.</p>
                    </div>
                </div>
            </section>

            {/* Contact section (footer) */}
            <footer id="contact" className="glass-light contact-section">
                <h2>Contact</h2>
                <p><strong>Adresă:</strong> Str. Vasile Conta nr. 4, et. 2, ap. 3, Sector 2, București</p>
                <p><strong>Telefon:</strong> 0314 265 069, 0723 347 307, 0730 999 704</p>
                <p><strong>Email:</strong> rosu.elisabeta@enp.ro</p>
                <p><strong>Program:</strong> Luni - Vineri: 09:00 - 17:00; Sâmbătă și Duminică: ÎNCHIS</p>
            </footer>
        </>
    );
}

export default Home;
