import { compareHands } from "../src/HandComparator";
import { describe,it,expect } from "vitest";

describe("Hand comparison", () => {

  it("four of a kind beats full house", () => {

    const h1 = { rankingValues:[8,7] } as any;
    const h2 = { rankingValues:[7,14] } as any;

    const result = compareHands(h1,h2);

    expect(result).toBe(1);

  });

  it("breaks a tie on two pair using the kicker", () => {
    const h1 = { category: 3, rankingValues: [10, 8, 14] } as any; 
    const h2 = { category: 3, rankingValues: [10, 8, 5] } as any;  
    
    expect(compareHands(h1, h2)).toBeGreaterThan(0);
  });

  it("returns 0 for a perfect tie (split pot)", () => {
    const h1 = { category: 6, rankingValues: [14, 11, 9, 6, 3] } as any; 
    const h2 = { category: 6, rankingValues: [14, 11, 9, 6, 3] } as any; 
    
    expect(compareHands(h1, h2)).toBe(0);
  });

});