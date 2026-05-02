import { useState } from 'react'

import './App.css'

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<number | string | null>(null);
  const [activeOp, setActiveOp] = useState<string | null>(null);

  const calc = (op: string) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    if (isNaN(num1) || isNaN(num2)) {
      setResult("Unesi validne brojeve");
      setActiveOp(null);
      return;
    }

    setActiveOp(op);

    switch (op) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "×":
        setResult(num1 * num2);
        break;
      case "÷":
        if (num2 === 0) {
          setResult("Dijeljenje s nulom!");
        } else {
          setResult(num1 / num2);
        }
        break;
    }
  };

  const reset = () => {
    setA("");
    setB("");
    setResult(null);
    setActiveOp(null);
  };

  const ops = ["+", "-", "×", "÷"];

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
          className={`op-btn ${activeOp === op ? "active" : ""}`}
          onClick={() => calc(op)}
        >
          {op}
        </button>
      ))}
    </div>

    <div className={`result ${result !== null ? "visible" : ""}`}>
      {typeof result === "number" && <>Rezultat: <strong>{parseFloat(result.toFixed(10))}</strong></>}
      {typeof result === "string" && <span className="error">{result}</span>}
    </div>

    <button className="reset-btn" onClick={reset}>↺ Reset</button>
  </div>
);

  
}

export default App
