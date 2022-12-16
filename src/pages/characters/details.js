import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import ApiMarvelV1PublicCharacters from "../../apis/marvel/v1/public/characters";
import ComponentCard from "../../components/card/card";

export default function PageCharactersDetails() {

    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        (async () => {
            let params = {
                limit: 30,
                offset: 0
            }
            const responseApi = await ApiMarvelV1PublicCharacters.getAll(params)
            setCharacters(responseApi?.results)
        })()
    }, [])

    function clickChangePage(event, numberPage) {
        console.log("🚀 ~ file: home.js:25 ~ clickChangePage ~ value", numberPage)

    }

    return (
        <>
            <Box component="section" pt={10} pb={5} sx={{ backgroundColor: '#fff' }} >

                <Container maxWidth="xl">
                    <Typography variant="h2" fontWeight="500" fontSize="1.75rem">LISTA DE PERSONAGENS MARVEL</Typography>

                    <Grid container spacing={5} mt={2} justifyContent="center">

                        {characters.map((character) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} xl={2}>
                                <ComponentCard img={`${character.thumbnail.path}.${character.thumbnail.extension}`} title={character.name} />
                            </Grid>
                        ))}

                    </Grid>
                    <Stack direction="row" justifyContent="center">
                        <Pagination count={10} shape="rounded" onChange={clickChangePage} sx={{ mt: 3 }} />
                    </Stack>
                </Container>
            </Box>
        </>
    )
}