import React from 'react';
import './Declaratii.css';

export default function Declaratii() {
    return (
        <div className="declaratii-container">
            <h1 className="declaratii-title">Declarații Notariale</h1>
            <p className="declaratii-description">
                Declarațiile notariale sunt acte prin care o persoană își exprimă în mod solemn o anumită situație, intenție sau voință juridică.
                Acestea sunt recunoscute oficial și pot fi utilizate în relația cu instituții publice sau alte persoane fizice/juridice.
                Biroul nostru vă oferă servicii complete de redactare, consiliere și autentificare.
            </p>

            <section className="declaratii-section">
                <h2>Tipuri Frecvente de Declarații Notariale</h2>
                <ul>
                    <li><strong>Declarație pe propria răspundere:</strong> Cu privire la domiciliu, venituri, situații familiale sau juridice.</li>
                    <li><strong>Declarație de acord:</strong> Utilizată frecvent în cazuri de mutare cu copilul, vânzare bun comun, împuterniciri între soți.</li>
                    <li><strong>Declarație de transport minor:</strong> Necesară la ieșirea din țară cu copilul minor, în lipsa unuia dintre părinți.</li>
                    <li><strong>Declarație de nesancționare:</strong> Cerută de unele instituții (școli, firme, consulate) privind cazierul.</li>
                    <li><strong>Declarație privind calitatea de unic moștenitor:</strong> În lipsa certificatului de moștenitor sau în cazuri speciale.</li>
                </ul>
                <p>
                    Orice declarație trebuie formulată clar și adaptată cerinței legale. Notarul vă poate ajuta să alegeți forma potrivită.
                </p>
            </section>

            <section className="declaratii-section">
                <h2>Ce Acte Sunt Necesare?</h2>
                <ul>
                    <li>Actul de identitate al declarantului</li>
                    <li>Documente justificative (după caz)</li>
                    <li>Formular tip sau cerințe specifice instituției (dacă sunt furnizate)</li>
                    <li>Eventual prezența martorilor, dacă este impus prin lege</li>
                </ul>
                <p>
                    Pentru declarațiile în limba străină, este necesară traducerea autorizată și legalizarea traducerii.
                </p>
            </section>
            <section className="declaratii-section">
                <h2>Costuri și Onorarii Notariale</h2>
                <p>
                    Prețul unei declarații notariale depinde de natura declarației, numărul de pagini, traduceri (dacă este cazul) și cerințele speciale
                    ale instituției unde va fi folosită. Conform grilei notariale:
                </p>
                <ul>
                    <li><strong>Declarație simplă (o pagină):</strong> între <strong>50 – 100 lei</strong></li>
                    <li><strong>Declarație cu anexe sau redactare complexă:</strong> între <strong>100 – 200 lei</strong></li>
                    <li><strong>Declarație în limba străină:</strong> + traducere autorizată: între <strong>150 – 350 lei</strong></li>
                    <li><strong>Legalizarea traducerii:</strong> între <strong>40 – 100 lei</strong></li>
                </ul>
                <p>
                    Notarul stabilește costul final în funcție de dificultatea redactării și cerințele suplimentare (apostilă, timbre, etc.).
                </p>
            </section>

            <section className="declaratii-section calculator-wrap">
                <h2>Calculator Estimativ pentru Declarații</h2>
                <p>Selectați tipul declarației pentru o estimare rapidă:</p>

                <div className="calculator-form">
                    <select onChange={(e) => {
                        let output = '-';
                        switch (e.target.value) {
                            case 'simpla':
                                output = '80 lei';
                                break;
                            case 'complexa':
                                output = '150 lei';
                                break;
                            case 'straina':
                                output = '250 lei';
                                break;
                            default:
                                output = '-';
                        }
                        document.getElementById('declaratie-output').innerText = output;
                    }}>
                        <option value="">Alege tipul declarației</option>
                        <option value="simpla">Declarație simplă</option>
                        <option value="complexa">Declarație cu anexe</option>
                        <option value="straina">Declarație în limba străină</option>
                    </select>
                    <p><strong>Estimare:</strong> <span id="declaratie-output">-</span></p>
                </div>

                <p className="note">* Estimările sunt informative. Tarifele finale depind de complexitate și cerințele oficiale.</p>
            </section>

            <section className="declaratii-section">
                <h2>Recomandări Juridice</h2>
                <ul>
                    <li>Asigurați-vă că aveți toate documentele cerute de instituția unde veți depune declarația</li>
                    <li>Evitați formulările ambigue sau generale — notarul vă poate ajuta să le corectați</li>
                    <li>Solicitați versiune bilingvă dacă declarația va fi folosită în afara țării</li>
                    <li>Păstrați o copie legalizată pentru arhiva personală</li>
                </ul>
                <p>
                    Ne ocupăm de redactarea, verificarea și autentificarea declarației în condiții de siguranță și confidențialitate.
                </p>
            </section>
        </div>
    );
}
