import { useState } from 'react'

import './App.css'

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calc = (op: string) => {
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);

    switch (op) {
      case "+":
        setResult(num1 + num2);
        break;
      case "-":
        setResult(num1 - num2);
        break;
      case "*":
        setResult(num1 * num2);
        break;
      case "/":
        setResult(num1 / num2);
        break;
    }
  };

  return (
    <div>
      <input value={a} onChange={e => setA(e.target.value)} />
      <input value={b} onChange={e => setB(e.target.value)} />

      <button onClick={() => calc("+")}>+</button>
      <button onClick={() => calc("-")}>-</button>
      <button onClick={() => calc("*")}>*</button>
      <button onClick={() => calc("/")}>/</button>

      <h2>Rezultat: {result}</h2>
    </div>
  );
}

export default App
