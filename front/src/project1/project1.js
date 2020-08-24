//import React, { useState } from "react";
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Toolbar,
  Card,
  AppBar,
  CardHeader,
  CardContent,
  Typography,
  CardMedia
} from "@material-ui/core";
import theme from "./theme";

const MaterialUICaseStudy = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            INFO3139
          </Typography>
        </Toolbar>
      </AppBar>
      <Card style={{ marginTop: "20%" }}>
        <CardHeader title="Case #1" style={{ textAlign: "center" }} />
        <CardContent style={{ paddingTop: 0 }}>
          <CardMedia style={{ textAlign: "center" }}>
            <img src="./travelicon.png" alt="travel"></img>
          </CardMedia>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};

export default MaterialUICaseStudy;
