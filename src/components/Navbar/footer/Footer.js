import { Typography } from "@material-ui/core";
import styles from './Footer.module.css';

export default function Footer() {
    return (

                <footer id={styles.footer} >
                    <div>
                        <Typography variant="inherit">
                            &copy; Lightbook {new Date().getFullYear()}
                        </Typography></div>
                </footer>
    )
}