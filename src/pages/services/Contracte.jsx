import React, { useState } from 'react';

export default function Contracte() {
    const [valoare, setValoare] = useState('');

    const calcul = (v) => {
        const x = parseFloat(v);
        if (!x || x <= 0) return '-';
        let rez;
        if (x <= 20000) {
            rez = Math.max(0.022 * x, 230);
        } else if (x <= 35000) {
            rez = 440 + 0.019 * (x - 20001);
        } else if (x <= 65000) {
            rez = 725 + 0.016 * (x - 35001);
        } else if (x <= 100000) {
            rez = 1205 + 0.015 * (x - 65001);
        } else if (x <= 200000) {
            rez = 1705 + 0.011 * (x - 100001);
        } else if (x <= 600000) {
            rez = 2805 + 0.009 * (x - 200001);
        } else {
            rez = 6405 + 0.006 * (x - 600001);
        }
        return `${rez.toFixed(2)} RON`;
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/062329ae-4fc8-4410-b6a4-4d61249b7eb3.png")' }}
        >
            <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
                <div className="bg-black bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 md:p-14 text-white shadow-2xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-emerald-400 mb-12">
                        Contracte Notariale
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Contractele autentificate notarial asigură <strong>legalitate, protecție și putere executorie</strong>.
                        Sunt obligatorii pentru tranzacții imobiliare și recomandate pentru orice acord important.
                        Notarul verifică identitatea, consimțământul și validitatea juridică a actului.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-emerald-300 mb-4">🔹 Tipuri de Contracte</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Vânzare:</strong> necesar pentru vânzarea imobilelor.</li>
                            <li><strong>Donație:</strong> transfer gratuit – cu protecție moștenitori rezervatari.</li>
                            <li><strong>Întreținere:</strong> întreținere în schimbul unui bun prezent.</li>
                            <li><strong>Comodat:</strong> împrumut gratuit de folosință.</li>
                            <li><strong>Ipotecă:</strong> garantarea unui credit cu bun imobil.</li>
                            <li><strong>Partaj:</strong> împărțirea bunurilor între coproprietari sau foști soți.</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-emerald-300 mb-4">📑 Documente Necesare</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Carte de identitate (valabilă)</li>
                            <li>Acte de proprietate: CF, contracte, cadastru</li>
                            <li>Certificat fiscal și certificat energetic</li>
                            <li>Extras CF pentru autentificare (emis de notar)</li>
                            <li>Dacă e cazul: convenție matrimonială, procură, certificat căsătorie</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-emerald-300 mb-4">💰 Costuri și Taxe 2025</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Vânzare:</strong> între 0.6% și 2.2% în funcție de valoare; impozit de 1% dacă bunul a fost dobândit cu mai mult de 3 ani în urmă sau 3% dacă a fost dobândit cu mai puțin de 3 ani în urmă</li>
                            <li><strong>Donație:</strong> impozit de 1% dacă bunul a fost dobândit cu mai mult de 3 ani în urmă sau 3% dacă a fost dobândit cu mai puțin de 3 ani în urmă (dacă nu sunt rude de până la gradul al II-lea inclusiv, caz în care donația nu se impozitează).</li>
                            <li><strong>Ipotecă:</strong> în funcție de valoarea creditului</li>
                            <li>Taxe suplimentare: intabulare (0.15–0.5%), TVA</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-emerald-300 mb-4">🧮 Calculator Estimativ</h2>
                        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6">
                            <input
                                type="number"
                                className="w-full p-4 rounded-md text-black text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                placeholder="Valoare contract (RON)"
                                value={valoare}
                                onChange={(e) => setValoare(e.target.value)}
                            />
                            <p className="text-lg text-white">
                                Onorariu estimat: <span className="text-emerald-300 font-semibold">{calcul(valoare)}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">
                                * Valoare orientativă conform Ordin 177/C/2024. Prețul final se stabilește de notar în funcție de act.
                            </p>
                        </div>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-3xl font-semibold text-emerald-300 mb-4">📌 Recomandări Notariale</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Contactați notarul cu câteva zile înainte pentru rezervare</li>
                            <li>Verificați actele și valabilitatea extraselor CF</li>
                            <li>Evitați contractele fără autentificare notarială</li>
                            <li>Solicitați o estimare completă înainte de programare</li>
                        </ul>
                    </section>

                    <p className="text-center text-gray-300 italic mt-12 text-lg">
                        Biroul Notarial Roșu Elisabeta vă oferă siguranță juridică și profesionalism la fiecare pas.
                    </p>
                </div>
            </div>
        </div>
    );
}
