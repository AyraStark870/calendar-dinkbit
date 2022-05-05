import React, { useEffect, useState } from "react";
import { meses } from "../helpers/monthAndDays";
export const CaledarRight = ({
  diaElegido,
  setDiaElegido,
  setMesElegido,
  mesElegido,
  anioElegido,
  setAnioElegido,
}) => {
  const date = new Date();
  date.setMonth(mesElegido);
  date.setFullYear(anioElegido);

  const handleSetDiaElegido = (index) => {
    setDiaElegido(index + 1);
  };
  useEffect(() => {
    localStorage.setItem("diaElegido", JSON.stringify(diaElegido));
  }, [diaElegido]);
  useEffect(() => {
    localStorage.setItem("mesElegido", JSON.stringify(mesElegido));
  }, [mesElegido]);
  useEffect(() => {
    localStorage.setItem("anioElegido", JSON.stringify(anioElegido));
  }, [anioElegido]);

  date.setDate(1);
  const indicePrimerDia = date.getDay();

  const ultimoDiaMesEnCurso = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const ultimoDiaMesAnterior = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const handleMesProximo = () => {
    if (mesElegido === 11) {
      setAnioElegido((anioElegido) => anioElegido + 1);
      setMesElegido(0);
      return;
    }
    setMesElegido((mesElegido) => mesElegido + 1);
  };
  const handleMesAnterior = () => {
    if (mesElegido === 0) {
      setAnioElegido((anioElegido) => anioElegido - 1);
      setMesElegido(11);
      return;
    }
    setMesElegido((mesElegido) => mesElegido - 1);
  };
  return (
    <div className="calendar">
      <div>
        <div className="date">
          <h1>{date.getFullYear()}</h1>
          <div className="month">
            <i
              onClick={handleMesAnterior}
              className="fas fa-angle-left prev"
            ></i>
            <p>{meses[date.getMonth()].toUpperCase()}</p>
            <i
              onClick={handleMesProximo}
              className="fas fa-angle-right next"
            ></i>
          </div>
        </div>
      </div>
      <div className="weekdays">
        <div>Dom</div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mie</div>
        <div>Jue</div>
        <div>Vie</div>
        <div>Sab</div>
      </div>
      <div className="days-container">
        <div className="days">
          {[...Array(indicePrimerDia)].map((x, index) => {
            return (
              <div className="prev-date" key={index}>
                {ultimoDiaMesAnterior -
                  ([...Array(indicePrimerDia)].length - index) +
                  1}
              </div>
            );
          })}
          {[...Array(ultimoDiaMesEnCurso)].map((x, index) => {
            return (
              <div
                className={index + 1 === diaElegido ? "select-day" : ""}
                onClick={() => handleSetDiaElegido(index)}
                key={index}
              >
                {index + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
