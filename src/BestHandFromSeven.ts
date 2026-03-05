import { compareHands } from "./HandComparator"
import { evaluate5 } from "./HandEvaluator"

function combinations(cards: any[], k: number): any[][] {
  if (k === 0) return [[]];
  if (cards.length === 0) return [];

  const [first, ...rest] = cards;

  // Include the first card in the combination
  const withFirst = combinations(rest, k - 1).map(comb => [first, ...comb]);

  // Exclude the first card from the combination
  const withoutFirst = combinations(rest, k);

  return [...withFirst, ...withoutFirst];
}

export function bestHand(cards: any[]){

  const combos = combinations(cards,5)

  let best = null

  for(const c of combos){

    const result = evaluate5(c)

    if(!best || compareHands(result,best) > 0){
      best = result
    }

  }

  return best
}