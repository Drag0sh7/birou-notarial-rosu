import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import img3 from '../assets/3.png';
import stamp from '../assets/stampilare.png';
import consult from '../assets/consultare.png';
import signed from '../assets/semnat.png';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.7), rgba(10,10,10,0.9)), url(${require('../assets/office-bg.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        pb: 10,
      }}
    >
      {/* HERO Section - Fullscreen */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            maxWidth: '900px',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            textAlign: 'center',
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            boxShadow: '0 8px 60px rgba(0,0,0,0.6)',
          }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#fff',
              mb: 2,
              textShadow: '1px 1px 8px rgba(0,0,0,0.8)',
            }}
          >
            Biroul Notarial Roșu Elisabeta
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              mb: 4,
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
            }}
          >
            Profesionalism, promptitudine și confidențialitate în servicii notariale.
          </Typography>
          <Button
            variant="contained"
            href="#contact"
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '30px',
              px: 5,
              py: 1.5,
              fontWeight: 'bold',
              fontSize: '1rem',
              '&:hover': { backgroundColor: '#3C4F7E' },
            }}
          >
            Contactați-ne
          </Button>
        </Box>
      </Box>

      {/* ABOUT Section */}
      <Container maxWidth="lg" sx={{ my: 10 }}>
        <Box
          sx={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(14px)',
            borderRadius: 6,
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 8 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mb={6}
            sx={{ color: '#fff', textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            Despre noi
          </Typography>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Elisabeta Roșu, notar public cu peste 20 de ani de experiență, oferă servicii notariale
                complete și consultanță juridică de specialitate. Biroul nostru este dedicat să ofere
                clienților soluții eficiente, corecte și personalizate, într-un mediu primitor și profesionist.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 4, boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                <CardMedia
                  component="img"
                  image={img3}
                  alt="Interior birou"
                  sx={{
                    height: isMobile ? 220 : 300,
                    width: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* SERVICES Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box
          sx={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(14px)',
            borderRadius: 6,
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 8 },
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            textAlign="center"
            mb={4}
            sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
          >
            Servicii
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            mb={6}
            sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem' }}
          >
            Oferim o gamă completă de servicii notariale pentru persoane fizice și juridice.
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                title: 'Autentificări și Legalizări',
                desc: 'Autentificăm documente oficiale și legalizăm copii ale actelor, cu forță legală.',
                image: stamp,
              },
              {
                title: 'Succesiuni și Testamente',
                desc: 'Asistență completă în succesiuni și testamente, cu consiliere profesionistă.',
                image: consult,
              },
              {
                title: 'Contracte și Procuri',
                desc: 'Autentificăm contracte, împrumuturi și procuri, garantând siguranța juridică.',
                image: signed,
              },
            ].map((item, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    color: '#fff',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      mb={1}
                      sx={{ color: '#FFD700' }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.9)">
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
