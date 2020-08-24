import React, { useReducer } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import Reorder from "@material-ui/icons/Reorder";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Snackbar } from "@material-ui/core";
import theme from "./theme";
import LandingPage from "./landingpage";
import AlertSetup from "./alertsetup";
import AdvisoryAdd from "./advisoryAdd";
import AdvisoryList from "./advisorylist";
import {
  Toolbar,
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Typography
} from "@material-ui/core";

const App = () => {
  const initialState = {
    snackBarMsg: "",
    msgFromParent: "data from parent",
    gotData: false,
    anchorEl:null
  };
  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  const handleClose = () => {
    setState({anchorEl: null });
  };
  const handleClick = event => {
   setState({anchorEl:event.currentTarget})
  };
  const snackbarClose = () => {
    setState({ gotData: false });
  };
  const msgFromChild = msg => {
    setState({ snackBarMsg: msg, gotData: true });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Travel Alerts
          </Typography>
          <IconButton
            onClick={handleClick}
            color="inherit"
            style={{ marginLeft: "auto", paddingRight: "1vh" }}
          >
            <Reorder />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={state.anchorEl}
            open={Boolean(state.anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/home" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/reset" onClick={handleClose}>
              Reset Alerts
            </MenuItem>
            <MenuItem component={Link} to="/advisory" onClick={handleClose}>
              Add Advisory
            </MenuItem>
            <MenuItem component={Link} to="/listadvisory" onClick={handleClose}>
              List Advisory
            </MenuItem>
           
          </Menu>
        </Toolbar>
      </AppBar>
      <div>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/reset" render={() => <AlertSetup dataFromChild={msgFromChild}/>} />
        <Route path="/advisory" render={() => <AdvisoryAdd dataFromChild={msgFromChild} />} />
        <Route path="/listadvisory" render={() => <AdvisoryList dataFromChild={msgFromChild} />} />
        <Route path="/home" component={LandingPage} />
      </div>
      <Snackbar
        open={state.gotData}
        message={state.snackBarMsg}
        autoHideDuration={3000}
        onClose={snackbarClose}
      />
    </MuiThemeProvider>
  );
};


export default App;
