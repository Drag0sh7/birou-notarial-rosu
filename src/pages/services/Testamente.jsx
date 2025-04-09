import React from 'react';
import './Testamente.css';

export default function Testamente() {
    return (
        <div className="testamente-container">
            <h1 className="testamente-title">Testamente și Dispoziții de Ultimă Voință</h1>
            <p className="testamente-description">
                Testamentul este un act juridic unilateral, solemn și personal, prin care o persoană își exprimă voința cu privire
                la modul în care vor fi împărțite bunurile sale după deces. La biroul nostru notarial, vă oferim consultanță,
                redactare și autentificare pentru testamente conforme cu legislația română.
            </p>

            <section className="testamente-section">
                <h2>Tipuri de Testamente Recunoscute în România</h2>
                <ul>
                    <li><strong>Testamentul olograf:</strong> Scris de mână integral de către testator, semnat și datat.</li>
                    <li><strong>Testamentul autentic:</strong> Redactat și autentificat în fața unui notar public.</li>
                    <li><strong>Testamentul secret:</strong> Sigilat și predat notarului fără a-i dezvălui conținutul.</li>
                    <li><strong>Testamente privilegiate:</strong> Redactate în circumstanțe excepționale (război, carantină etc.)</li>
                </ul>
                <p>
                    Cel mai sigur și recomandat este <strong>testamentul autentic</strong>, întrucât beneficiază de forță probantă deplină
                    și nu poate fi contestat ușor în instanță.
                </p>
            </section>

            <section className="testamente-section">
                <h2>Condiții de Valabilitate</h2>
                <ul>
                    <li>Testatorul trebuie să aibă capacitate deplină de exercițiu</li>
                    <li>Voința sa trebuie exprimată în mod liber și conștient</li>
                    <li>Testamentul trebuie să respecte forma legală (în funcție de tip)</li>
                    <li>Nu poate aduce atingere rezervelor succesorale ale moștenitorilor legali (descendenți, soț supraviețuitor)</li>
                </ul>
                <p>
                    Orice clauză abuzivă sau nelegală poate fi anulată de instanță. Notarul are obligația să verifice legalitatea actului.
                </p>
            </section>
            <section className="testamente-section">
                <h2>Costuri și Taxe Notariale</h2>
                <p>
                    Costul autentificării unui testament diferă în funcție de complexitatea dispozițiilor testamentare și de valoarea bunurilor menționate.
                    Prețul este stabilit conform Ordinului Ministrului Justiției nr. 46/C/2011 privind onorariile notariale:
                </p>
                <ul>
                    <li>Testament simplu: între <strong>120–300 lei</strong>, în funcție de redactare și formalități</li>
                    <li>Testament complex cu dispoziții patrimoniale: onorariu proporțional cu valoarea estimată (0,4%–0,8%)</li>
                    <li>Consultanță pentru redactare: <strong>50–100 lei</strong>, dacă este oferită separat</li>
                </ul>
                <p>În cazul testatorilor în vârstă, notarul poate solicita și o evaluare psihologică privind capacitatea de exercițiu.</p>
            </section>

            <section className="testamente-section calculator-wrap">
                <h2>Calculator Estimativ pentru Testament Autentic</h2>
                <p>
                    Introduceți valoarea estimativă a bunurilor menționate în testament pentru a calcula un onorariu orientativ:
                </p>
                <div className="calculator-form">
                    <input
                        type="number"
                        placeholder="Valoare estimativă bunuri (RON)"
                        onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            const fee = val ? (0.005 * val + 120) : 0;
                            document.getElementById('testament-output').innerText =
                                val > 0 ? `${fee.toFixed(2)} RON` : '-';
                        }}
                    />
                    <p><strong>Estimare onorariu:</strong> <span id="testament-output">-</span></p>
                </div>
                <p className="note">* Estimarea este informativă. Costul final se stabilește în funcție de conținutul efectiv al testamentului.</p>
            </section>

            <section className="testamente-section">
                <h2>Recomandări Importante</h2>
                <ul>
                    <li>Testamentul trebuie actualizat dacă apar schimbări în patrimoniu sau în situația familială</li>
                    <li>Este recomandat să lăsați o copie înregistrată la notar și una într-un loc sigur</li>
                    <li>Evitați formulele vagi și redactările ambigue</li>
                    <li>Apelați întotdeauna la un notar pentru a garanta validitatea și eficiența actului</li>
                </ul>
                <p>
                    La biroul nostru, veți primi asistență completă în redactarea și autentificarea testamentului,
                    respectând toate cerințele legale și asigurând protecția dorințelor dumneavoastră.
                </p>
            </section>
        </div>
    );
}
