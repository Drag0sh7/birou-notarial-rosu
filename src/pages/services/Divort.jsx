import React, { useState } from 'react';

export default function Divort() {
    const [cost, setCost] = useState('-');

    const calculeazaCost = (tip) => {
        switch (tip) {
            case 'fara': return '700 lei';
            case 'cu': return '1000 lei';
            case 'procură': return '250 lei';
            default: return '-';
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/062329ae-4fc8-4410-b6a4-4d61249b7eb3.png")' }}
        >
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
                <div className="bg-black bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 md:p-14 text-white shadow-2xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-pink-300 mb-12">
                        Divorț la Notar
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Divorțul notarial este o cale rapidă, eficientă și legală pentru soții care sunt de acord cu încetarea căsătoriei.
                        Oferim consultanță, redactare și finalizare discretă și profesionistă.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-pink-300 mb-4">📄 Tipuri de Divorț Notarial</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Fără copii minori:</strong> finalizare rapidă (~30 zile)</li>
                            <li><strong>Cu copii minori:</strong> necesită acord privind custodia, pensia, vizita</li>
                            <li><strong>Români în străinătate:</strong> cu prezență fizică sau procură specială</li>
                            <li><strong>Cu partaj voluntar:</strong> se poate include împărțirea bunurilor</li>
                        </ul>
                        <p className="text-gray-300 mt-4">✳️ Notarul poate refuza divorțul dacă lipsește acordul sau unul dintre soți este sub interdicție.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-pink-300 mb-4">🗂️ Acte Necesare</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Cerere de divorț semnată de ambii soți</li>
                            <li>Buletine/CI + certificatul de căsătorie</li>
                            <li>Certificatele de naștere ale copiilor minori (dacă există)</li>
                            <li>Declarații privind custodia și pensia alimentară</li>
                            <li>Procură specială notarială (dacă unul dintre soți nu se prezintă)</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-pink-300 mb-4">🧮 Calculator Estimativ Divorț</h2>
                        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6">
                            <select
                                className="w-full p-4 mb-4 text-black text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                                onChange={(e) => setCost(calculeazaCost(e.target.value))}
                            >
                                <option value="">Alege tipul de divorț</option>
                                <option value="fara">Fără copii minori</option>
                                <option value="cu">Cu copii minori</option>
                                <option value="procură">Prin procură specială</option>
                            </select>
                            <p className="text-lg text-white">
                                Estimare onorariu: <span className="text-pink-300 font-semibold">{cost}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">* Valori orientative. Prețul poate varia în funcție de situație.</p>
                        </div>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-3xl font-semibold text-pink-300 mb-4">📌 Recomandări Juridice</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Divorțul notarial este posibil doar cu <strong>acord complet</strong> între soți</li>
                            <li>Consultați un avocat dacă sunt conflicte legate de copii sau bunuri</li>
                            <li>Notarul nu poate decide asupra aspectelor contestate</li>
                            <li>Includeți în cerere toate detaliile despre custodie, domiciliu și pensie alimentară</li>
                        </ul>
                        <p className="text-gray-300 mt-4">La biroul nostru veți avea parte de confidențialitate, neutralitate și consiliere profesionistă.</p>
                    </section>

                    <p className="text-center text-gray-300 italic mt-12 text-lg">
                        Procedura notarială de divorț este simplă și eficientă, dacă există acord și colaborare.
                    </p>
                </div>
            </div>
        </div>
    );
}
