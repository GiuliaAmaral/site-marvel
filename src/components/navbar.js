import { AppBar, Box, Button, Toolbar } from "@mui/material";

export default function ComponentNavBar() {
    return (<>
        <AppBar position="static" className="navbarAppBar">
            <Toolbar sx={{ justifyContent: { xs: "center", md: "space-between" } }}>

                <Box>
                    <a href="/">
                        <img src='/img/logo-marvel.png' alt="logo da Marvel" height='62.07px' />
                    </a>
                </Box>

                <Box sx={{ display: { xs: "none", md: "inherit" } }}>
                    <Button color="inherit">FILMES</Button>
                    <Button color="inherit">QUADRINHOS</Button>
                    <Button color="inherit">PROGRAMAS DE TV</Button>
                    <Button color="inherit">JOGOS</Button>
                </Box>

            </Toolbar>
        </AppBar>

    </>)
}