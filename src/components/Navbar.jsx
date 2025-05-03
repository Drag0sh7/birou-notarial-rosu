import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    Paper,
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
    const burgerButtonRef = useRef(null);
    const drawerRef = useRef(null);

    const navLinks = [
        { title: 'Acasă', path: '/', icon: <HomeIcon fontSize="medium" /> },
        { title: 'Servicii', path: '/servicii', icon: <ArticleIcon fontSize="medium" /> },
        { title: 'Profil', path: '/profil', icon: <PersonIcon fontSize="medium" /> },
        { title: 'Contact', path: '/contact', icon: <ContactMailIcon fontSize="medium" /> },
    ];

    const toggleDrawer = () => setDrawerOpen((prev) => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                drawerRef.current &&
                !drawerRef.current.contains(event.target) &&
                !burgerButtonRef.current.contains(event.target)
            ) {
                setDrawerOpen(false);
            }
        };
        if (drawerOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [drawerOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobile) return;
        const handleScroll = () => {
            const currentY = window.scrollY;
            setVisible(currentY < lastScrollY || currentY < 50);
            setLastScrollY(currentY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY, isMobile]);

    const fontStyle = { fontFamily: '"Merriweather", serif' };

    const pillStyle = {
        backgroundColor: 'rgba(255,255,255,0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '999px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        px: 4,
        py: 1,
        gap: 3,
    };

    return (
        <>
            {drawerOpen && isMobile && burgerButtonRef.current && (
                <Paper
                    ref={drawerRef}
                    elevation={6}
                    sx={{
                        position: 'fixed',
                        top: burgerButtonRef.current.getBoundingClientRect().bottom + 8,
                        right: 16,
                        width: 220,
                        background: '#fff',
                        borderRadius: 2,
                        p: 1,
                        zIndex: 1400,
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                    }}
                >
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
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
                                    color: isActive ? '#2B3A67' : '#111',
                                    fontSize: '1.1rem',
                                    fontWeight: isActive ? 700 : 600,
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
                </Paper>
            )}

            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    background: isMobile
                        ? scrolled
                            ? 'rgba(255,255,255,0.95)'
                            : 'transparent'
                        : 'transparent',
                    backdropFilter: isMobile && scrolled ? 'blur(10px)' : 'none',
                    borderRadius: isMobile && scrolled ? '12px' : '0',
                    width: isMobile && scrolled ? '95%' : '100%',
                    left: isMobile && scrolled ? '50%' : 0,
                    transform: isMobile
                        ? `translateX(${isMobile && scrolled ? '-50%' : '0'})`
                        : visible
                            ? 'translateY(0)'
                            : 'translateY(-120%)',
                    transition: 'transform 0.4s ease, background 0.3s ease, width 0.3s ease, border-radius 0.3s ease',
                    zIndex: 1301,
                    mt: isMobile ? 0 : 2, // 🟢 spațiu adăugat DOAR pe desktop
                }}
            >
                <Toolbar sx={{ justifyContent: 'center' }}>
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
                                {navLinks.map((link) => {
                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Button
                                            key={link.title}
                                            component={RouterLink}
                                            to={link.path}
                                            sx={{
                                                ...fontStyle,
                                                color: isActive ? '#2B3A67' : '#111',
                                                fontWeight: isActive ? 700 : 600,
                                                borderBottom: isActive ? '2px solid #2B3A67' : 'none',
                                                textTransform: 'none',
                                                fontSize: '1.2rem',
                                                '&:hover': {
                                                    color: '#3C4F7E',
                                                    transform: 'scale(1.07)',
                                                },
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
                        <Box
                            sx={{
                                width: '100%',
                                px: 2,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
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
                            <IconButton ref={burgerButtonRef} onClick={toggleDrawer} sx={{ color: scrolled ? '#111' : '#fff' }}>
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
