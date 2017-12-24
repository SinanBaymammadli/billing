import React, { Component } from "react";

import Paper from "material-ui/Paper";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

import "./App.css";

class App extends Component {
  state = {
    chickenCount: 1000,
    chickenPrice: 2,
    eggCount: 1000,
    eggPrice: 0.2,
    eggError: 20,
    result: 0
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  submit = () => {
    const { chickenCount, chickenPrice } = this.state;

    const price = chickenCount * chickenPrice;

    this.setState({
      result: price
    });
  };

  render() {
    return (
      <div className="App">
        <Paper className="paper" elevation={4}>
          <div>
            <FormControl className="form-control">
              <InputLabel htmlFor="chickenCount">Toyuq sayi</InputLabel>
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
              <InputLabel htmlFor="chickenPrice">Toyuq qiymeti</InputLabel>
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
              <InputLabel htmlFor="eggCount">Yumurta sayi</InputLabel>
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
              <InputLabel htmlFor="eggPrice">Yumurta qiymeti</InputLabel>
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
              <InputLabel htmlFor="eggError">Yumurta qiriq</InputLabel>
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

          <Button raised color="primary" onClick={this.submit}>
            Hesabla
          </Button>
        </Paper>

        <Paper className="paper" elevation={4}>
          <Typography type="headline" align="center" gutterBottom>
            Result:
            <span> {this.state.result}</span>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default App;
