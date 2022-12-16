import { Box, Container } from '@mui/material';
import './banner.css';

export default function ComponentBanner(props) {


    return (
        <Box component="section">
            <Container maxWidth="xl">
                <Box className="titleBannerOverlay">{props.children}</Box>
            </Container>
            <Box className="bannerOverlay"></Box>
            <Box className="banner" sx={{ backgroundImage: `url(${props?.backgroundImage})` }}></Box>
        </Box>
    )
}