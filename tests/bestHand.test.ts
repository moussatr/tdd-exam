import { bestHand } from "../src/BestHandFromSeven";
import { HandCategory } from "../src/HandCategory";
import { describe,it,expect } from "vitest";

describe("Best hand from 7 cards", () => {

  it("finds the best 5-card hand using board and hole cards (Example A - Wheel)", () => {
    const board = [
      { rank: 14, suit: "S" }, { rank: 2, suit: "H" },
      { rank: 3, suit: "D" }, { rank: 4, suit: "C" }, { rank: 9, suit: "S" }
    ];
    const player = [{ rank: 5, suit: "C" }, { rank: 13, suit: "H" }];
    
    const result = bestHand([...board, ...player]);
    
    expect(result).not.toBeNull();
    expect(result!.category).toBe(HandCategory.STRAIGHT);
    expect(result!.rankingValues).toEqual([5]);
  });

});