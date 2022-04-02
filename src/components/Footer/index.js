import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";

export default function Footer() {
    return (
        <AppBar position="static" component="footer" color="primary" style={{ position: "fixed", bottom: "0" }}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="caption" color="inherit">
                &copy; 2022 Gistia 
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}