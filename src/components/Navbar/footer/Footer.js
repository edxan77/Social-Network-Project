import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
// import { createTheme } from '@mui/material/styles';
// import { ThemeProvider } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     blue: {
//       main: '#64b5f6',
//     },
//   },
// });

export default function Footer() {
    return (
        // <ThemeProvider theme={theme}>
            <AppBar position="static" component="footer"   style={{ position: "fixed", bottom: "0" }}>
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="caption" color="inherit">
                            &copy; Lightbook {new Date().getFullYear()}
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        // </ThemeProvider>
    )
}