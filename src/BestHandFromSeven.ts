import { compareHands } from "./HandComparator"
import { evaluate5 } from "./HandEvaluator"

function combinations(cards:any[], k:number){

}

export function bestHand(cards:any[]){

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