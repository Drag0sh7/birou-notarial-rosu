import React from 'react';
import './Contracte.css';

export default function Contracte() {
    return (
        <div className="contracte-container">
            <h1 className="contracte-title">Contracte Notariale</h1>
            <p className="contracte-description">
                Contractele notariale reprezintă documente legale esențiale pentru garantarea siguranței juridice între părți.
                În cadrul biroului nostru notarial, oferim redactarea, consilierea și autentificarea diverselor tipuri de contracte
                cu aplicabilitate în domenii variate.
            </p>

            <section className="contracte-section">
                <h2>Tipuri Comune de Contracte Notariale</h2>
                <ul>
                    <li><strong>Contract de vânzare-cumpărare:</strong> Utilizat la transferul dreptului de proprietate asupra unui bun imobil sau mobil.</li>
                    <li><strong>Contract de donație:</strong> Transferă gratuit proprietatea unui bun între persoane, cu efect imediat sau viitor.</li>
                    <li><strong>Contract de întreținere:</strong> Acord prin care una dintre părți se obligă să întrețină cealaltă în schimbul unui bun.</li>
                    <li><strong>Contract de închiriere (sub forma de act notarial):</strong> Autentificat pentru a conferi titlu executoriu (folosit la evacuări).</li>
                    <li><strong>Contract de comodat:</strong> Împrumut de folosință între persoane fizice sau juridice.</li>
                    <li><strong>Contract de partaj:</strong> Reglementează împărțirea bunurilor comune între coproprietari sau foști soți.</li>
                </ul>
                <p>
                    Toate aceste contracte pot fi redactate, consiliate și autentificate în cadrul biroului nostru, oferind siguranță legală deplină.
                </p>
            </section>

            <section className="contracte-section">
                <h2>Ce Conține un Contract Valabil?</h2>
                <ul>
                    <li>Identificarea completă a părților (cu CNP, adrese, acte de identitate)</li>
                    <li>Obiectul contractului (bun, serviciu, sumă de bani etc.)</li>
                    <li>Consimțământul liber exprimat al părților</li>
                    <li>Clauze specifice: termene, obligații, penalități, încetare</li>
                    <li>Semnături în fața notarului și data certă a autentificării</li>
                </ul>
                <p>
                    În unele cazuri, este necesară și documentația adițională: extras CF, acte de proveniență, acte doveditoare ale capacității de exercițiu etc.
                </p>
            </section>
            <section className="contracte-section">
                <h2>Costuri și Onorarii Notariale</h2>
                <p>
                    Costurile asociate autentificării unui contract notarial sunt stabilite prin Ordinul Ministerului Justiției
                    și depind de tipul contractului, valoarea acestuia și complexitatea actului.
                </p>
                <ul>
                    <li><strong>Contracte de vânzare:</strong> onorariile pornesc de la 0,44% din valoarea bunului, crescând progresiv</li>
                    <li><strong>Contracte de donație:</strong> în general mai mici, dar cu impozit de 3% dacă nu sunt rude de gradul I</li>
                    <li><strong>Contracte de întreținere:</strong> pot presupune evaluări notariale și clauze suplimentare</li>
                </ul>
                <p>
                    În plus față de onorariul notarial se pot adăuga:
                </p>
                <ul>
                    <li>Impozitul pe transfer (0%–3%) în funcție de tipul contractului</li>
                    <li>Taxa de intabulare (0,15%–0,5% din valoare, pentru bunuri imobiliare)</li>
                    <li>TVA, dacă se aplică (pentru persoane juridice plătitoare de TVA)</li>
                </ul>
            </section>

            <section className="contracte-section calculator-wrap">
                <h2>Calculator Estimativ Onorariu Notarial</h2>
                <p>
                    Introduceți valoarea estimativă a contractului pentru a calcula onorariul minim recomandat de grila notarială:
                </p>
                <div className="calculator-form">
                    <input
                        type="number"
                        placeholder="Valoare contract (RON)"
                        onChange={(e) => {
                            const value = parseFloat(e.target.value);
                            const base = value || 0;
                            const fee = base <= 15000
                                ? Math.max(0.022 * base, 250)
                                : base <= 60000
                                    ? 330 + 0.015 * (base - 15000)
                                    : 1005 + 0.01 * (base - 60000);
                            document.getElementById('contract-output').innerText =
                                base > 0 ? `${fee.toFixed(2)} RON` : '-';
                        }}
                    />
                    <p><strong>Estimare:</strong> <span id="contract-output">-</span></p>
                </div>
                <p className="note">* Acest calculator oferă o valoare estimativă. Prețul final se stabilește în funcție de complexitatea actului.</p>
            </section>

            <section className="contracte-section">
                <h2>Recomandări Practice</h2>
                <ul>
                    <li>Solicitați întotdeauna consultanță notarială înainte de semnarea unui contract important</li>
                    <li>Verificați identitatea și capacitatea juridică a părților implicate</li>
                    <li>Evitați contractele verbale sau neautentificate pentru sume mari</li>
                    <li>Păstrați copii ale contractelor semnate și autentificate</li>
                </ul>
                <p>
                    Echipa noastră vă oferă îndrumare completă, redactarea în limbaj juridic clar și siguranța legală deplină.
                </p>
            </section>
        </div>
    );
}

