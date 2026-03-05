import { HandResult } from "./HandEvaluator";

export function compareHands(hand1: HandResult, hand2: HandResult): number {
  if (hand1.category !== hand2.category) {
    return hand1.category - hand2.category;
  }
  for (let i = 0; i < hand1.rankingValues.length; i++) {
    if (hand1.rankingValues[i] !== hand2.rankingValues[i]) {
      return hand1.rankingValues[i] - hand2.rankingValues[i];
    }
  }
  return 0;
}