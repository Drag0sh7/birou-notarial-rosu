import React from 'react';
import img1 from '../assets/1.png';
import img10 from '../assets/10.png';

export default function ProfilNotarial() {
    return (
        <div className="container py-5">
            {/* Header Section */}
            <div className="text-center mb-5">
                <h2 className="section-title">Roșu Elisabeta</h2>
                <p className="fs-5">Notar Public din București</p>
                <p className="mx-auto" style={{ maxWidth: '800px' }}>
                    Cu o carieră solidă și o reputație construită pe încredere, corectitudine și eficiență, Roșu Elisabeta oferă servicii notariale moderne, adaptate nevoilor actuale ale cetățenilor și companiilor.
                </p>
            </div>

            {/* Profile Photos */}
            <div className="row justify-content-center mb-5">
                <div className="col-md-4 mb-3">
                    <img src={img1} alt="Notar" className="img-fluid shadow" />
                </div>
                <div className="col-md-4 mb-3">
                    <img src={img10} alt="Notar 2" className="img-fluid shadow" />
                </div>
            </div>

            {/* Contact Info */}
            <div className="card p-4 mb-5">
                <h4 className="section-title">Date de contact</h4>
                <ul className="list-unstyled fs-6 mb-0">
                    <li><strong>Telefon:</strong> 0730 999 704 / 0723 347 307</li>
                    <li><strong>Fax:</strong> 0311 265 009</li>
                    <li><strong>Email:</strong> elisabeta.rosu72@gmail.com / rosu.elisabeta@enp.ro</li>
                    <li><strong>Adresă:</strong> Str. Vasile Conta nr. 4, et. 2, sector 2, interfon 02, București</li>
                </ul>
            </div>

            {/* Google Map */}
            <div className="card p-4 shadow-sm">
                <h4 className="section-title">Localizare birou</h4>
                <div className="ratio ratio-16x9">
                    <iframe
                        src="https://www.google.com/maps?q=Str.+Vasile+Conta+4,+Bucuresti&output=embed"
                        title="Harta birou notarial"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
