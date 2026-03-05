import { describe, it, expect } from "vitest";
import { evaluate5 } from "../src/HandEvaluator";

describe("Hand evaluator", () => {

  it("detects high card", () => {

    const cards = [
      {rank:14,suit:"S"},
      {rank:10,suit:"H"},
      {rank:8,suit:"D"},
      {rank:6,suit:"C"},
      {rank:3,suit:"S"}
    ];

    const result = evaluate5(cards);

    expect(result.category).toBe(1);
  });

});

it("detects one pair", () => {

  const cards = [
    {rank:14,suit:"S"},
    {rank:14,suit:"H"},
    {rank:8,suit:"D"},
    {rank:6,suit:"C"},
    {rank:3,suit:"S"}
  ];

  const result = evaluate5(cards);

  expect(result.category).toBe(2);

});

it("detects ace-low straight", () => {

  const cards = [
    {rank:14,suit:"S"},
    {rank:5,suit:"H"},
    {rank:4,suit:"D"},
    {rank:3,suit:"C"},
    {rank:2,suit:"S"}
  ];

  const result = evaluate5(cards);

  expect(result.category).toBe(5);

});