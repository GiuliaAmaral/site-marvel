import './newsletter.css';

import { Box, Button, Container, Grid, InputLabel, Stack, TextField, Typography } from "@mui/material";

export default function ComponentNewsletter() {
    return (
        <>
            <Box className="newsletter" component="section">
                <Container maxWidth="xl">
                    <Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs >
                            <Typography className="title" variant="h2">RECEBE AS NOVIDADES DA MARVEL</Typography>
                        </Grid>

                        <Grid item xs>
                            <Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={2}>
                                <Typography variant="h2" fontSize="1.25rem">Cadastre-se para receber nossas notícias em primeira mão!</Typography>

                                <form>
                                    <label className="inputLabel" for="fname">SEU MELHOR E-MAIL</label><br/>
                                    <input type="text" id="fname" name="fname" value="Informe seu melhor e-mail" />
                                    <input type="submit" value="ENVIAR" />
                                </form>
                            </Stack>
                        </Grid>

                    </Grid>
                </Container>

            </Box>

        </>
    )
}