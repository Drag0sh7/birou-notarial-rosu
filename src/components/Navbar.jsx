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
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navLinks = [
    { title: 'Acasă', path: '/' },
    { title: 'Servicii', path: '/servicii' },
    { title: 'Profil', path: '/profil' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  // Hide navbar on scroll down (desktop only)
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
        {/* Desktop view */}
        {!isMobile ? (
          <Box sx={pillStyle}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
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
                      color: isActive ? '#2B3A67' : '#111',
                      fontWeight: isActive ? 700 : 500,
                      borderBottom: isActive ? '2px solid #2B3A67' : 'none',
                      textTransform: 'none',
                      fontSize: '1rem',
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
          // Mobile header with burger
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
                textDecoration: 'none',
                color: '#fff',
                fontWeight: 700,
                fontSize: '1.5rem',
              }}
            >
              Notariat Roșu Elisabeta
            </Typography>
            <IconButton onClick={toggleDrawer} sx={{ color: '#fff' }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Fullscreen mobile menu */}
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
        <IconButton
          onClick={toggleDrawer}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            color: '#fff',
          }}
        >
          <CloseIcon />
        </IconButton>
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
                    <ListItemText
                      primary={link.title}
                      primaryTypographyProps={{
                        sx: {
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
