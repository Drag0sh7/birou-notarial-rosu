// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Forțează scroll-ul sus pe toate browserele
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }, 10); // un mic delay ajută să prindă ruta nouă
    }, [pathname]);

    return null;
}
