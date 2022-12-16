import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import ComponentBanner from "../components/banner/banner";
import PageCharactersList from "./characters/list";

export default function PageHome() {

    useEffect(() => {
        (async () => {

        })()
    }, [])

    return (
        <>
            <ComponentBanner backgroundImage="/img/banner.webp">
                <Typography variant='h1' component="h1" color="white">
                    CONHEÇA
                    <br />
                    NOSSOS
                    <br />
                    PERSONAGENS
                </Typography>
            </ComponentBanner>

            <Box component="section" pt={10} pb={5} sx={{ backgroundColor: '#000' }} >
                <Container maxWidth="xl">
                    <Typography variant="h2" color="white" fontWeight="500" fontSize="1.75rem">BLA BLA BLA</Typography>
                </Container>
            </Box>

            <PageCharactersList />

            <Box component="section">

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    spacing={1}
                >

                    <Typography variant="h2" fontSize="3.875rem">MARVEL MASTERCARD</Typography>
                    <Typography variant="h3" color="#9B9B9B" fontSize="1.25rem">Desbloqueie seus super poderes</Typography>
                    <img src="img/cards.png" alt="cards" width="70%"/>
                    <Button className="buttonMarvelMastercard" variant="contained" color="secondary" >CADASTRE-SE AGORA</Button>
                    <Button className="buttonMarvelMastercard" variant="text" color="secondary">ENTENDA COMO FUNCIONA</Button>

                </Stack>

            </Box>

        </>
    )
}