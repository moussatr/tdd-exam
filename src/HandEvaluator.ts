import { Card } from "./Card";
import { HandCategory } from "./HandCategory";

export interface HandResult {
  category: HandCategory;
  chosen5: Card[];
  rankingValues: number[];
}