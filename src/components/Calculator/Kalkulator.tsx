import { useState } from "react";
import "./Kalkulator.css";
import { calculate } from "./kalkulatorLogika";
import type { Operation, RezultatKalkulacije } from "../../types/Kalkulator";


const ops: Operation[] = ["+", "−", "×", "÷"];


function Kalkulator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [rezultat, setRezultat] = useState<RezultatKalkulacije>({ vrijednost: null, operacija: null });

  const calc = (op: Operation) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
      setRezultat({ vrijednost: "Unesi validne brojeve", operacija: null });
      return;
    }

    setRezultat({ vrijednost: calculate(num1, num2, op), operacija: op });
  };

  const reset = () => {
    setA("");
    setB("");
    setRezultat({ vrijednost: null, operacija: null });
  };

    return (
  <div className="calculator">
    <h1 className="title">Kalkulator</h1>

    <div className="inputs">
      <input
        type="number"
        placeholder="Broj A"
        value={a}
        onChange={e => setA(e.target.value)}
      />
      
      
      <input
        type="number"
        placeholder="Broj B"
        value={b}
        onChange={e => setB(e.target.value)}
      />
    </div>

    <div className="ops">
      {ops.map(op => (
        <button
          key={op}
          className={`op-btn ${rezultat.operacija === op ? "active" : ""}`}
          onClick={() => calc(op)}
        >
          {op}
        </button>
      ))}
    </div>

    <div className={`result ${rezultat.vrijednost !== null ? "visible" : ""}`}>
      {typeof rezultat.vrijednost === "number" && <>Rezultat: <strong>{parseFloat(rezultat.vrijednost.toFixed(10))}</strong></>}
      {typeof rezultat.vrijednost === "string" && <span className="error">{rezultat.vrijednost}</span>}
    </div>

    <button className="reset-btn" onClick={reset}>Reset</button>
  </div>
);
}

export default Kalkulator;