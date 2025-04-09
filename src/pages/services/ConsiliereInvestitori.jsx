import React, { useState } from 'react';
import './ConsiliereInvestitori.css';

export default function ConsiliereInvestitori() {
    const [propertyValue, setPropertyValue] = useState('');
    const [ownershipDuration, setOwnershipDuration] = useState('');
    const [notaryFee, setNotaryFee] = useState(null);
    const [stateTax, setStateTax] = useState(null);
    const [registrationFee, setRegistrationFee] = useState(null);

    const calculateTaxes = () => {
        const value = parseFloat(propertyValue);
        if (isNaN(value) || value <= 0 || !ownershipDuration) {
            alert('Vă rugăm să introduceți o valoare validă și să selectați durata deținerii.');
            return;
        }

        let notaryFee = 0;
        if (value <= 20000) {
            notaryFee = Math.max(0.022 * value, 230);
        } else if (value <= 35000) {
            notaryFee = 440 + 0.02 * (value - 20000);
        } else if (value <= 60000) {
            notaryFee = 740 + 0.015 * (value - 35000);
        } else if (value <= 80000) {
            notaryFee = 1115 + 0.01 * (value - 60000);
        } else if (value <= 100000) {
            notaryFee = 1315 + 0.009 * (value - 80000);
        } else if (value <= 200000) {
            notaryFee = 1495 + 0.008 * (value - 100000);
        } else if (value <= 300000) {
            notaryFee = 2295 + 0.007 * (value - 200000);
        } else if (value <= 600000) {
            notaryFee = 2995 + 0.006 * (value - 300000);
        } else if (value <= 1000000) {
            notaryFee = 4795 + 0.005 * (value - 600000);
        } else {
            notaryFee = 6795 + 0.004 * (value - 1000000);
        }

        const stateTaxRate = ownershipDuration === 'sub3' ? 0.03 : 0.01;
        const stateTax = stateTaxRate * value;
        const registrationFee = 0.0025 * value;

        setNotaryFee(notaryFee.toFixed(2));
        setStateTax(stateTax.toFixed(2));
        setRegistrationFee(registrationFee.toFixed(2));
    };

    return (
        <div className="consiliere-container">
            <h1 className="consiliere-title">Consiliere pentru Investitori</h1>
            <p className="consiliere-description">
                Oferim servicii complexe și personalizate pentru investitori interesați de România — atât persoane fizice, cât și juridice.
                Ne ocupăm de consiliere juridică, fiscală și administrativă pentru a garanta succesul investiției dumneavoastră.
            </p>

            <section className="consiliere-section">
                <h2>Servicii pentru Înființarea și Administrarea Firmelor</h2>
                <p>Vă oferim consultanță completă privind:</p>
                <ul>
                    <li>Înființarea firmelor de tip SRL, SRL-D, PFA, II, SA</li>
                    <li>Redactarea și autentificarea actelor constitutive</li>
                    <li>Înregistrarea la Registrul Comerțului și ANAF</li>
                    <li>Modificări de structură: asociați, capital, sediu, CAEN</li>
                    <li>Ghidare completă în procesul birocratic și fiscal</li>
                </ul>
                <p>
                    Vă ajutăm să economisiți timp și să evitați blocajele legale, oferind și servicii de reprezentare în fața autorităților.
                </p>
            </section>
            <section className="consiliere-section">
                <h2>Achiziționarea de Proprietăți Imobiliare</h2>
                <p>Investitorii care doresc să achiziționeze imobile beneficiază de consiliere completă din partea noastră:</p>
                <ul>
                    <li>Verificarea titlului de proprietate (extras de carte funciară actualizat)</li>
                    <li>Redactarea și autentificarea antecontractului și contractului final</li>
                    <li>Consultanță privind impozite, taxe locale și due diligence legal</li>
                    <li>Reprezentare în fața notarului public și a oficiului de cadastru</li>
                </ul>
                <p>
                    De asemenea, oferim informații clare despre grila notarială, cotele de TVA și taxele locale actualizate.
                </p>
            </section>

            <section className="consiliere-section">
                <h2>Elaborarea și Revizuirea Contractelor Comerciale</h2>
                <p>Colaborăm cu investitori pentru redactarea sau revizuirea următoarelor tipuri de contracte:</p>
                <ul>
                    <li>Contracte de vânzare-cumpărare, închiriere, leasing operațional</li>
                    <li>Contracte de prestări servicii, parteneriat sau de colaborare</li>
                    <li>Clauze privind răspunderea, confidențialitatea, forța majoră</li>
                    <li>Negocierea condițiilor contractuale și prevenirea riscurilor</li>
                </ul>
                <p>
                    Toate contractele sunt analizate pentru conformitate legală, echilibru între părți și minimizarea riscurilor.
                </p>
            </section>

            <section className="consiliere-section">
                <h2>Obținerea Autorizațiilor și Avizelor Necesare</h2>
                <p>
                    Vă consiliem pentru obținerea documentelor legale necesare desfășurării activității:
                </p>
                <ul>
                    <li>Autorizații de funcționare de la primărie și DSP</li>
                    <li>Avize ISU, protecția mediului, urbanism</li>
                    <li>Autorizații de construire și certificate de urbanism</li>
                    <li>Permise și notificări speciale în funcție de domeniu (alimentar, transport, IT etc.)</li>
                </ul>
                <p>
                    Echipa noastră se ocupă de pregătirea dosarelor și depunerea lor la autoritățile competente.
                </p>
            </section>
            <section className="consiliere-section calculator-wrap">
                <h2>Calculator Interactiv pentru Estimarea Taxelor Notariale</h2>
                <p>
                    Estimează onorariul notarial, impozitul și taxa de intabulare în funcție de valoarea imobilului
                    și durata deținerii proprietății.
                </p>

                <div className="calculator-form">
                    <input
                        type="number"
                        value={propertyValue}
                        placeholder="Valoare imobil (RON)"
                        onChange={(e) => setPropertyValue(e.target.value)}
                    />
                    <select value={ownershipDuration} onChange={(e) => setOwnershipDuration(e.target.value)}>
                        <option value="">Alege durata deținerii</option>
                        <option value="sub3">Sub 3 ani</option>
                        <option value="peste3">Peste 3 ani</option>
                    </select>
                    <button onClick={calculateTaxes}>Calculează</button>
                </div>

                {notaryFee && (
                    <div className="results-box">
                        <h4>Rezultate Estimate</h4>
                        <ul>
                            <li><strong>Onorariu Notarial:</strong> {notaryFee} RON</li>
                            <li><strong>Impozit către Stat:</strong> {stateTax} RON</li>
                            <li><strong>Taxă Intabulare:</strong> {registrationFee} RON</li>
                        </ul>
                        <p className="note">* Valorile sunt estimative și pot varia în funcție de specificul tranzacției.</p>
                    </div>
                )}
            </section>

            <section className="consiliere-section">
                <h2>De ce să ne alegeți?</h2>
                <ul>
                    <li>✅ Experiență vastă cu investitori internaționali și locali</li>
                    <li>✅ Consultanță juridică și fiscală personalizată</li>
                    <li>✅ Comunicare clară și eficientă, în limba română sau engleză</li>
                    <li>✅ Suport complet în fiecare etapă a investiției</li>
                </ul>
                <p>
                    Pentru consultanță dedicată, vă rugăm să ne contactați telefonic sau prin formularul de pe site.
                    Răspundem prompt tuturor solicitărilor și programăm întâlniri rapide.
                </p>
            </section>
        </div>
    );
}


