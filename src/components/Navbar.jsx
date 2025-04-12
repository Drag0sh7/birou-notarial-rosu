import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { motion } from 'framer-motion';
import ArticleIcon from '@mui/icons-material/Article';

export default function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const location = useLocation();

    const garamondFont = {
        fontFamily: '"Lato", monospace',
    };

    const navLinks = [
        { title: 'Acasă', path: '/', icon: <HomeIcon fontSize="large" /> },
        { title: 'Servicii', path: '/servicii', icon: <ArticleIcon fontSize="large" /> },
        { title: 'Profil', path: '/profil', icon: <PersonIcon fontSize="large" /> },
        { title: 'Contact', path: '/contact', icon: <ContactMailIcon fontSize="large" /> },
    ];

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    // Desktop scroll effect to hide/show the navbar when scrolling
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

    // Mobile scroll effect to toggle the background "box" on scroll
    useEffect(() => {
        if (!isMobile) return;
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

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
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: 'transparent',
                transform: isMobile ? 'translateY(0)' : visible ? 'translateY(0)' : 'translateY(-120%)',
                transition: 'transform 0.4s ease',
                zIndex: 1301,
                pt: 2,
                pb: 2,
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
                                ...garamondFont,
                                textDecoration: 'none',
                                color: '#111',
                                fontWeight: 700,
                                fontSize: '1.5rem',
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
                                            ...garamondFont,
                                            color: isActive ? '#2B3A67' : '#111',
                                            fontWeight: isActive ? 700 : 500,
                                            borderBottom: isActive ? '2px solid #2B3A67' : 'none',
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
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
                            background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
                            backdropFilter: scrolled ? 'blur(10px)' : 'none',
                            borderRadius: scrolled ? '8px' : '0px',
                            transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
                        }}
                    >
                        <Typography
                            variant="h6"
                            component={RouterLink}
                            to="/"
                            sx={{
                                ...garamondFont,
                                textDecoration: 'none',
                                color: scrolled ? '#111' : '#fff',
                                fontWeight: 700,
                                fontSize: '1.5rem',
                            }}
                        >
                            Notariat Roșu Elisabeta
                        </Typography>
                        <IconButton onClick={toggleDrawer} sx={{ color: scrolled ? '#111' : '#fff' }}>
                            <motion.div animate={{ rotate: drawerOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
                                {drawerOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                            </motion.div>
                        </IconButton>
                    </Box>
                )}
            </Toolbar>

            <Drawer
                anchor="top"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        background: 'rgba(0,0,0,0.9)',
                        backdropFilter: 'blur(10px)',
                        width: '100vw',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <List>
                        {navLinks.map((link, index) => {
                            const isActive = location.pathname === link.path;
                            return (
                                <motion.div
                                    key={link.title}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <ListItem
                                        button
                                        component={RouterLink}
                                        to={link.path}
                                        onClick={toggleDrawer}
                                        sx={{ justifyContent: 'center', my: 2 }}
                                    >
                                        <ListItemIcon sx={{ color: isActive ? '#FFD700' : '#fff', minWidth: '40px' }}>
                                            {link.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={link.title}
                                            primaryTypographyProps={{
                                                sx: {
                                                    ...garamondFont,
                                                    color: isActive ? '#FFD700' : '#fff',
                                                    fontSize: '1.8rem',
                                                    fontWeight: isActive ? 700 : 500,
                                                    textDecoration: isActive ? 'underline' : 'none',
                                                },
                                            }}
                                        />
                                    </ListItem>
                                </motion.div>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        </AppBar>
    );
}
