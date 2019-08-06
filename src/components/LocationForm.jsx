import React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const LocationForm = ({ setLocation }) => {
  const [selectedLocation, setSelectedLocation] = React.useState("");

  const onSubmit = e => {
    e.preventDefault();
    setLocation(selectedLocation);
  };

  const handleChange = e => {
    setSelectedLocation(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Your forecast</h1>
      <Grid alignItems="center" spacing={2} justify="center" container>
        <TextField
          label="Enter Location"
          value={selectedLocation}
          onChange={handleChange}
          margin="normal"
        />
        <Button type="submit" size="small" color="primary" variant="contained">
          Update
        </Button>
      </Grid>
    </form>
  );
};

export default LocationForm;
