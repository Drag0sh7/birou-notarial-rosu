import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost/notariat/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            const result = await res.json();
            if (result.success) {
                setSent(true);
                setForm({ name: '', email: '', message: '' });
            } else {
                alert('Eroare: ' + result.error);
            }
        } catch (err) {
            alert('Nu s-a putut trimite mesajul.');
            console.error(err);
        }
    };

    return (
        <div
            className="min-h-screen flex justify-center items-center bg-cover bg-center pt-32 md:pt-48 pb-20 px-4"
            style={{ backgroundImage: "url('/images/home-backgr.png')" }}
        >
            <div className="bg-white/15 shadow-2xl rounded-3xl p-8 md:p-12 w-full max-w-3xl md:w-10/12 text-white">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
                    Contactați-ne
                </h2>

                <p className="text-center max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed text-white/85">
                    Aveți întrebări sau doriți să programați o întâlnire? Completați
                    formularul de mai jos și vom reveni cu un răspuns cât mai curând posibil.
                </p>

                {sent && (
                    <div className="bg-green-500 text-white rounded-lg px-4 py-2 text-center mb-6 shadow-md">
                        Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Nume */}
                    <div>
                        <label className="block text-sm md:text-base font-semibold mb-1">
                            Nume complet
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Nicolae Iorga"
                            className="w-full rounded-lg px-4 py-3 bg-white/25 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm md:text-base font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="exemplu@email.com"
                            className="w-full rounded-lg px-4 py-3 bg-white/25 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Mesaj */}
                    <div>
                        <label className="block text-sm md:text-base font-semibold mb-1">
                            Mesaj
                        </label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Scrie mesajul tău aici..."
                            className="w-full rounded-lg px-4 py-3 bg-white/25 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-yellow-400 text-gray-900 font-bold px-10 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
                        >
                            Trimite mesaj
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
