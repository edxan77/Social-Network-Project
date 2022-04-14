import {   Toolbar, Typography } from "@material-ui/core";
import styles from './Footer.module.css';
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
            // <AppBar position="static" component="footer" id={styles.footer} >
                <footer  id={styles.footer} >
                    <Toolbar sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        <Typography variant="caption" style={{fontSize:'14px'}}>
                            &copy; Lightbook {new Date().getFullYear()}
                        </Typography>
                    </Toolbar>
                </footer>
            // </AppBar>
        // </ThemeProvider>
    )
}