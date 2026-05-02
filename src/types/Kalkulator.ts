export type Operation = "+" | "−" | "×" | "÷";

export interface RezultatKalkulacije {
  vrijednost: number | string | null;
  operacija: Operation | null;
}