import React, { useState } from 'react';

export default function Succesiuni() {
    const [valoare, setValoare] = useState('');

    const calcul = (v) => {
        const x = parseFloat(v);
        if (!x || x <= 0) return '-';
        let rez = 0;

        if (x <= 20000) {
            rez = Math.max(0.027 * x, 240);
        } else if (x <= 35000) {
            rez = 540 + 0.019 * (x - 20001);
        } else if (x <= 65000) {
            rez = 725 + 0.016 * (x - 35001);
        } else {
            rez = 1205 + 0.0085 * (x - 65001);
        }

        return `${rez.toFixed(2)} RON`;
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(\"/images/062329ae-4fc8-4410-b6a4-4d61249b7eb3.png\")' }}
        >
            <div className="max-w-5xl mx-auto px-6 py-24 md:py-36">
                <div className="bg-black bg-opacity-75 backdrop-blur-lg rounded-3xl p-8 md:p-14 text-white shadow-2xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-yellow-300 mb-12">
                        Procedura de Succesiune
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Succesiunea notarială este cea mai rapidă și eficientă cale de transmitere a patrimoniului unei persoane decedate către moștenitori. Se evită litigiile și cheltuielile judiciare, iar actele dobândite au valoare executorie.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">📜 Etapele Succesiunii Legale</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Depunerea cererii de succesiune de către un moștenitor</li>
                            <li>Certificat de deces + ultimul domiciliu al defunctului</li>
                            <li>Stabilirea masei succesorale (bunuri, conturi, imobile)</li>
                            <li>Acte de identitate și legătura de rudenie (certificat naștere/căsătorie)</li>
                            <li>Declarații de acceptare / renunțare la moștenire</li>
                            <li>Eliberarea certificatului de moștenitor legal sau testamentar</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Termen estimat: între 5–60 zile lucrătoare dacă documentele sunt complete.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">🏛️ Tipuri de Moștenire</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Legală:</strong> aplicată în lipsa unui testament, conform ordinii moștenitorilor prevăzută de lege</li>
                            <li><strong>Testamentară:</strong> în baza unui testament valid (olograf sau autentic)</li>
                            <li><strong>Mixtă:</strong> o parte transmisă prin lege, alta prin testament</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Notarul va verifica autenticitatea testamentului și va cere martori dacă este o formă olografă.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">💰 Taxe și Onorarii Notariale</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Deschidere succesiune:</strong> de la 120 lei</li>
                            <li><strong>Onorariu masă succesorală:</strong> conform grilei oficiale graduale (2.7% până la 20.000 RON, apoi tranșe)</li>
                            <li>Alte taxe: evaluare imobile, declarații suplimentare, partaj ulterior (dacă este cazul)</li>
                            <li>Dacă succesiunea se dezbate după mai mult de 2 ani de la data decesului, se percepe un impozit de 1% din valoarea bunurilor
                                imobile din masa succesorală.</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Tarifele sunt reglementate prin Normele MJ 2024 și pot varia ușor în funcție de caz.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">🧮 Calculator Estimativ Succesiune</h2>
                        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6">
                            <input
                                type="number"
                                className="w-full p-4 rounded-md text-black text-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                                placeholder="Valoare masă succesorală (RON)"
                                value={valoare}
                                onChange={(e) => setValoare(e.target.value)}
                            />
                            <p className="text-lg text-white">
                                Estimare onorariu total: <span className="text-yellow-300 font-semibold">{calcul(valoare)}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">* Estimare orientativă. Prețul poate varia în funcție de complexitate, bunuri și numărul de moștenitori.</p>
                        </div>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-3xl font-semibold text-yellow-300 mb-4">📌 Recomandări Utile</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Succesiunea se recomandă a fi deschisă în primele 6 luni de la deces</li>
                            <li>Prezentați testamentul în original (dacă există)</li>
                            <li>Se poate accepta moștenirea expres sau tacit (prin acte de dispoziție)</li>
                            <li>Dacă lipsesc acte, notarul poate accepta declarații notariale sau martori</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Biroul nostru vă asistă complet, indiferent de complexitatea moștenirii.</p>
                    </section>

                    <p className="text-center text-gray-300 italic mt-12 text-lg">
                        Succesiunile pot părea complicate. Cu sprijinul unui notar, procedura devine clară, legală și echitabilă.
                    </p>
                </div>
            </div>
        </div>
    );
}
