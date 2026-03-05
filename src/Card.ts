export type Suit = "H" | "D" | "C" | "S";

export interface Card {
  rank: number; // 2 - 14 (Ace = 14)
  suit: Suit;
}