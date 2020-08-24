import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardMedia
} from "@material-ui/core";
import theme from "./theme";

const LandingPage = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Card>
      <CardMedia style={{ textAlign: "center",paddingTop: "3vh" }}>
            <img src="./travelicon.png" alt="travel"></img>
          </CardMedia>
        <CardHeader
          title="World Wide Travel Alerts"
          color="inherit"
          style={{ textAlign: "center", paddingTop: "1vh" }}
        />
        <CardContent style={{ paddingTop: 0 }}>
          
          <br />
          <Typography
            color="primary"
            style={{ float: "right", paddingRight: "1vh", fontSize: "smaller" }}
          >
            &copy;Tianyi Li - 2020
          </Typography>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};

export default LandingPage;
