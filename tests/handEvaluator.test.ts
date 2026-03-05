import { describe, it, expect } from "vitest";
import { evaluate5 } from "../src/HandEvaluator";
import { HandCategory } from "../src/HandCategory";
import { Card } from "../src/Card";

describe("Hand evaluator", () => {

  it("detects high card", () => {

    const cards = [
      {rank:14,suit:"S"},
      {rank:11,suit:"H"},
      {rank:9,suit:"D"},
      {rank:6,suit:"C"},
      {rank:3,suit:"S"}
    ] as Card[];

    const result = evaluate5(cards);

    expect(result.category).toBe(HandCategory.HIGH_CARD);
  });

  it("detects one pair", () => {

    const cards = [
      {rank:14,suit:"S"},
      {rank:14,suit:"H"},
      {rank:9,suit:"D"},
      {rank:6,suit:"C"},
      {rank:3,suit:"S"}
    ] as Card[];

    const result = evaluate5(cards);

    expect(result.category).toBe(HandCategory.ONE_PAIR);
  });

  it("detects two pair", () => {

    const cards = [
      {rank:14,suit:"S"},
      {rank:14,suit:"H"},
      {rank:9,suit:"D"},
      {rank:9,suit:"C"},
      {rank:3,suit:"S"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.TWO_PAIR);
  });

  it("detects three of kind", () => {

    const cards = [
      {rank:10,suit:"S"},
      {rank:10,suit:"H"},
      {rank:10,suit:"D"},
      {rank:6,suit:"C"},
      {rank:3,suit:"S"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.THREE_OF_A_KIND);
  });

  it("detects straight", () => {

    const cards = [
      {rank:9,suit:"S"},
      {rank:8,suit:"H"},
      {rank:7,suit:"D"},
      {rank:6,suit:"C"},
      {rank:5,suit:"S"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.STRAIGHT);
  });

  it("detects ace low straight", () => {

    const cards = [
      {rank:14,suit:"S"},
      {rank:5,suit:"H"},
      {rank:4,suit:"D"},
      {rank:3,suit:"C"},
      {rank:2,suit:"S"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.STRAIGHT);
  });

  it("detects flush", () => {

    const cards = [
      {rank:14,suit:"H"},
      {rank:11,suit:"H"},
      {rank:9,suit:"H"},
      {rank:6,suit:"H"},
      {rank:3,suit:"H"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.FLUSH);
  });

  it("detects full house", () => {

    const cards = [
      {rank:10,suit:"S"},
      {rank:10,suit:"H"},
      {rank:10,suit:"D"},
      {rank:6,suit:"C"},
      {rank:6,suit:"S"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.FULL_HOUSE);
  });

  it("detects four of kind", () => {

    const cards = [
      {rank:7,suit:"S"},
      {rank:7,suit:"H"},
      {rank:7,suit:"D"},
      {rank:7,suit:"C"},
      {rank:3,suit:"S"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.FOUR_OF_A_KIND);
  });

  it("detects straight flush", () => {

    const cards = [
      {rank:9,suit:"H"},
      {rank:8,suit:"H"},
      {rank:7,suit:"H"},
      {rank:6,suit:"H"},
      {rank:5,suit:"H"}
    ] as Card[];

    expect(evaluate5(cards).category)
      .toBe(HandCategory.STRAIGHT_FLUSH);
  });

});