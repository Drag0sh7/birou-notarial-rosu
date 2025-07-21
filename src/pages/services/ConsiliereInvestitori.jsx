import React, { useState } from 'react';

export default function ConsiliereInvestitori() {
    const [propertyValue, setPropertyValue] = useState('');
    const [actType, setActType] = useState('');
    const [notaryFee, setNotaryFee] = useState(null);
    const [registrationFee, setRegistrationFee] = useState(null);

    const calculateTaxes = () => {
        const value = parseFloat(propertyValue);
        if (isNaN(value) || value <= 0 || !actType) {
            alert('Introduceți o valoare validă și selectați tipul actului.');
            return;
        }

        let notary = 0;

        if (actType === 'vanzare') {
            if (value <= 20000) {
                notary = Math.max(0.022 * value, 230);
            } else if (value <= 35000) {
                notary = 440 + 0.019 * (value - 20001);
            } else if (value <= 65000) {
                notary = 725 + 0.016 * (value - 35001);
            } else if (value <= 100000) {
                notary = 1205 + 0.015 * (value - 65001);
            } else if (value <= 200000) {
                notary = 1705 + 0.011 * (value - 100001);
            } else if (value <= 600000) {
                notary = 2805 + 0.009 * (value - 200001);
            } else {
                notary = 6405 + 0.006 * (value - 600001);
            }
        } else {
            notary = 0.003 * value;
        }

        const intabulare = 0.0025 * value;

        setNotaryFee(notary.toFixed(2));
        setRegistrationFee(intabulare.toFixed(2));
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/062329ae-4fc8-4410-b6a4-4d61249b7eb3.png")' }}
        >
            <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
                <div className="bg-black bg-opacity-75 backdrop-blur-lg rounded-3xl p-10 md:p-14 text-white shadow-2xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-indigo-300 mb-12">
                        Consiliere pentru Investitori
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Oferim servicii juridice, fiscale și administrative pentru investitori în România — persoane fizice sau juridice.
                        Te ghidăm profesionist în toate etapele: firmă, proprietăți, contracte și autorizații.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">🏢 Înființare și Administrare Firmă</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>SRL, PFA, SA – acte + consultanță</li>
                            <li>Registrul Comerțului + ANAF</li>
                            <li>Modificări: sediu, CAEN, capital, asociați</li>
                            <li>Reprezentare și evitare blocaje birocratice</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">🏠 Achiziții Imobiliare</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>Verificare CF și acte de proprietate</li>
                            <li>Autentificare antecontract și contract final</li>
                            <li>Taxe locale, TVA, due diligence</li>
                            <li>Reprezentare în fața notarului și OCPI</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">📜 Contracte Comerciale</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>Vânzare, închiriere, leasing</li>
                            <li>Servicii, parteneriate, colaborări</li>
                            <li>Clauze: confidențialitate, forță majoră, penalități</li>
                            <li>Analiză completă și prevenirea riscurilor</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">🧮 Calculator Taxe Notariale</h2>
                        <p className="mb-4 text-gray-200">
                            Introdu valoarea imobilului și tipul actului pentru a estima taxele principale.
                        </p>
                        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6 mb-6">
                            <input
                                type="number"
                                value={propertyValue}
                                onChange={(e) => setPropertyValue(e.target.value)}
                                placeholder="Valoare imobil (RON)"
                                className="w-full mb-4 p-4 rounded-md text-black text-lg"
                            />
                            <select
                                value={actType}
                                onChange={(e) => setActType(e.target.value)}
                                className="w-full mb-4 p-4 rounded-md text-black text-lg"
                            >
                                <option value="">Alege tipul actului</option>
                                <option value="vanzare">Vânzare</option>
                                <option value="alte">Alte acte</option>
                            </select>
                            <button
                                onClick={calculateTaxes}
                                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-md transition"
                            >
                                Calculează
                            </button>
                        </div>

                        {notaryFee && (
                            <div className="bg-indigo-900 bg-opacity-30 p-6 rounded-xl text-lg space-y-2 text-gray-100">
                                <h4 className="text-xl text-indigo-300 font-semibold mb-2">Rezultate Estimate</h4>
                                <ul className="space-y-1">
                                    <li>🔹 Onorariu Notarial: <span className="font-bold">{notaryFee} RON</span></li>
                                </ul>
                                <p className="text-sm text-gray-400 mt-2">* Valorile sunt orientative, pot varia în funcție de documentație.</p>
                            </div>
                        )}
                    </section>

                    <section>
                        <h2 className="text-3xl font-semibold text-indigo-300 mb-4">🤝 De ce să ne alegi?</h2>
                        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
                            <li>✅ Experiență extinsă cu investitori din România</li>
                            <li>✅ Consultanță completă, de la idee la încheierea actelor</li>
                            <li>✅ Rapiditate, siguranță și transparență în fiecare pas</li>
                        </ul>
                        <p className="text-gray-300 mt-4">
                            Contactează-ne pentru o programare sau folosește formularul de pe site.
                        </p>
                    </section>

                    <p className="text-center text-gray-400 italic mt-12 text-lg">
                        Investițiile sigure încep cu consiliere juridică solidă.
                    </p>
                </div>
            </div>
        </div>
    );
}
