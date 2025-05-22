import React, { useState } from 'react';

export default function Declaratii() {
    const [cost, setCost] = useState('-');

    const calculeaza = (tip) => {
        switch (tip) {
            case 'simpla': return '80 lei';
            case 'complexa': return '150 lei';
            case 'straina': return '250 lei';
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
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-amber-300 mb-12">
                        Declarații Notariale
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Declarațiile notariale au valoare legală deplină și sunt recunoscute de toate instituțiile publice sau private.
                        Notarul garantează autenticitatea, forma corectă și claritatea conținutului juridic.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-amber-300 mb-4">🗂️ Tipuri Frecvente de Declarații</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Pe propria răspundere:</strong> venituri, domiciliu, situații legale</li>
                            <li><strong>De acord:</strong> mutare copil, vânzare bun comun, soți</li>
                            <li><strong>Transport minor:</strong> ieșire din țară cu unul dintre părinți</li>
                            <li><strong>De nesancționare:</strong> cerută de școli sau consulate</li>
                            <li><strong>Unic moștenitor:</strong> în lipsa certificatului de moștenitor</li>
                        </ul>
                        <p className="text-gray-300 mt-4">✳️ Toate declarațiile trebuie redactate clar. Notarul te ajută să alegi forma potrivită.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-amber-300 mb-4">📑 Acte Necesare</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Act de identitate al declarantului</li>
                            <li>Documente justificative (dacă sunt cerute)</li>
                            <li>Formular tip (dacă e solicitat de instituție)</li>
                            <li>Prezența martorilor (doar dacă e impus prin lege)</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Pentru utilizare internațională: e nevoie de traducere autorizată + legalizare.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-amber-300 mb-4">💰 Costuri și Onorarii</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Declarație simplă (1 pagină):</strong> 50 – 100 lei</li>
                            <li><strong>Declarație cu anexe / complexă:</strong> 100 – 200 lei</li>
                            <li><strong>Declarație în limba străină:</strong> 150 – 350 lei</li>
                            <li><strong>Legalizare traducere:</strong> 40 – 100 lei</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Prețul depinde de complexitate, număr pagini și cerințele speciale (apostilă, timbru etc.).</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-amber-300 mb-4">🧮 Calculator Estimativ Declarații</h2>
                        <div className="bg-gray-900 bg-opacity-60 rounded-xl p-6">
                            <select
                                className="w-full p-4 mb-4 text-black text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-amber-300"
                                onChange={(e) => setCost(calculeaza(e.target.value))}
                            >
                                <option value="">Alege tipul declarației</option>
                                <option value="simpla">Declarație simplă</option>
                                <option value="complexa">Declarație cu anexe</option>
                                <option value="straina">Declarație în limba străină</option>
                            </select>
                            <p className="text-lg text-white">
                                Estimare onorariu: <span className="text-amber-300 font-semibold">{cost}</span>
                            </p>
                            <p className="text-sm text-gray-400 mt-2">* Tariful final este stabilit în funcție de actul concret.</p>
                        </div>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-3xl font-semibold text-amber-300 mb-4">📌 Recomandări Utile</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Verifică cerințele exacte ale instituției</li>
                            <li>Nu folosi formulări generale sau ambigue</li>
                            <li>Dacă declarația e pentru străinătate, cere versiune bilingvă</li>
                            <li>Păstrează o copie legalizată pentru arhivă</li>
                        </ul>
                        <p className="text-gray-300 mt-4">Notarul nostru redactează clar și legal fiecare declarație — rapid și confidențial.</p>
                    </section>

                    <p className="text-center text-gray-300 italic mt-12 text-lg">
                        Declarațiile notariale îți dau voce oficială — clară, legală și recunoscută.
                    </p>
                </div>
            </div>
        </div>
    );
}
