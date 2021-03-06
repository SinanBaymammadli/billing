import React, { Component } from "react";

import Paper from "material-ui/Paper";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";

import "./App.css";

class App extends Component {
  state = {
    chickenCount: 1000,
    chickenPrice: 2,
    eggCount: 10000,
    eggPrice: 0.2,
    eggError: 20,
    chickPrice: 1,
    result: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submit = () => {
    const {
      chickenCount,
      eggCount,
      eggError,
      eggPrice,
      chickenPrice,
      chickPrice
    } = this.state;

    const expans = chickenCount * chickenPrice + eggCount * eggPrice;
    const income = chickPrice * (eggCount - eggError);

    this.setState({
      result: income - expans
    });
  };

  render() {
    const { result } = this.state;
    let bg = "white";

    if (result > 0) {
      bg = "green";
    } else {
      bg = "red";
    }

    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography type="title" color="inherit">
              İstehsalat İdarə Sistemi
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className="paper" elevation={4}>
          <div>
            <FormControl className="form-control">
              <InputLabel htmlFor="chickenCount">Toyuq sayı</InputLabel>
              <Input
                id="chickenCount"
                type="number"
                value={this.state.chickenCount}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">Dənə</InputAdornment>
                }
              />
            </FormControl>

            <FormControl className="form-control">
              <InputLabel htmlFor="chickenPrice">Toyuq qiyməti</InputLabel>
              <Input
                id="chickenPrice"
                type="number"
                value={this.state.chickenPrice}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">AZN</InputAdornment>
                }
              />
            </FormControl>
          </div>
          <div>
            <FormControl className="form-control">
              <InputLabel htmlFor="eggCount">Yumurta sayı</InputLabel>
              <Input
                id="eggCount"
                type="number"
                value={this.state.eggCount}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">Dənə</InputAdornment>
                }
              />
            </FormControl>

            <FormControl className="form-control">
              <InputLabel htmlFor="eggPrice">Yumurta qiyməti</InputLabel>
              <Input
                id="eggPrice"
                type="number"
                value={this.state.eggPrice}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">AZN</InputAdornment>
                }
              />
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth className="form-control">
              <InputLabel htmlFor="eggError">Yararsız yumurta sayı</InputLabel>
              <Input
                id="eggError"
                type="number"
                value={this.state.eggError}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">Dənə</InputAdornment>
                }
              />
            </FormControl>
          </div>

          <div>
            <FormControl fullWidth className="form-control">
              <InputLabel htmlFor="chickPrice">Cücə qiyməti</InputLabel>
              <Input
                id="chickPrice"
                type="number"
                value={this.state.chickPrice}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">AZN</InputAdornment>
                }
              />
            </FormControl>
          </div>

          <Button raised color="primary" onClick={this.submit}>
            Hesabla
          </Button>
        </Paper>

        <Paper className={`paper ${bg}`} elevation={4}>
          <Typography
            className="white"
            type="headline"
            align="center"
            gutterBottom
          >
            Nəticə:
            <span> {this.state.result} AZN</span>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default App;
