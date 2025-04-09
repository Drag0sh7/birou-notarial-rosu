import React from 'react';
import './Divort.css';

export default function Divort() {
    return (
        <div className="divort-container">
            <h1 className="divort-title">Divorț la Notar</h1>
            <p className="divort-description">
                Divorțul prin procedură notarială este o soluție rapidă, eficientă și discretă pentru soții care sunt de acord cu încetarea căsătoriei.
                Biroul nostru notarial vă oferă consultanță, redactarea actelor și finalizarea divorțului într-un cadru legal și profesionist.
            </p>

            <section className="divort-section">
                <h2>Tipuri de Divorț la Notar</h2>
                <ul>
                    <li><strong>Divorț cu acordul soților fără copii minori:</strong> Cel mai simplu tip, se poate finaliza în aproximativ 30 de zile.</li>
                    <li><strong>Divorț cu copii minori:</strong> Necesită acordul părinților privind custodia, pensia alimentară și programul de vizită.</li>
                    <li><strong>Divorț al cetățenilor români cu domiciliul în străinătate:</strong> Se poate efectua dacă unul dintre soți se prezintă personal sau prin procură specială.</li>
                    <li><strong>Divorț cu partaj voluntar:</strong> Se poate include împărțirea bunurilor comune dacă soții doresc acest lucru.</li>
                </ul>
                <p>
                    Notarul nu poate pronunța divorțul dacă nu există acord deplin între părți, dacă unul dintre soți este sub interdicție
                    sau dacă nu se prezintă personal sau prin procură specială.
                </p>
            </section>

            <section className="divort-section">
                <h2>Acte Necesare</h2>
                <ul>
                    <li>Cerere comună de divorț semnată de ambii soți</li>
                    <li>Actele de identitate ale ambilor soți (copii + original)</li>
                    <li>Certificatul de căsătorie (original)</li>
                    <li>Certificatele de naștere ale copiilor minori (dacă există)</li>
                    <li>Declarații privind încredințarea copiilor și pensia alimentară</li>
                </ul>
                <p>
                    În cazul în care unul dintre soți nu se poate prezenta, este necesară o <strong>procură specială autentică</strong> cu putere de reprezentare pentru divorț.
                </p>
            </section>
            <section className="divort-section calculator-wrap">
                <h2>Calculator Estimativ pentru Divorț</h2>
                <p>Selectați tipul divorțului pentru o estimare orientativă a onorariului:</p>

                <div className="calculator-form">
                    <select onChange={(e) => {
                        let cost = '-';
                        switch (e.target.value) {
                            case 'fara':
                                cost = '700 lei';
                                break;
                            case 'cu':
                                cost = '1000 lei';
                                break;
                            case 'procură':
                                cost = '250 lei';
                                break;
                            default:
                                cost = '-';
                        }
                        document.getElementById('divort-output').innerText = cost;
                    }}>
                        <option value="">Alege tipul de divorț</option>
                        <option value="fara">Divorț fără copii minori</option>
                        <option value="cu">Divorț cu copii minori</option>
                        <option value="procură">Divorț prin procură specială</option>
                    </select>
                    <p><strong>Estimare:</strong> <span id="divort-output">-</span></p>
                </div>

                <p className="note">* Estimările sunt orientative. Prețul final este stabilit în funcție de detaliile cazului.</p>
            </section>

            <section className="divort-section">
                <h2>Recomandări Juridice</h2>
                <ul>
                    <li>Apelați la divorț notarial doar dacă există <strong>acord deplin</strong> între soți</li>
                    <li>Consultați un avocat în caz de neînțelegeri privind bunurile sau copiii</li>
                    <li>Nu uitați că <strong>divorțul notarial produce aceleași efecte</strong> legale ca și cel prin instanță</li>
                    <li>Includeți detalii clare în cerere: custodie, domiciliu copii, pensie alimentară</li>
                </ul>
                <p>
                    La biroul nostru notarial, veți beneficia de <strong>confidențialitate, profesionalism și rapiditate</strong> în finalizarea procedurii.
                </p>
            </section>
        </div>
    );
}
