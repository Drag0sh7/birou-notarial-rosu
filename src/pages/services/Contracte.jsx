import React, { useState } from 'react';

export default function Contracte() {
    const [valoare, setValoare] = useState('');
    const calcul = (v) => {
        const x = parseFloat(v);
        if (!x || x <= 0) return '-';
        if (x <= 15000) return `${Math.max(0.022 * x, 250).toFixed(2)} RON`;
        if (x <= 60000) return `${(330 + 0.015 * (x - 15000)).toFixed(2)} RON`;
        return `${(1005 + 0.01 * (x - 60000)).toFixed(2)} RON`;
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
                            <li><strong>Vânzare-cumpărare:</strong> necesar pentru vânzarea imobilelor.</li>
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
                            <li><strong>Vânzare-cumpărare:</strong> 0.44% – 1% din valoarea bunului</li>
                            <li><strong>Donație:</strong> impozit 3% dacă nu sunt rude apropiate</li>
                            <li><strong>Ipotecă:</strong> în funcție de valoarea creditului</li>
                            <li>Taxe suplimentare: intabulare (0.15–0.5%), TVA, impozit (1–3%)</li>
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
                            <p className="text-sm text-gray-400 mt-2">* Valoare orientativă. Prețul final variază în funcție de act.</p>
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
