import React from "react";
import Grid from "@material-ui/core/Grid";

import Forecast from "./containers/Forecast";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Grid alignItems="center" justify="center" container>
        <Forecast />
      </Grid>
    </div>
  );
}

export default App;
