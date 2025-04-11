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
import img9 from '../assets/9.png';
import sofa from '../assets/7.png';
import stamp from '../assets/stampilare.png';
import consult from '../assets/consultare.png';
import signed from '../assets/semnat.png';

export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const headingFont = { fontFamily: '"EB Garamond", serif' };
    const bodyFont = { fontFamily: '"Lato", sans-serif' };

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ color: '#fff', pb: 10 }}>
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
                        variant="h2"
                        fontWeight={700}
                        sx={{
                            ...headingFont,
                            fontSize: { xs: '2rem', md: '3rem' },
                            mb: 2,
                            textShadow: '1px 1px 8px rgba(0,0,0,0.8)',
                        }}
                    >
                        Biroul Notarial Roșu Elisabeta
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            ...bodyFont,
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
                        onClick={scrollToFooter}
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

            <Container maxWidth="lg" sx={{ my: 12 }}>
                <Box
                    sx={{
                        background: 'rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: 6,
                        px: { xs: 3, md: 6 },
                        py: { xs: 6, md: 8 },
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                        textAlign="center"
                        mb={4}
                        sx={{ ...headingFont, textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
                    >
                        Despre noi
                    </Typography>

                    <Typography
                        variant="body1"
                        textAlign="center"
                        mb={6}
                        sx={{
                            ...bodyFont,
                            fontSize: '1.2rem',
                            color: 'rgba(255,255,255,0.88)',
                            lineHeight: 1.9,
                            maxWidth: '900px',
                            margin: '0 auto',
                        }}
                    >
                        Vă întâmpinăm cu un birou modern și o echipă dedicată, într-un mediu profesionist și prietenos.
                        Mai jos găsiți imagini din spațiul nostru de lucru.
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
                        {[
                            {
                                title: 'Spațiu de primire clienți',
                                desc: 'Un mediu elegant și confortabil pentru discuții și consultanță legală personalizată.',
                                image: img3,
                            },
                            {
                                title: 'Biroul Notarului Public',
                                desc: 'Locul unde sunt autentificate actele dumneavoastră, cu grijă și confidențialitate.',
                                image: img9,
                            },
                            {
                                title: 'Zona de așteptare',
                                desc: 'Concepută pentru confort, astfel încât fiecare vizită să fie cât mai plăcută.',
                                image: sofa,
                            },
                        ].map((item, i) => (
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 4,
                                        background: 'rgba(255,255,255,0.05)',
                                        backdropFilter: 'blur(10px)',
                                        color: '#fff',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        alt={item.title}
                                        sx={{ height: 220, objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            fontWeight={600}
                                            mb={2}
                                            sx={{ ...headingFont, color: '#FFD700' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ ...bodyFont, color: 'rgba(255,255,255,0.9)' }}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 12 }}>
                <Box
                    sx={{
                        background: 'rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(14px)',
                        borderRadius: 6,
                        px: { xs: 3, md: 6 },
                        py: { xs: 6, md: 8 },
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    }}
                >
                    <Typography
                        variant="h3"
                        fontWeight={600}
                        textAlign="center"
                        mb={4}
                        sx={{ ...headingFont, textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}
                    >
                        Servicii
                    </Typography>
                    <Typography
                        variant="body1"
                        textAlign="center"
                        mb={6}
                        sx={{
                            ...bodyFont,
                            color: 'rgba(255,255,255,0.85)',
                            fontSize: '1.05rem',
                            maxWidth: '850px',
                            mx: 'auto',
                            lineHeight: 1.7,
                        }}
                    >
                        Oferim o gamă completă de servicii notariale pentru persoane fizice și juridice,
                        garantând transparență, legalitate și promptitudine pentru fiecare act întocmit.
                    </Typography>

                    <Grid container spacing={4} justifyContent="center">
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
                            <Grid item xs={12} sm={6} md={4} key={i}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        borderRadius: 4,
                                        background: 'rgba(255,255,255,0.05)',
                                        backdropFilter: 'blur(10px)',
                                        color: '#fff',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                        },
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
                                            mb={2}
                                            sx={{ ...headingFont, color: '#FFD700' }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ ...bodyFont, color: 'rgba(255,255,255,0.9)' }}>
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
