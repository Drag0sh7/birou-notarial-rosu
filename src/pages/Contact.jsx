import { useState } from 'react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending:", form);

        try {
            const res = await fetch('http://localhost/notariat/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const result = await res.json();
            console.log("Response:", result);

            if (result.success) {
                setSent(true);
                setForm({ name: '', email: '', message: '' });
            } else {
                alert("Eroare: " + result.error);
            }
        } catch (err) {
            console.error("Eroare de rețea:", err);
            alert("Nu s-a putut trimite mesajul.");
        }
    };

    return (
        <div className="col-md-8 mx-auto">
            <h2 className="text-primary mb-4">Contact</h2>
            {sent && <div className="alert alert-success">Mesajul a fost trimis cu succes!</div>}
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary">Trimite</button>
            </form>
        </div>
    );
}
