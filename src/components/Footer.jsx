import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Divider,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function Footer() {
  return (
    <Box
      component="footer"
      id="footer"
      sx={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        py: 6,
        px: 3,
        mt: 8,
        boxShadow: '0 -6px 30px rgba(0,0,0,0.1)',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} textAlign={{ xs: 'center', md: 'left' }}>
          {/* Logo & Identity */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 1 }}>
              Notariat Roșu Elisabeta
            </Typography>
            <Typography variant="body2" mt={1} color="rgba(255,255,255,0.8)">
              Servicii notariale profesioniste în inima Bucureștiului.
              Suntem dedicați transparenței, siguranței și eficienței.
            </Typography>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Informații de Contact
            </Typography>

            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <LocationOnIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">Str. Mihai Eminescu 23, București</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <LocalPhoneIcon sx={{ color: '#FFD700' }} />
              <Link
                href="tel:+40712345678"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                +40 712 345 678
              </Link>
            </Box>

            <Box display="flex" alignItems="center" gap={1} mt={1}>
              <EmailIcon sx={{ color: '#FFD700' }} />
              <Link
                href="mailto:rosuelisabeta@gmail.com"
                color="inherit"
                underline="hover"
                sx={{ fontSize: '0.9rem' }}
              >
                rosuelisabeta@gmail.com
              </Link>
            </Box>
          </Grid>

          {/* Program */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Program
            </Typography>
            <Box display="flex" alignItems="center" gap={1} mt={2}>
              <AccessTimeIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">
                Luni - Vineri: 09:00 – 17:00
              </Typography>
            </Box>
            <Typography variant="body2" mt={1} sx={{ pl: 4 }}>
              Sâmbătă & Duminică: Închis
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Bar */}
        <Typography
          variant="body2"
          align="center"
          sx={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}
        >
          &copy; {new Date().getFullYear()} Biroul Notarial{' '}
          <strong>Roșu Elisabeta</strong>. Toate drepturile rezervate.
        </Typography>
      </Container>
    </Box>
  );
}
