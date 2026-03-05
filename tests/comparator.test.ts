import { compareHands } from "../src/HandComparator";
import { describe,it,expect } from "vitest";

describe("Hand comparison", () => {

  it("four of a kind beats full house", () => {

    const h1 = { rankingValues:[8,7] } as any;
    const h2 = { rankingValues:[7,14] } as any;

    const result = compareHands(h1,h2);

    expect(result).toBe(1);

  });

});