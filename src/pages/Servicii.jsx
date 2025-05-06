import React from 'react';
import { Link } from 'react-router-dom';

const services = [
    { name: 'Contracte', path: '/servicii/contracte', emoji: '📄' },
    { name: 'Succesiuni', path: '/servicii/succesiuni', emoji: '🏠' },
    { name: 'Testamente', path: '/servicii/testamente', emoji: '📝' },
    { name: 'Divorț', path: '/servicii/divort', emoji: '⚖️' },
    { name: 'Procuri', path: '/servicii/procuri', emoji: '✍️' },
    { name: 'Declarații', path: '/servicii/declaratii', emoji: '📃' },
    { name: 'Consiliere Investitori', path: '/servicii/consiliere-investitori', emoji: '💼' },
];

export default function Servicii() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start pt-32 px-4 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/home-backgr.png')" }}
        >
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl w-full text-white">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
                    Serviciile Noastre
                </h1>
                <p className="text-center max-w-2xl mx-auto text-white/85 mb-10 text-lg md:text-xl leading-relaxed">
                    Oferim o gamă completă de servicii notariale, cu profesionalism, seriozitate și promptitudine.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {services.map((service) => (
                        <Link
                            key={service.name}
                            to={service.path}
                            className="w-40 h-40 md:w-48 md:h-48 rounded-2xl bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:bg-white/30 transition-all text-center hover:scale-105"
                        >
                            <div className="text-4xl md:text-5xl">{service.emoji}</div>
                            <span className="mt-3 font-semibold text-sm md:text-base">{service.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
