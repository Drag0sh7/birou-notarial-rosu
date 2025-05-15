import React from 'react';
import img1 from '../assets/1.png';
import img10 from '../assets/10.png';

export default function ProfilNotarial() {
    /* ----------------- STILURI ----------------- */
    const containerStyle = {
        minHeight: '100vh',
        backgroundImage: `url("/images/home-backgr.png")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '120px',
        paddingBottom: '4rem',
        paddingInline: '1rem',
    };

    /*  🔵 blur scos din panelul principal  */
    const glassStyle = {
        background: 'rgba(255,255,255,0.15)',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        color: '#fff',
        maxWidth: '1100px',
        width: '100%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '1rem',
    };

    const nameStyle = { fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' };
    const subtitleStyle = { fontSize: '1.4rem', fontWeight: 500, marginBottom: '1rem' };

    const descStyle = {
        fontSize: '1.1rem',
        lineHeight: 1.8,
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'justify',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    };

    const imagesStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
    };

    const imageWrapperStyle = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
        maxWidth: '420px',
        width: '100%',
        height: '300px',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    };

    /*  container hartă fără blur */
    const mapContainerStyle = {
        background: 'rgba(255,255,255,0.12)',
        borderRadius: '12px',
        padding: '1rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    };

    /* ----------------- JSX ----------------- */
    return (
        <div style={containerStyle}>
            <div style={glassStyle}>
                {/* -------- HEADER -------- */}
                <div style={headerStyle}>
                    <h2 style={nameStyle}>Roșu Elisabeta</h2>
                    <p style={subtitleStyle}>Notar Public din București</p>

                    <div style={descStyle}>
                        <p>
                            Sunt Roșu Elisabeta, notar public în București, și îmi desfășor activitatea cu seriozitate,
                            responsabilitate și respect față de fiecare persoană care îmi trece pragul.
                        </p>
                        <p>
                            În decursul carierei mele am autentificat sute de acte, am asistat clienți în tranzacții imobiliare,
                            am redactat testamente și procuri, am gestionat succesiuni și partaje, fiind mereu atentă la detalii
                            și la respectarea cadrului legal.
                        </p>
                        <p>
                            Cred cu tărie că profesia de notar presupune nu doar cunoștințe juridice solide, ci și empatie,
                            înțelegere și echilibru. Fiecare act semnat în biroul meu reflectă aceste valori: imparțialitate,
                            confidențialitate și profesionalism.
                        </p>
                        <p>
                            Indiferent dacă reprezentați o persoană fizică sau o companie, veți găsi la mine soluții legale sigure,
                            clare și adaptate situației dumneavoastră. Mă mândresc cu relația de încredere pe care o construiesc cu
                            fiecare client și cu promptitudinea serviciilor oferite.
                        </p>
                        <p>
                            Vă aștept în biroul meu notarial pentru a vă oferi consultanță și sprijin juridic la cele mai
                            înalte standarde.
                        </p>
                    </div>
                </div>

                {/* -------- IMAGINI -------- */}
                <div style={imagesStyle}>
                    {[img1, img10].map((src, idx) => (
                        <div key={idx} style={imageWrapperStyle}>
                            <img
                                src={src}
                                alt={`Notar ${idx + 1}`}
                                style={imageStyle}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                            />
                        </div>
                    ))}
                </div>

                {/* -------- HARTĂ -------- */}
                <div style={mapContainerStyle}>
                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1.3rem' }}>Localizare birou</h4>
                    <iframe
                        src="https://www.google.com/maps?q=Str.+Vasile+Conta+4,+Bucuresti&output=embed"
                        title="Harta birou notarial"
                        style={{ width: '100%', height: '300px', border: 0, borderRadius: '8px' }}
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
}
