import './msg.css';
import { Cached, Home } from "@mui/icons-material";
import { Button, Grid, Stack, Typography } from "@mui/material";

export default function ComponenteMsg(props) {
    return (<>
        <Grid container height="100vh">
            <Grid item xs={11} sm={8} md={6} lg={5} xl={4} margin="auto">
                <Stack direction="column" alignItems="center" spacing={2}>

                    {props?.icon}
                    <Typography variant="h4" component="h1" textAlign="center">{props?.title}</Typography>
                    <Typography variant="subtitle1" component="p" textAlign="center">{props?.subtitle}</Typography>
                    <Typography variant="body1" component="p" textAlign="center">{props?.description}</Typography>
                    {props.children}

                    {(props?.btnTryAgain === true) && (
                        <Button variant="outlined" startIcon={<Cached />} onClick={()=>{ window.location.reload(); }}>
                            Tentar novamente!
                        </Button>
                    )}

                    {(props?.btnHome === true) && (
                        <Button variant="outlined" startIcon={<Home />} onClick={()=>{ window.location.href = "/" }}>
                            Voltar ao início
                        </Button>
                    )}

                </Stack>
            </Grid>
        </Grid>
    </>)
}