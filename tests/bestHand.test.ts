import { bestHand } from "../src/BestHandFromSeven";
import { describe,it,expect } from "vitest";

describe("Best hand from 7 cards", () => {

  it("selects best 5 cards", () => {

    const cards = [
      {rank:14,suit:"S"},
      {rank:14,suit:"H"},
      {rank:14,suit:"D"},
      {rank:14,suit:"C"},
      {rank:2,suit:"S"},
      {rank:3,suit:"H"},
      {rank:4,suit:"D"}
    ];

    const result = bestHand(cards);

    expect(result).not.toBeNull();

    expect(result?.category).toBe(8);

  });

});