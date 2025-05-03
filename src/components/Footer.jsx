import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
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
        background: 'rgba(255, 255, 255, 0.12)',
        backdropFilter: 'blur(18px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        py: { xs: 5, md: 7 },
        px: { xs: 2, md: 4 },
        mt: 10,
        boxShadow: '0 -8px 30px rgba(0,0,0,0.2)',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          textAlign={{ xs: 'center', md: 'left' }}
          alignItems="flex-start"
          justifyContent="center"
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                letterSpacing: 1,
                mb: 1,
                fontSize: { xs: '1.4rem', md: '1.6rem' },
              }}
            >
              Notariat Roșu Elisabeta
            </Typography>
            <Typography
              variant="body2"
              color="rgba(255,255,255,0.85)"
              sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.6 }}
            >
              Birou Individual – Servicii notariale profesioniste, confidențiale și rapide.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.2rem' } }}
            >
              Informații de Contact
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              mt={2}
              flexWrap="wrap"
            >
              <LocationOnIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2" sx={{ maxWidth: '260px' }}>
                Str. Vasile Conta nr. 4, et. 2, sector 2, interfon 02, București
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              mt={1}
            >
              <LocalPhoneIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">0730 999 704 / 0723 347 307</Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              mt={1}
            >
              <LocalPhoneIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">Tel/Fax: 0311 265 009</Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              mt={1}
            >
              <EmailIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">elisabeta.rosu12@gmail.com</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, fontSize: { xs: '1.1rem', md: '1.2rem' } }}
            >
              Program
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              gap={1}
              mt={2}
            >
              <AccessTimeIcon sx={{ color: '#FFD700' }} />
              <Typography variant="body2">Luni – Vineri: 09:00 – 17:00</Typography>
            </Box>
            <Typography
              variant="body2"
              mt={1}
              sx={{ pl: { xs: 0, md: 4 }, textAlign: { xs: 'center', md: 'left' } }}
            >
              Sâmbătă & Duminică: Închis
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: { xs: 4, md: 5 },
            borderColor: 'rgba(255,255,255,0.2)',
          }}
        />

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          &copy; {new Date().getFullYear()} Biroul Notarial <strong>Roșu Elisabeta</strong>. Toate drepturile rezervate.
        </Typography>
      </Container>
    </Box>
  );
}
