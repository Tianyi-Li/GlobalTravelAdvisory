import React, { useReducer, useEffect } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Table,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  Typography
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import theme from "./theme";
import "../App.css";

const AdvisoryList = props => {
  const initialState = {
    autoCompleteArr: [],
    radioValue: "traveller",
    arrForTable: [],
    autoCompleteKey: "",
    textFieldLabel: "traveller"
  };

  const reducer = (state, newState) => ({ ...state, ...newState });
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchTravellers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAlertsBySubRegions = async subregion => {
    try {
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: `{alertsforsubregion(subregion:"${subregion}") {country,name,text,date,region,subregion}}`
        })
      });
      let json = await response.json();
      props.dataFromChild(
        `found ${json.data.alertsforsubregion.length} alerts for ${subregion}`
      );
      setState({
        arrForTable: json.data.alertsforsubregion
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };

  const fetchSubRegion = async () => {
    try {
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: `{subregions}`
        })
      });
      let json = await response.json();

      props.dataFromChild(`found ${json.data.subregions.length} sub regions`);

      setState({
        autoCompleteArr: json.data.subregions
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };

  const fectchAlertsByRegions = async region => {
    try {
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: `{alertsforregion(region:"${region}") {country,name,text,date,region,subregion}}`
        })
      });
      let json = await response.json();
      props.dataFromChild(
        `found ${json.data.alertsforregion.length} alerts for ${region}`
      );
      setState({
        arrForTable: json.data.alertsforregion
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };

  const fetchRegion = async () => {
    try {
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: `{regions}`
        })
      });
      let json = await response.json();
      props.dataFromChild(`found ${json.data.regions.length} regions`);

      setState({
        autoCompleteArr: json.data.regions
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };
  const fetchAlertsByTravllers = async traveller => {
    try {
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          query: `{alertsfortravellers(travellername:"${traveller}"){travellername,name,date,text}}`
        })
      });
      let json = await response.json();
      props.dataFromChild(
        `found ${json.data.alertsfortravellers.length} alerts for ${traveller}`
      );

      setState({
        arrForTable: json.data.alertsfortravellers
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };
  const fetchTravellers = async () => {
    try {
      let response = await fetch("http://localhost:5000/graphql", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({ query: "{travellers}" })
      });
      let json = await response.json();
      props.dataFromChild(`found ${json.data.travellers.length} travellers`);
      setState({
        autoCompleteArr: json.data.travellers
      });
    } catch (error) {
      console.log(error);
      props.dataFromChild(`Problem loading server data - ${error.message}`);
    }
  };

  const onChangeAutocomplete = (e, selectedOption) => {
    if (selectedOption) {
      if (state.textFieldLabel === "traveller")
        fetchAlertsByTravllers(selectedOption);
      else if (state.textFieldLabel === "region")
        fectchAlertsByRegions(selectedOption);
      else if (state.textFieldLabel === "sub-region")
        fetchAlertsBySubRegions(selectedOption);
    }
  };

  const handleChange = event => {
    if (event.target.value === "traveller") fetchTravellers();
    else if (event.target.value === "region") fetchRegion();
    else if (event.target.value === "sub-region") fetchSubRegion();

    setState({
      radioValue: event.target.value,
      autoCompleteKey: event.target.value,
      textFieldLabel: event.target.value,
      arrForTable: []
    });
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
            List Advisories By:
          </Typography>
          <RadioGroup
            aria-label="position"
            name="position"
            value={state.radioValue}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="traveller"
              control={<Radio color="primary" />}
              label="Traveller"
              labelPlacement="start"
            />
            <FormControlLabel
              value="region"
              control={<Radio color="primary" />}
              label="Region"
              labelPlacement="start"
            />
            <FormControlLabel
              value="sub-region"
              control={<Radio color="primary" />}
              label="Sub-Region"
              labelPlacement="start"
            />
          </RadioGroup>
          <Autocomplete
            id="travellers"
            options={state.autoCompleteArr}
            getOptionLabel={option => option}
            style={{ width: 300, paddingTop: "2vh", paddingBottom: 0 }}
            onChange={onChangeAutocomplete}
            key={state.autoCompleteKey}
            renderInput={params => (
              <TextField
                {...params}
                label={state.textFieldLabel}
                variant="outlined"
                fullWidth
              />
            )}
          />
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {state.arrForTable.map(row => (
                  <TableRow key={Math.random().toString()}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.text} <br /> {row.date}
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

export default AdvisoryList;
