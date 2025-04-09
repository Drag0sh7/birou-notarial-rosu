import React from 'react';
import img1 from '../assets/1.png';
import img10 from '../assets/10.png';
import './ProfilNotar.css';

export default function ProfilNotarial() {
    return (
        <div className="profil-wrapper">
            <div className="glass-profil-container">
                {/* Header Section */}
                <div className="profil-header">
                    <h2>Roșu Elisabeta</h2>
                    <p className="profil-subtitle">Notar Public din București</p>
                    <p className="profil-description">
                        Cu o carieră solidă și o reputație construită pe încredere, corectitudine și eficiență, Roșu Elisabeta oferă servicii notariale moderne, adaptate nevoilor actuale ale cetățenilor și companiilor.
                    </p>
                </div>

                {/* Profile Photos */}
                <div className="profil-images">
                    <img src={img1} alt="Notar" className="profil-image" />
                    <img src={img10} alt="Notar 2" className="profil-image" />
                </div>

                {/* Contact Info */}
                <div className="profil-card">
                    <h4>Date de contact</h4>
                    <ul className="profil-contact">
                        <li><strong>Telefon:</strong> 0730 999 704 / 0723 347 307</li>
                        <li><strong>Fax:</strong> 0311 265 009</li>
                        <li><strong>Email:</strong> elisabeta.rosu72@gmail.com / rosu.elisabeta@enp.ro</li>
                        <li><strong>Adresă:</strong> Str. Vasile Conta nr. 4, et. 2, sector 2, interfon 02, București</li>
                    </ul>
                </div>

                {/* Google Map */}
                <div className="profil-card">
                    <h4>Localizare birou</h4>
                    <div className="profil-map">
                        <iframe
                            src="https://www.google.com/maps?q=Str.+Vasile+Conta+4,+Bucuresti&output=embed"
                            title="Harta birou notarial"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
