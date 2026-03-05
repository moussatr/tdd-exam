import { Card } from "./Card";
import { HandCategory } from "./HandCategory";

export interface HandResult {
  category: HandCategory;
  chosen5: Card[];
  rankingValues: number[];
}

export function evaluate5(cards: Card[]): HandResult {

  // Placeholder implementation, should be replaced with actual logic
  return {
    category: HandCategory.HIGH_CARD,
    chosen5: cards,
    rankingValues: cards.map(c => c.rank).sort((a, b) => b - a)
  };
}