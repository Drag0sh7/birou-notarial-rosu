import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    useTheme,
    useMediaQuery,
    styled,
} from '@mui/material';
import { Link } from 'react-router-dom';
import bgImage from '../assets/office-bg.jpg';

// Main container with continuous pulse animation (the "big card").
const MainContainer = styled(Box)(({ theme }) => ({
    background: 'rgba(0, 0, 0, 0.55)',
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
    padding: theme.spacing(4),
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    // Continuous pulse animation:
    animation: 'pulse 6s infinite',
    '@keyframes pulse': {
        '0%, 100%': { boxShadow: '0 4px 20px rgba(0,0,0,0.5)' },
        '50%': { boxShadow: '0 8px 30px rgba(0,0,0,0.8)' },
    },
}));

// Individual service cards with a glass-like effect and enhanced hover animation only.
const ServiceCard = styled(Card)(({ theme }) => ({
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(4px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
    boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
    textDecoration: 'none',
    // Hover effects only (no continuous animation on the cards themselves):
    '&:hover': {
        transform: 'scale(1.1)',
        filter: 'brightness(1.1)',
        boxShadow: '0 12px 30px rgba(255,215,0,0.7)',
    },
    '& .MuiCardContent-root': {
        padding: theme.spacing(4),
    },
}));

// Service title styling.
const ServiceTitle = styled(Typography)(({ theme }) => ({
    color: '#FFD700',
    fontWeight: 600,
    fontSize: '1.3rem',
    textAlign: 'center',
    transition: 'text-shadow 0.3s ease',
}));

// Define your services.
const services = [
    { name: 'Contracte', path: '/servicii/contracte' },
    { name: 'Succesiuni', path: '/servicii/succesiuni' },
    { name: 'Testamente', path: '/servicii/testamente' },
    { name: 'Divorț', path: '/servicii/divort' },
    { name: 'Procuri', path: '/servicii/procuri' },
    { name: 'Declarații', path: '/servicii/declaratii' },
    { name: 'Consiliere Investitori', path: '/servicii/consiliere-investitori' },
];

// We manually chunk the services into rows: 3 in row1, 3 in row2, remaining in row3.
// This approach guarantees that the 7th item is on its own row, centered.
const chunkedServices = [
    services.slice(0, 3),  // Row 1
    services.slice(3, 6),  // Row 2
    services.slice(6),     // Row 3
];

export default function Servicii() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, md: 6 },
                color: '#fff',
                minHeight: '100vh',
                backgroundImage: `linear-gradient(to bottom, rgba(10,10,10,0.5), rgba(10,10,10,0.75)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <MainContainer sx={{ maxWidth: '1200px', margin: '0 auto' }}>
                <Typography
                    variant="h3"
                    fontWeight={700}
                    textAlign="center"
                    mb={3}
                    sx={{
                        textShadow: '2px 2px 6px rgba(0,0,0,0.6)',
                        fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                >
                    Serviciile Noastre
                </Typography>

                <Typography
                    variant="body1"
                    textAlign="center"
                    mb={6}
                    sx={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.88)' }}
                >
                    Oferim o gamă completă de servicii notariale, cu profesionalism, experiență și promptitudine.
                </Typography>

                {/* Map each "row" of services to its own Grid container for precise layout */}
                {chunkedServices.map((row, rowIndex) => (
                    <Grid
                        container
                        spacing={4}
                        justifyContent="center"
                        key={rowIndex}
                        sx={{ marginBottom: rowIndex < chunkedServices.length - 1 ? 4 : 0 }}
                    >
                        {row.map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={service.name}>
                                <ServiceCard component={Link} to={service.path}>
                                    <CardActionArea>
                                        <CardContent>
                                            <ServiceTitle variant="h6" className="service-title">
                                                {service.name}
                                            </ServiceTitle>
                                        </CardContent>
                                    </CardActionArea>
                                </ServiceCard>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </MainContainer>
        </Box>
    );
}
