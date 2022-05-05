import { useState } from "react";
import { CaledarRight } from "./components/CaledarRight";
import { CalendarLeft } from "./components/CalendarLeft";

function App() {
  const [diaElegido, setDiaElegido] = useState(
    JSON.parse(localStorage.getItem("diaElegido")) || 3
  );
  const [mesElegido, setMesElegido] = useState(
    JSON.parse(localStorage.getItem("mesElegido")) || 5
  );
  const [anioElegido, setAnioElegido] = useState(
    JSON.parse(localStorage.getItem("anioElegido")) || 2021
  );

  return (
    <div className="container">
      <CalendarLeft
        diaElegido={diaElegido}
        mesElegido={mesElegido}
        anioElegido={anioElegido}
      />
      <CaledarRight
        diaElegido={diaElegido}
        setDiaElegido={setDiaElegido}
        mesElegido={mesElegido}
        setMesElegido={setMesElegido}
        anioElegido={anioElegido}
        setAnioElegido={setAnioElegido}
      />
    </div>
  );
}

export default App;
