import React from 'react';
import { Link } from 'react-router-dom';
import './Servicii.css';

const services = [
    { name: 'Contracte', path: '/servicii/contracte' },
    { name: 'Succesiuni', path: '/servicii/succesiuni' },
    { name: 'Testamente', path: '/servicii/testamente' },
    { name: 'Divorț', path: '/servicii/divort' },
    { name: 'Procuri', path: '/servicii/procuri' },
    { name: 'Declarații', path: '/servicii/declaratii' },
    { name: 'Consiliere Investitori', path: '/servicii/consiliere-investitori' },
];

export default function Servicii() {
    return (
        <div className="glass-servicii-wrapper">
            <div className="glass-servicii-container">
                <h1 className="glass-servicii-title">Serviciile Noastre</h1>
                <p className="glass-servicii-subtitle">
                    Oferim o gamă completă de servicii notariale, cu profesionalism, experiență și promptitudine.
                </p>

                <div className="glass-servicii-grid">
                    {services.map((service, index) => (
                        <Link to={service.path} className="glass-servicii-card" key={index}>
                            <div className="glass-servicii-card-inner">
                                <h4>{service.name}</h4>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
