import React from 'react';
import './Succesiuni.css';

export default function Succesiuni() {
    return (
        <div className="succesiuni-container">
            <h1 className="succesiuni-title">Procedura de Succesiune Notarială</h1>
            <p className="succesiuni-description">
                Succesiunea reprezintă transmiterea patrimoniului unei persoane decedate către moștenitorii săi.
                Procedura notarială de succesiune este o cale legală, rapidă și mai puțin costisitoare decât procesul în instanță.
                La biroul nostru, oferim consultanță completă și autentificarea actelor de moștenire.
            </p>

            <section className="succesiuni-section">
                <h2>Etapele Succesiunii Legale la Notar</h2>
                <ul>
                    <li>Depunerea cererii de deschidere a succesiunii de către unul dintre moștenitori</li>
                    <li>Verificarea existenței certificatului de deces și stabilirea ultimului domiciliu</li>
                    <li>Stabilirea masei succesorale (bunuri mobile, imobile, active financiare)</li>
                    <li>Prezentarea certificatului de naștere/căsătorie al moștenitorilor</li>
                    <li>Declarațiile de acceptare sau renunțare la moștenire</li>
                    <li>Eliberarea certificatului de moștenitor legal sau testamentar</li>
                </ul>
                <p>
                    Procedura poate fi realizată într-un termen mediu de 3-7 zile lucrătoare, în funcție de documentele prezentate.
                </p>
            </section>

            <section className="succesiuni-section">
                <h2>Tipuri de Moștenire</h2>
                <ul>
                    <li><strong>Moștenirea legală:</strong> Se aplică în lipsa unui testament și urmează ordinea legală a claselor de moștenitori.</li>
                    <li><strong>Moștenirea testamentară:</strong> Realizată în baza unui testament valid redactat/autentificat anterior de către defunct.</li>
                    <li><strong>Moștenirea mixtă:</strong> Parte din bunuri sunt transmise legal, iar altele testamentar.</li>
                </ul>
                <p>
                    Notarul verifică autenticitatea testamentului și poate cere martori sau alte probe suplimentare, dacă este cazul.
                </p>
            </section>
            <section className="succesiuni-section">
                <h2>Taxe Notariale în Procedura de Succesiune</h2>
                <p>
                    Costurile procedurii succesorale variază în funcție de valoarea masei succesorale și de tipul moștenirii. Notarul va aplica tarifele reglementate prin Ordinul Ministrului Justiției și poate percepe:
                </p>
                <ul>
                    <li>Taxa pentru deschiderea succesiunii: începând de la 100–150 lei</li>
                    <li>Onorariu pentru stabilirea masei succesorale: 0.3%–1% din valoarea totală</li>
                    <li>Taxă pentru eliberarea certificatului de moștenitor: între 100–400 lei</li>
                </ul>
                <p>
                    Alte taxe pot apărea în cazul existenței unui testament, partaj succesoral sau bunuri imobile.
                </p>
            </section>

            <section className="succesiuni-section calculator-wrap">
                <h2>Calculator Estimativ pentru Succesiune</h2>
                <p>Introduceți valoarea totală estimativă a masei succesorale pentru a vedea costurile aproximative:</p>

                <div className="calculator-form">
                    <input
                        type="number"
                        placeholder="Valoare totală succesiune (RON)"
                        onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            const honorar = val ? (0.005 * val + 200) : 0;
                            document.getElementById('succesiune-output').innerText =
                                val > 0 ? `${honorar.toFixed(2)} RON` : '-';
                        }}
                    />
                    <p><strong>Estimare onorariu:</strong> <span id="succesiune-output">-</span></p>
                </div>
                <p className="note">* Estimarea este informativă și poate varia în funcție de complexitate și numărul moștenitorilor.</p>
            </section>

            <section className="succesiuni-section">
                <h2>Recomandări și Situații Speciale</h2>
                <ul>
                    <li>Succesiunea se poate deschide în termen de <strong>6 luni</strong> de la deces (nu este o obligație legală imediată, dar e recomandat)</li>
                    <li>Dacă există testament, acesta trebuie prezentat în original</li>
                    <li>Moștenirea se poate accepta tacit sau expres — consultarea unui notar este esențială</li>
                    <li>Există situații în care succesiunea poate fi deschisă chiar dacă lipsesc anumite acte (cu martori sau declarații notariale)</li>
                </ul>
                <p>
                    Echipa noastră vă ghidează complet în toate etapele și vă ajută să evitați eventuale conflicte între moștenitori.
                </p>
            </section>
        </div>
    );
}
