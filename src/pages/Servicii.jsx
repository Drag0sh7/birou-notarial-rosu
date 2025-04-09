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
        <div className="servicii-container container py-5">
            <h1 className="servicii-title text-center mb-4">Serviciile Noastre</h1>
            <p className="servicii-subtitle text-center mb-5">
                Oferim o gamă completă de servicii notariale, cu profesionalism și promptitudine.
            </p>

            <div className="row justify-content-center">
                {services.map((service, index) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={index}>
                        <Link to={service.path} className="service-card text-decoration-none">
                            <div className="p-4 shadow-sm h-100 rounded card-effect">
                                <h5 className="text-blue-green fw-bold text-center">{service.name}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
