import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();
    const burgerRef = useRef(null);
    const drawerRef = useRef(null);

    const navLinks = [
        { title: 'Acasă', path: '/', icon: <HomeIcon fontSize="medium" /> },
        { title: 'Servicii', path: '/servicii', icon: <ArticleIcon fontSize="medium" /> },
        { title: 'Profil', path: '/profil', icon: <PersonIcon fontSize="medium" /> },
        { title: 'Contact', path: '/contact', icon: <ContactMailIcon fontSize="medium" /> },
    ];

    /* -------------------- helpers -------------------- */
    const toggleDrawer = () => setDrawerOpen(prev => !prev);

    /* click-outside pentru drawer */
    useEffect(() => {
        const handler = (e) => {
            if (drawerRef.current &&
                !drawerRef.current.contains(e.target) &&
                !burgerRef.current.contains(e.target)) {
                setDrawerOpen(false);
            }
        };
        drawerOpen ? document.addEventListener('mousedown', handler)
            : document.removeEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [drawerOpen]);

    /* scroll – blur scos, doar vizibilitate / background alb */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* hide-on-scroll pentru desktop */
    useEffect(() => {
        if (isMobile) return;
        const onScroll = () => {
            const y = window.scrollY;
            setVisible(y < lastScrollY || y < 50);
            setLastScrollY(y);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastScrollY, isMobile]);

    /* fonts & style */
    const fontStyle = { fontFamily: '"Merriweather", serif' };

    const pillStyle = {
        backgroundColor: 'rgba(255,255,255,0.95)',      // ⬅️ fără blur
        borderRadius: '999px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        px: 4,
        py: 1,
        gap: 3,
    };

    /* -------------------- JSX -------------------- */
    return (
        <>
            {/* Drawer mic – fără blur */}
            {drawerOpen && isMobile && burgerRef.current && (
                <Box
                    ref={drawerRef}
                    sx={{
                        position: 'fixed',
                        top: burgerRef.current.getBoundingClientRect().bottom + 8,
                        right: 16,
                        width: 220,
                        background: '#fff',
                        borderRadius: 2,
                        p: 1,
                        zIndex: 1400,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }}
                >
                    {navLinks.map(link => {
                        const active = location.pathname === link.path;
                        return (
                            <Button
                                key={link.title}
                                component={RouterLink}
                                to={link.path}
                                onClick={() => setDrawerOpen(false)}
                                startIcon={link.icon}
                                fullWidth
                                sx={{
                                    ...fontStyle,
                                    color: active ? '#2B3A67' : '#111',
                                    fontSize: '1.1rem',
                                    fontWeight: active ? 700 : 600,
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    my: 0.5,
                                    '&:hover': { color: '#2B3A67' },
                                }}
                            >
                                {link.title}
                            </Button>
                        );
                    })}
                </Box>
            )}

            {/* NAVBAR */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: isMobile
                        ? (scrolled ? 'rgba(255,255,255,0.95)' : 'transparent')
                        : 'transparent',
                    borderRadius: isMobile && scrolled ? '12px' : 0,
                    width: isMobile && scrolled ? '95%' : '100%',
                    left: isMobile && scrolled ? '50%' : 0,
                    top: 16,
                    transform: isMobile
                        ? `translateX(${isMobile && scrolled ? '-50%' : '0'})`
                        : (visible ? 'translateY(0)' : 'translateY(-150%)'),
                    transition: 'transform 0.4s ease, background 0.3s ease',
                    boxShadow: 'none',
                    zIndex: 1301,
                }}
            >
                <Toolbar sx={{ justifyContent: 'center' }}>
                    {/* ---------- DESKTOP ---------- */}
                    {!isMobile ? (
                        <Box sx={pillStyle}>
                            <Typography
                                variant="h6"
                                component={RouterLink}
                                to="/"
                                sx={{
                                    ...fontStyle,
                                    textDecoration: 'none',
                                    color: '#111',
                                    fontWeight: 800,
                                    fontSize: '1.6rem',
                                }}
                            >
                                Notariat Roșu Elisabeta
                            </Typography>

                            <Box sx={{ display: 'flex', gap: 3 }}>
                                {navLinks.map(link => {
                                    const active = location.pathname === link.path;
                                    return (
                                        <Button
                                            key={link.title}
                                            component={RouterLink}
                                            to={link.path}
                                            sx={{
                                                ...fontStyle,
                                                color: active ? '#2B3A67' : '#111',
                                                fontWeight: active ? 700 : 600,
                                                borderBottom: active ? '2px solid #2B3A67' : 'none',
                                                textTransform: 'none',
                                                fontSize: '1.2rem',
                                                '&:hover': { color: '#3C4F7E', transform: 'scale(1.07)' },
                                                transition: 'all 0.3s ease',
                                            }}
                                        >
                                            {link.title}
                                        </Button>
                                    );
                                })}
                            </Box>
                        </Box>
                    ) : (
                        /* ---------- MOBILE ---------- */
                        <Box sx={{ width: '100%', px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography
                                variant="h6"
                                component={RouterLink}
                                to="/"
                                sx={{
                                    ...fontStyle,
                                    textDecoration: 'none',
                                    color: scrolled ? '#111' : '#fff',
                                    fontWeight: 800,
                                    fontSize: '1.5rem',
                                }}
                            >
                                Notariat Roșu Elisabeta
                            </Typography>

                            <IconButton
                                ref={burgerRef}
                                onClick={toggleDrawer}
                                sx={{ color: scrolled ? '#111' : '#fff' }}
                            >
                                <motion.div animate={{ rotate: drawerOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                                    {drawerOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                                </motion.div>
                            </IconButton>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
}
