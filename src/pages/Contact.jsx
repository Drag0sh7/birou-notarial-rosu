import { useState } from 'react';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

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
                alert("Eroare: " + result.error);
            }
        } catch (err) {
            alert("Nu s-a putut trimite mesajul.");
            console.error(err);
        }
    };

    return (
        <div className="contact-wrapper py-5">
            <div className="glass-contact container p-5">
                <h2 className="contact-title text-center text-primary mb-4">Contact</h2>
                <p className="contact-description text-center mb-4">
                    Pentru întrebări, programări sau informații suplimentare, ne puteți trimite un mesaj direct din acest formular.
                </p>
                {sent && <div className="alert alert-success text-center">Mesajul a fost trimis cu succes!</div>}
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="mb-3">
                        <label className="form-label">Nume</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Numele complet"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="exemplu@email.com"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mesaj</label>
                        <textarea
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder="Scrieți mesajul aici..."
                            value={form.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary px-4 py-2">Trimite</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
