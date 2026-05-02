import type { Operation } from "../../types/Kalkulator";

export const calculate = (a: number, b: number, op: Operation): number | string => {
    switch(op) {
        case "+": return a + b;
        case "−": return a - b;
        case "×": return a * b;
        case "÷": return b === 0 ? "Dijeljenje s nulom!" : a / b;
        default: return 0;
    }
};