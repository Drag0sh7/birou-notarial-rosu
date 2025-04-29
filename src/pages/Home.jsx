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
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="text-white font-[Lato]">
            {/* Hero Section */}
            <div className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center relative bg-no-repeat" style={{ backgroundImage: 'url(/images/home-backgr.png)' }}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
                <div className="relative z-10 max-w-4xl w-full text-center p-8 md:p-12 bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold font-[EB Garamond] mb-4 drop-shadow-xl">
                        Biroul Notarial Roșu Elisabeta
                    </h1>
                    <p className="text-lg md:text-xl mb-6 text-white/90 font-light drop-shadow-md">
                        Profesionalism, promptitudine și confidențialitate în servicii notariale.
                    </p>
                    <button
                        onClick={scrollToFooter}
                        className="bg-blue-900 hover:bg-blue-800 text-white font-semibold text-lg py-2 px-6 rounded-full transition-all shadow-md"
                    >
                        Contactați-ne
                    </button>
                </div>
            </div>

            {/* Despre noi */}
            <section className="max-w-7xl mx-auto py-20 px-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-[EB Garamond] text-white drop-shadow-md">
                        Despre noi
                    </h2>
                    <p className="text-center text-white/90 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        Vă întâmpinăm cu un birou modern și o echipă dedicată, într-un mediu profesionist și prietenos.
                        Mai jos găsiți imagini din spațiul nostru de lucru.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Spațiu de primire clienți',
                                desc: 'Un mediu elegant și confortabil pentru discuții și consultanță legală personalizată.',
                                image: img3,
                            },
                            {
                                title: 'Biroul Notarului Public',
                                desc: 'Locul unde sunt autentificate actele dumneavoastră, cu grijă și confidențialitate.',
                                image: img9,
                            },
                            {
                                title: 'Zona de așteptare',
                                desc: 'Concepută pentru confort, astfel încât fiecare vizită să fie cât mai plăcută.',
                                image: sofa,
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 rounded-xl overflow-hidden shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform">
                                <img src={item.image} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-yellow-400 mb-2 font-[EB Garamond]">{item.title}</h3>
                                    <p className="text-white/90 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Servicii */}
            <section className="max-w-7xl mx-auto pb-24 px-4">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-[EB Garamond] text-white drop-shadow-md">
                        Servicii
                    </h2>
                    <p className="text-center text-white/85 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
                        Oferim o gamă completă de servicii notariale pentru persoane fizice și juridice,
                        garantând transparență, legalitate și promptitudine pentru fiecare act întocmit.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Autentificări și Legalizări',
                                desc: 'Autentificăm documente oficiale și legalizăm copii ale actelor, cu forță legală.',
                                image: stamp,
                            },
                            {
                                title: 'Succesiuni și Testamente',
                                desc: 'Asistență completă în succesiuni și testamente, cu consiliere profesionistă.',
                                image: consult,
                            },
                            {
                                title: 'Contracte și Procuri',
                                desc: 'Autentificăm contracte, împrumuturi și procuri, garantând siguranța juridică.',
                                image: signed,
                            },
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 rounded-xl overflow-hidden shadow-lg backdrop-blur-md hover:scale-[1.02] transition-transform">
                                <img src={item.image} alt={item.title} className="w-full aspect-[4/3] object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-yellow-400 mb-2 font-[EB Garamond]">{item.title}</h3>
                                    <p className="text-white/90 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
