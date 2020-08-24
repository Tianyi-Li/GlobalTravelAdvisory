import React, { useReducer, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Typography
} from "@material-ui/core";
import theme from "./theme";
import "../App.css";

const AlertSetup = props => {
  const initialState = {
    resArr: []
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUsers = async () => {
    try {
      props.dataFromChild("running setup...");
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ query: "{setupalerts}" })
      });
      let json = await response.json();
      props.dataFromChild("alerts collection setup completed");
      setState({
        resArr: json.data.setupalerts
          .replace(/([.])\s*(?=[A-Z])/g, "$1|")
          .split("|")
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };

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
        <CardContent>
        <Typography variant="h6" color="inherit" align="center" style={{fontWeight:"bold"}}>
            Alert Setup - Details
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {state.resArr.map(row => (
                  <TableRow key={state.resArr.indexOf(row)}>
                    <TableCell component="th" scope="row">
                      {row}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </MuiThemeProvider>
  );
};

export default AlertSetup;
