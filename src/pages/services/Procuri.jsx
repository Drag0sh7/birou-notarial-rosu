import React, { useState } from 'react';

export default function Procuri() {
    const [cost, setCost] = useState('-');

    const calculeaza = (tip) => {
        switch (tip) {
            case 'simpla': return '80 lei';
            case 'auto': return '100 lei';
            case 'generala': return '200 lei';
            case 'str': return '350 lei';
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
                    <h1 className="text-5xl md:text-6xl font-extrabold text-center text-cyan-300 mb-12">
                        Procuri Notariale
                    </h1>

                    <p className="text-xl leading-8 text-gray-100 mb-10">
                        Procura este documentul prin care împuterniciți pe cineva să acționeze în numele dumneavoastră.
                        Notarul vă oferă garanția legalității, adaptarea la cerințele instituțiilor și siguranța juridică deplină.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-cyan-300 mb-4">📂 Tipuri de Procuri</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Generală:</strong> acțiuni administrative, juridice sau bancare</li>
                            <li><strong>Specială:</strong> pentru un act anume (ex: vânzare auto)</li>
                            <li><strong>Auto:</strong> înmatriculare, vânzare sau radiere autovehicul</li>
                            <li><strong>ANAF:</strong> reprezentare fiscală și declarații</li>
                            <li><strong>Bancară:</strong> deschidere cont, credite, retrageri</li>
                            <li><strong>Internațională:</strong> tradusă, legalizată, apostilată (dacă e cazul)</li>
                        </ul>
                        <p className="text-gray-300 mt-4">🔎 Notarul poate solicita acte-suport: buletin, acte auto, date firmă, ș.a.</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-cyan-300 mb-4">📝 Ce Trebuie Să Pregătiți</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Carte de identitate valabilă (mandant și, dacă e prezent, mandatarul)</li>
                            <li>Datele exacte ale persoanei împuternicite</li>
                            <li>Scopul concret al procurii (acte, instituții, bunuri)</li>
                            <li>Dovezi: acte de proprietate, CNP beneficiar, format tip (dacă e cerut)</li>
                        </ul>
                        <p className="text-gray-300 mt-4">⚠️ Pentru procuri internaționale, aduceți modelul solicitat de autorități!</p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-semibold text-cyan-300 mb-4">💰 Costuri și Tarife</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li><strong>Procura generală sau specială:</strong> 100 – 300 lei</li>
                        </ul>
                        <p className="text-gray-300 mt-4">În funcție de traducere, apostilare sau legalizare, costul poate crește.</p>
                    </section>

                    <section className="mb-4">
                        <h2 className="text-3xl font-semibold text-cyan-300 mb-4">📌 Recomandări Practice</h2>
                        <ul className="list-disc list-inside space-y-3 text-lg text-gray-200">
                            <li>Limitați durata la 6–12 luni pentru siguranță</li>
                            <li>Evitați delegarea excesivă de drepturi</li>
                            <li>Adăugați clauze de revocare sau condiții clare</li>
                            <li>Verificați cerințele autorităților dacă procura e folosită internațional</li>
                        </ul>
                        <p className="text-gray-300 mt-4">💡 Notarul vă poate oferi un model adaptat exact pentru instituția sau scopul urmărit.</p>
                    </section>

                    <p className="text-center text-gray-300 italic mt-12 text-lg">
                        Cu o procură notarială corect redactată, obțineți siguranță, eficiență și respectarea voinței dumneavoastră.
                    </p>
                </div>
            </div>
        </div>
    );
}
