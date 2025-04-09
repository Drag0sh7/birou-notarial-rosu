import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer-glass text-center py-4">
            <p className="mb-0">
                &copy; {new Date().getFullYear()} Biroul Notarial <strong>Roșu Elisabeta</strong>. Toate drepturile rezervate.
            </p>
        </footer>
    );
}
