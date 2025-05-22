import React, { useState } from 'react';

export default function Testamente() {
    const [valoare, setValoare] = useState('');
    const calcul = (v) => {
        const x = parseFloat(v);
        if (!x || x <= 0) return '-';
        return `${(0.005 * x + 150).toFixed(2)} RON`;
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/062329ae-4fc8-4410-b6a4-4d61249b7eb3.png")' }}
        >
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
                <div className="bg-black bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 md:p-14 text-white shadow-2xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-purple-300 mb-12">
                        Testamente și Dispoziții de Ultimă Voință
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Testamentul este un act juridic unilateral prin care o persoană stabilește cum vor fi împărțite bunurile sale
                        după deces. Forma autentică oferă protecție juridică maximă. Notarul oferă consultanță, redactare și
                        autentificare în condiții legale.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-purple-300 mb-4">📄 Tipuri de Testamente</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Olograf:</strong> scris, semnat și datat de mână de testator</li>
                            <li><strong>Autentic:</strong> redactat și autentificat la notar — cel mai sigur</li>
                            <li><strong>Secret:</strong> sigilat și înregistrat la notar fără a-i dezvălui conținutul</li>
                            <li><strong>Privilegiate:</strong> doar în situații excepționale (război, epidemie etc.)</li>
                        </ul>
                        <p className="text-gray-300 mt-4">✳️ Recomandare: forma autentică oferă forță juridică maximă și protejează voința testatorului.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-purple-300 mb-4">✔️ Condiții de Valabilitate</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Capacitate deplină de exercițiu (vârstă + discernământ)</li>
                            <li>Voința exprimată liber, fără constrângere</li>
                            <li>Respectarea formei cerute de lege</li>
                            <li>Respectarea rezervelor succesorale (moștenitori direcți nu pot fi dezmoșteniți complet)</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Notarul are obligația de a verifica atât capacitatea, cât și legalitatea dispozițiilor.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-purple-300 mb-4">💰 Costuri și Onorarii</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Testament simplu:</strong> 150–300 lei</li>
                            <li><strong>Testament patrimonial:</strong> 0.4% – 0.8% din valoarea estimată</li>
                            <li><strong>Consultanță separată:</strong> 50–100 lei</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Notarul poate solicita o evaluare psihologică dacă există suspiciuni privind discernământul testatorului.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-purple-300 mb-4">🧮 Calculator Estimativ Testament</h2>
                        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6">
                            <input
                                type="number"
                                className="w-full p-4 rounded-md text-black text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                placeholder="Valoare bunuri menționate (RON)"
                                value={valoare}
                                onChange={(e) => setValoare(e.target.value)}
                            />
                            <p className="text-lg text-white">
                                Onorariu estimat: <span className="text-purple-300 font-semibold">{calcul(valoare)}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">* Estimare informativă. Prețul final depinde de structură și conținut.</p>
                        </div>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-3xl font-semibold text-purple-300 mb-4">📌 Recomandări Notariale</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Actualizați testamentul dacă apar modificări în familie sau patrimoniu</li>
                            <li>Evitați expresii vagi („toate bunurile mele”) — fiți specific</li>
                            <li>Păstrați o copie înregistrată la notar și una într-un loc sigur</li>
                            <li>Consultați notarul înainte de redactare pentru a evita nulități</li>
                        </ul>
                        <p className="text-gray-300 mt-4">La Biroul Notarial Roșu Elisabeta, vă sprijinim cu respect și discreție în luarea acestor decizii importante.</p>
                    </section>

                    <p className="text-center text-gray-300 italic mt-12 text-lg">
                        Un testament clar redactat în fața notarului este cea mai bună garanție că dorințele tale vor fi respectate.
                    </p>
                </div>
            </div>
        </div>
    );
}
