import React from "react";
import { meses, dias } from "../helpers/monthAndDays";

export const CalendarLeft = ({ fechaElegida }) => {
  const { diaElegido, mesElegido, anioElegido } = fechaElegida;
  const fecha = new Date();

  fecha.setDate(diaElegido);
  fecha.setMonth(mesElegido);
  fecha.setFullYear(anioElegido);

  return (
    <div className="calendar-left">
      <h1 className="select-day-left">{diaElegido}</h1>
      <p>{`${dias[fecha.getDay()]} - ${
        meses[fecha.getMonth()]
      } - ${fecha.getFullYear()}`}</p>
    </div>
  );
};
