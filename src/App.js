import { useState } from "react";
import { CaledarRight } from "./components/CaledarRight";
import { CalendarLeft } from "./components/CalendarLeft";

function App() {
  const [fechaElegida, setFechaElegida] = useState({
    diaElegido: JSON.parse(localStorage.getItem("diaElegido")) || 3,
    mesElegido: JSON.parse(localStorage.getItem("mesElegido")) || 5,
    anioElegido: JSON.parse(localStorage.getItem("anioElegido")) || 2021,
  });

  return (
    <div className="container">
      <CalendarLeft fechaElegida={fechaElegida} />
      <CaledarRight
        fechaElegida={fechaElegida}
        setFechaElegida={setFechaElegida}
      />
    </div>
  );
}

export default App;
