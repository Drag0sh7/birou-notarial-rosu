import React from 'react';
import img3 from '../assets/3.png';
import img9 from '../assets/9.png';
import sofa from '../assets/7.png';
import stamp from '../assets/stampilare.png';
import consult from '../assets/consultare.png';
import signed from '../assets/semnat.png';

export default function Home() {
    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    };

    /* --- date --- */
    const despreNoi = [
        { title: 'Spațiu de primire clienți', desc: 'Un mediu elegant și confortabil pentru discuții și consultanță legală personalizată.', image: img3 },
        { title: 'Biroul Notarului Public', desc: 'Locul unde sunt autentificate actele dumneavoastră, cu grijă și confidențialitate.', image: img9 },
        { title: 'Zona de așteptare', desc: 'Concepută pentru confort, astfel încât fiecare vizită să fie cât mai plăcută.', image: sofa },
    ];

    const servicii = [
        { title: 'Autentificări și Legalizări', desc: 'Autentificăm documente oficiale și legalizăm copii ale actelor, cu forță legală.', image: stamp },
        { title: 'Succesiuni și Testamente', desc: 'Asistență completă în succesiuni și testamente, cu consiliere profesionistă.', image: consult },
        { title: 'Contracte și Procuri', desc: 'Autentificăm contracte, împrumuturi și procuri, garantând siguranța juridică.', image: signed },
    ];

    /* --- card component --- */
    const Card = ({ item }) => (
        <div
            className="group w-full max-w-[500px] mx-auto sm:mx-0 rounded-xl overflow-hidden
                 shadow-lg border border-white/10 bg-white/5 transition duration-300
                 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
        >
            <div className="overflow-hidden rounded-t-xl">
                <img src={item.image} alt={item.title} className="w-full aspect-[4/3] object-cover" />
            </div>

            <div className="p-6 bg-white/10 rounded-b-xl flex flex-col flex-grow">
                <h3 className="text-2xl font-[Merriweather] font-semibold text-yellow-400 mb-2
                       group-hover:text-yellow-300 transition-colors">
                    {item.title}
                </h3>
                <p className="text-white/85 text-lg flex-grow">{item.desc}</p>
            </div>
        </div>
    );

    /* --- grid renderer: ultimul card -> col-span-2 şi centrat DOAR între 640-767px --- */
    const Grid = (items) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item, idx) => {
                const last = idx === items.length - 1;
                return (
                    <div
                        key={item.title}
                        className={`
              w-full flex
              ${last ? 'sm:col-span-2 sm:justify-center md:col-span-1' : ''}
            `}
                    >
                        <Card item={item} />
                    </div>
                );
            })}
        </div>
    );

    /* --- JSX --- */
    return (
        <div
            className="text-white font-[Inter] min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(/images/home-backgr.png)` }}
        >
            {/* HERO -------------------------------------------------------- */}
            <section className="flex items-center justify-center min-h-[4vh] pt-32 px-4">
                <div className="bg-white/10 rounded-3xl shadow-xl border border-white/20 p-16 text-center max-w-4xl w-full">
                    <h1 className="text-5xl md:text-6xl font-[Merriweather] font-bold mb-5 drop-shadow-xl leading-tight">
                        Biroul Notarial Roșu Elisabeta
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-white/90 font-light drop-shadow-md leading-relaxed max-w-2xl mx-auto">
                        Profesionalism, promptitudine și confidențialitate în servicii notariale.
                    </p>
                    <button
                        onClick={scrollToFooter}
                        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg py-3 px-8 rounded-full
                       shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                        Contactați-ne
                    </button>
                </div>
            </section>

            {/* DESPRE NOI -------------------------------------------------- */}
            <section className="max-w-7xl mx-auto py-24 px-4">
                <div className="bg-white/10 rounded-3xl shadow-xl border border-white/20 p-12">
                    <h2 className="text-5xl md:text-6xl font-[Merriweather] font-bold text-center mb-6 drop-shadow-md">
                        Despre noi
                    </h2>
                    <p className="text-center text-white/85 text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
                        Vă întâmpinăm cu un birou modern și o echipă dedicată, într-un mediu profesionist și prietenos.
                        Mai jos găsiți imagini din spațiul nostru de lucru.
                    </p>
                    {Grid(despreNoi)}
                </div>
            </section>

            {/* SERVICII ---------------------------------------------------- */}
            <section className="max-w-7xl mx-auto pb-28 px-4">
                <div className="bg-white/10 rounded-3xl shadow-xl border border-white/20 p-12">
                    <h2 className="text-4xl md:text-5xl font-[Merriweather] font-bold text-center mb-6 drop-shadow-md">
                        Servicii
                    </h2>
                    <p className="text-center text-white/80 text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto">
                        Oferim o gamă completă de servicii notariale pentru persoane fizice și juridice,
                        garantând transparență, legalitate și promptitudine pentru fiecare act întocmit.
                    </p>
                    {Grid(servicii)}
                </div>
            </section>
        </div>
    );
}
