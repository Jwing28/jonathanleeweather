import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";

import { dateToDay } from "../utils/utils";

const ForecastCard = ({ day }) => {
  const currentDay = dateToDay(day.applicable_date);

  return (
    <Card style={{ padding: "5px" }}>
      <CardHeader title={currentDay} />
      <CardContent>
        <img
          src={`https://www.metaweather.com/static/img/weather/png/64/${
            day.weather_state_abbr
          }.png`}
          alt="weather image"
        />
        <h2>{day.weather_state_name}</h2>
        <h4>High</h4>
        <div>{Math.round(day.max_temp)} °C</div>
        <h4>Low</h4>
        <div>{Math.round(day.min_temp)} °C</div>
        <h4>Humidity</h4>
        <div>{Math.round(day.humidity)} %</div>
        <h4>Visibility</h4>
        <div>{Math.round(day.visibility)} Miles</div>
        <h4>Pressure</h4>
        <div>{Math.round(day.air_pressure)} mb</div>
      </CardContent>
    </Card>
  );
};

export default ForecastCard;
