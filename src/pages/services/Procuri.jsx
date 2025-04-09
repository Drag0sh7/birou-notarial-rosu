import React from 'react';
import './Procuri.css';

export default function Procuri() {
    return (
        <div className="procuri-container">
            <h1 className="procuri-title">Procuri Notariale</h1>
            <p className="procuri-description">
                Procura notarială este un act juridic prin care o persoană (mandant) împuternicește o altă persoană (mandatar)
                să o reprezinte sau să acționeze în numele său într-un anumit scop. Aceasta trebuie întocmită în formă autentică
                la notar pentru a produce efecte juridice deplină.
            </p>

            <section className="procuri-section">
                <h2>Tipuri Comune de Procuri</h2>
                <ul>
                    <li><strong>Procura generală:</strong> Acordă mandat pentru multiple acțiuni, inclusiv administrative, financiare sau juridice.</li>
                    <li><strong>Procura specială:</strong> Se referă la un anumit act sau tranzacție (ex: vânzare auto, închiriere locuință).</li>
                    <li><strong>Procura auto:</strong> Pentru vânzarea, înmatricularea sau radierea unui autovehicul.</li>
                    <li><strong>Procura pentru ANAF:</strong> Reprezentare în fața autorităților fiscale pentru depunere declarații, cereri etc.</li>
                    <li><strong>Procura bancară:</strong> Deschidere cont, semnare contracte de credit, retrageri de numerar în numele titularului.</li>
                    <li><strong>Procuri pentru străinătate:</strong> Redactate în limbă română + traducere autorizată și apostilă dacă este necesar.</li>
                </ul>
                <p>
                    În funcție de scop, notarul poate solicita documente justificative (ex: act auto, CNP beneficiar, acte firmă).
                </p>
            </section>

            <section className="procuri-section">
                <h2>Ce Trebuie Să Pregătiți</h2>
                <ul>
                    <li>Actul de identitate valabil (mandant + mandatar)</li>
                    <li>Datele exacte ale persoanei împuternicite</li>
                    <li>Detaliile operațiunii pentru care se face procura</li>
                    <li>Dovada titlului de proprietate, dacă este necesar</li>
                </ul>
                <p>
                    Pentru procurile destinate străinătății sau instituțiilor oficiale, este recomandat să aduceți modele/formate
                    cerute de autorități.
                </p>
            </section>
            <section className="procuri-section">
                <h2>Costuri și Tarife Notariale</h2>
                <p>
                    Tarifele pentru întocmirea unei procuri sunt reglementate prin Ordinul Ministerului Justiției și variază în funcție de tipul și conținutul documentului.
                    Mai jos sunt câteva repere orientative:
                </p>
                <ul>
                    <li><strong>Procura simplă:</strong> între <strong>60 – 100 lei</strong></li>
                    <li><strong>Procura auto:</strong> între <strong>80 – 120 lei</strong></li>
                    <li><strong>Procura generală (completă):</strong> între <strong>150 – 300 lei</strong></li>
                    <li><strong>Procura pentru străinătate + traducere:</strong> între <strong>250 – 500 lei</strong></li>
                </ul>
                <p>
                    În cazuri speciale pot apărea costuri suplimentare (traduceri, apostilare, legalizare semnături).
                </p>
            </section>

            <section className="procuri-section calculator-wrap">
                <h2>Calculator Estimativ Procura</h2>
                <p>Selectați tipul procurii pentru a vedea un cost orientativ:</p>

                <div className="calculator-form">
                    <select onChange={(e) => {
                        const type = e.target.value;
                        let result = '-';
                        switch (type) {
                            case 'simpla':
                                result = '80 lei';
                                break;
                            case 'auto':
                                result = '100 lei';
                                break;
                            case 'generala':
                                result = '200 lei';
                                break;
                            case 'str':
                                result = '350 lei';
                                break;
                            default:
                                result = '-';
                        }
                        document.getElementById('procura-cost-output').innerText = result;
                    }}>
                        <option value="">Alege tipul procurii</option>
                        <option value="simpla">Procura simplă</option>
                        <option value="auto">Procura auto</option>
                        <option value="generala">Procura generală</option>
                        <option value="str">Procura pentru străinătate</option>
                    </select>
                    <p><strong>Estimare:</strong> <span id="procura-cost-output">-</span></p>
                </div>

                <p className="note">* Estimările sunt orientative. Costul final este stabilit în funcție de complexitate și pagini.</p>
            </section>

            <section className="procuri-section">
                <h2>Recomandări Juridice</h2>
                <ul>
                    <li>Verificați dacă procura necesită apostilă pentru utilizare internațională</li>
                    <li>Nu delegați mai multe acțiuni decât este necesar</li>
                    <li>Stabiliți un termen de valabilitate limitat (6–12 luni)</li>
                    <li>Adăugați clauze de revocare sau limitare dacă este posibil</li>
                </ul>
                <p>
                    Notarul nostru vă poate consilia pentru a evita riscurile juridice, oferind modele verificate și adaptate fiecărei situații.
                </p>
            </section>
        </div>
    );
}
