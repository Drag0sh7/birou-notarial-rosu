import React from 'react';
import './PoliticaCookie.css';

export default function PoliticaCookie() {
    return (
        <div className="cookie-policy glass-light container">
            <h1 className="cookie-title">Politica de Cookie-uri</h1>
            <p className="cookie-lead">
                Acest site utilizează cookie-uri pentru a oferi vizitatorilor o experiență cât mai bună de navigare și servicii adaptate nevoilor fiecăruia.
            </p>

            <h4 className="cookie-subtitle">Ce sunt cookie-urile?</h4>
            <p>
                Cookie-urile sunt fișiere de mici dimensiuni, formate din litere și cifre, care sunt stocate pe dispozitivul utilizatorului atunci când vizitează un site web. Acestea permit recunoașterea browserului și oferirea unei experiențe personalizate.
            </p>

            <h4 className="cookie-subtitle">De ce folosim cookie-uri?</h4>
            <ul className="cookie-list">
                <li>Pentru funcționarea corectă a site-ului și a componentelor interactive</li>
                <li>Pentru a analiza traficul și comportamentul vizitatorilor în mod anonim</li>
                <li>Pentru a adapta conținutul și publicitatea în funcție de preferințele utilizatorului</li>
            </ul>

            <h4 className="cookie-subtitle">Cum puteți controla cookie-urile?</h4>
            <p>
                Puteți seta browserul dvs. să blocheze sau să vă avertizeze asupra acestor fișiere. Cu toate acestea, anumite funcționalități ale site-ului pot deveni indisponibile.
                Accesați secțiunea „Ajutor” din browserul dvs. pentru setările de cookies.
            </p>

            <p className="cookie-update text-muted mt-5">
                Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
            </p>
        </div>
    );
}
