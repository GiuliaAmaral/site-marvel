import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import ApiMarvelV1PublicCharacters from "../../apis/marvel/v1/public/characters";
import ComponentCard from "../../components/card/card";
import ComponenteLoadingAndMsg from "../../components/loadingAndMsg";

export default function PageCharactersList() {

    // eslint-disable-next-line
    const [msg, setMsg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [characters, setCharacters] = useState([]);
    const [itensTotal, setItensTotal] = useState(0);
    const [pageCurrent, setPageCurrent] = useState(1);
    const limitItensPerPage = 30;


    useEffect(() => {
        (async () => {
            await setDatasCard({
                limit: limitItensPerPage,
                offset: 0
            });
        })()
    }, [])

    async function setDatasCard(params) {
        try {
            setLoading(true);
            const responseApi = await ApiMarvelV1PublicCharacters.getAll(params);
            setItensTotal(responseApi?.total);
            setCharacters(responseApi?.results);
            setLoading(false);
        } catch (error) {
            setError({
                subtitle: `Ocorreu um erro na APi, tente novamente amis tarde.`,
                description: String(error)
            });
            setLoading(false);
        }
    }

    async function clickChangePage(event, numberPage) {
        setPageCurrent(numberPage);
        await setDatasCard({
            limit: limitItensPerPage,
            offset: limitItensPerPage*(numberPage-1)
        });
    }

    return (
        <ComponenteLoadingAndMsg loading={loading} error={error} msg={msg}>

            <Box component="section" pt={10} pb={5} sx={{ backgroundColor: '#fff' }} >

                <Container maxWidth="xl">
                    <Typography variant="h2" fontWeight="500" fontSize="1.75rem">LISTA DE PERSONAGENS MARVEL</Typography>

                    <Grid container spacing={5} mt={2} justifyContent="center">

                        {characters.map((character) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={character?.id}>
                                <ComponentCard img={`${character?.thumbnail?.path}.${character?.thumbnail?.extension}`} title={character?.name} />
                            </Grid>
                        ))}

                    </Grid>
                    <Stack direction="row" justifyContent="center">
                        <Pagination count={Number(itensTotal/limitItensPerPage).toFixed()} page={pageCurrent} shape="rounded" onChange={clickChangePage} sx={{ mt: 3 }} hidePrevButton hideNextButton className="pagination" />
                    </Stack>
                </Container>
            </Box>
        </ComponenteLoadingAndMsg>
    )
}