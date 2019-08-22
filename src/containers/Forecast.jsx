import React, { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import ForecastCard from "../components/ForecastCard";
import LocationForm from "../components/LocationForm";

const Forecast = () => {
  const [selectedLocation, setSelectedLocation] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [forecast, setForecast] = React.useState(undefined);
  const [error, setError] = React.useState("");

  useEffect(() => {
    if (selectedLocation.length) {
      (async () => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const locationUrl = `https://www.metaweather.com/api/location/search/?query=${selectedLocation.replace(
          " ",
          "+"
        )}`;

        try {
          const locationResponse = await fetch(proxyurl + locationUrl);
          const locationJSON = await locationResponse.json();
          const { woeid } = locationJSON[0];

          const forecastUrl = `https://www.metaweather.com/api/location/${woeid}/`;
          const forecastResponse = await fetch(proxyurl + forecastUrl);
          const forecastJSON = await forecastResponse.json();

          const { title } = forecastJSON;

          setLocation(title);
          setForecast(forecastJSON.consolidated_weather);
        } catch (e) {
          setError("Location unavailable. Please try again.");
        }
      })();
    }
  }, [selectedLocation]);

  return (
    <>
      {forecast && location ? (
        <Card>
          <CardHeader
            style={{
              color: "blue"
            }}
            title={`${location}: 5 day forecast`}
          />
          <Grid justify="space-around" spacing={0} container>
            {forecast.slice(0, forecast.length - 1).map(day => (
              <ForecastCard day={day} key={day.visibility} />
            ))}
          </Grid>
        </Card>
      ) : (
        <div>
          <LocationForm setLocation={setSelectedLocation} />
          {!!error && <span>{error}</span>}
        </div>
      )}
    </>
  );
};

export default Forecast;
