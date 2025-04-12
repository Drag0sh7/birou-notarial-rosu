import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    useTheme,
    useMediaQuery,
    styled,
    CardActionArea,
} from '@mui/material';
import { Link } from 'react-router-dom';
import bgImage from '../assets/office-bg.jpg';

/** Create a 'nuclear' style override to remove outlines, borders, 
    debug lines, and pseudo-elements that might draw lines. */
const noLinesStyle = {
    // Remove any default border, box shadow, or outline from all children.
    '*': {
        border: 'none !important',
        boxShadow: 'none !important',
        outline: 'none !important',
        backgroundImage: 'none !important',
    },
    // Remove pseudo-elements that could draw lines—use quotes for content.
    '& *::before, & *::after': {
        content: '"" !important',
        border: 'none !important',
        boxShadow: 'none !important',
    },
    // Also remove any potential MUI Grid debug backgrounds or borders.
    '& [class*="debug"]': {
        border: 'none !important',
        background: 'none !important',
    },
};

// Main container with a pulse animation.
const MainContainer = styled(Box)(({ theme }) => ({
    background: 'rgba(0, 0, 0, 0.55)',
    backdropFilter: 'blur(12px)',
    borderRadius: '12px',
    padding: theme.spacing(4),
    boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
    animation: 'pulse 6s infinite',
    '@keyframes pulse': {
        '0%, 100%': { boxShadow: '0 4px 20px rgba(0,0,0,0.5)' },
        '50%': { boxShadow: '0 8px 30px rgba(0,0,0,0.8)' },
    },
}));

const ServiceGridContainer = styled(Grid)({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    '&::before, &::after': { content: 'none' },
});

// Custom CardActionArea that removes ripple/focus outlines.
const NoFocusCardActionArea = styled(CardActionArea)({
    outline: 'none !important',
    '&:focus, &:active, &:focus-visible': {
        outline: 'none !important',
        boxShadow: 'none !important',
    },
    '& .MuiTouchRipple-root': {
        display: 'none !important',
    },
});

// Service cards with a modern glass-like design.
const ServiceCard = styled(Card)(({ theme }) => ({
    borderRadius: '16px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255,255,255,0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textDecoration: 'none',
    listStyle: 'none',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
    },
    '& .MuiCardContent-root': {
        padding: theme.spacing(3),
    },
}));

// Modern styling for the service titles.
const ServiceTitle = styled(Typography)({
    color: '#FFD700',
    fontWeight: 700,
    fontSize: '1.5rem',
    textAlign: 'center',
    transition: 'text-shadow 0.3s ease',
    textShadow: '0px 0px 3px rgba(0,0,0,0.6)',
    letterSpacing: '0.5px',
});

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

// Manually chunk services into rows: 3 in row1, 3 in row2, remaining in row3.
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
                ...noLinesStyle, // Apply the “nuclear” style override.
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
                        textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
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

                {chunkedServices.map((row, rowIndex) => (
                    <ServiceGridContainer
                        container
                        spacing={4}
                        justifyContent="center"
                        key={rowIndex}
                        sx={{
                            marginBottom: rowIndex < chunkedServices.length - 1 ? 4 : 0,
                        }}
                    >
                        {row.map((service) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={service.name}
                                sx={{
                                    listStyle: 'none',
                                    '&::before, &::after': { content: 'none' },
                                }}
                            >
                                <ServiceCard component={Link} to={service.path}>
                                    <NoFocusCardActionArea
                                        disableRipple
                                        disableTouchRipple
                                        disableFocusRipple
                                    >
                                        <CardContent>
                                            <ServiceTitle variant="h6">{service.name}</ServiceTitle>
                                        </CardContent>
                                    </NoFocusCardActionArea>
                                </ServiceCard>
                            </Grid>
                        ))}
                    </ServiceGridContainer>
                ))}
            </MainContainer>
        </Box>
    );
}
