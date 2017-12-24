import React, { Component } from "react";

import Paper from "material-ui/Paper";
import Input, { InputLabel, InputAdornment } from "material-ui/Input";
import { FormControl } from "material-ui/Form";

import "./App.css";

class App extends Component {
  state = {
    chickenCount: "",
    chickenPrice: "",
    eggCount: "",
    eggPrice: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Paper className="paper" elevation={2}>
          <div>
            <FormControl className="form-control">
              <InputLabel htmlFor="chickenCount">Toyuq sayi</InputLabel>
              <Input
                id="chickenCount"
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
                value={this.state.eggPrice}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment position="end">AZN</InputAdornment>
                }
              />
            </FormControl>
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
