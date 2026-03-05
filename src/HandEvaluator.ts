import { Card } from "./Card";
import { HandCategory } from "./HandCategory";

export interface HandResult {
  category: HandCategory;
  chosen5: Card[];
  rankingValues: number[];
}

function sortDesc(cards: Card[]): Card[] {
  return [...cards].sort((a, b) => b.rank - a.rank);
}

function countRanks(cards: Card[]): Map<number, number> {
  const map = new Map<number, number>();

  for (const c of cards) {
    map.set(c.rank, (map.get(c.rank) || 0) + 1);
  }

  return map;
}

function isFlush(cards: Card[]): boolean {
  return cards.every((c) => c.suit === cards[0].suit);
}

function detectStraight(cards: Card[]): number | null {
  const ranks = [...new Set(cards.map((c) => c.rank))].sort((a, b) => b - a);

  if (ranks.length !== 5) return null;

  if (ranks[0] - ranks[4] === 4) {
    return ranks[0];
  }

  // Ace low straight (A,2,3,4,5)
  if (JSON.stringify(ranks) === JSON.stringify([14, 5, 4, 3, 2])) {
    return 5;
  }

  return null;
}

export function evaluate5(cards: Card[]): HandResult {
  const sorted = sortDesc(cards);

  const counts = countRanks(sorted);

  const rankGroups = [...counts.entries()].sort(
    (a, b) => b[1] - a[1] || b[0] - a[0]
  );

  const flush = isFlush(sorted);

  const straightHigh = detectStraight(sorted);

  if (straightHigh && flush) {
    return {
      category: HandCategory.STRAIGHT_FLUSH,
      chosen5: sorted,
      rankingValues: [straightHigh],
    };
  }

  if (rankGroups[0][1] === 4) {
    const quad = rankGroups[0][0];
    const kicker = rankGroups[1][0];

    return {
      category: HandCategory.FOUR_OF_A_KIND,
      chosen5: sorted,
      rankingValues: [quad, kicker],
    };
  }

  if (rankGroups[0][1] === 3 && rankGroups[1][1] === 2) {
    return {
      category: HandCategory.FULL_HOUSE,
      chosen5: sorted,
      rankingValues: [rankGroups[0][0], rankGroups[1][0]],
    };
  }

  if (flush) {
    return {
      category: HandCategory.FLUSH,
      chosen5: sorted,
      rankingValues: sorted.map((c) => c.rank),
    };
  }

  if (straightHigh) {
    return {
      category: HandCategory.STRAIGHT,
      chosen5: sorted,
      rankingValues: [straightHigh],
    };
  }

  if (rankGroups[0][1] === 3) {
    const kickers = rankGroups.slice(1).map((x) => x[0]);

    return {
      category: HandCategory.THREE_OF_A_KIND,
      chosen5: sorted,
      rankingValues: [rankGroups[0][0], ...kickers],
    };
  }

  if (rankGroups[0][1] === 2 && rankGroups[1][1] === 2) {
    const highPair = Math.max(rankGroups[0][0], rankGroups[1][0]);
    const lowPair = Math.min(rankGroups[0][0], rankGroups[1][0]);
    const kicker = rankGroups[2][0];

    return {
      category: HandCategory.TWO_PAIR,
      chosen5: sorted,
      rankingValues: [highPair, lowPair, kicker],
    };
  }

  if (rankGroups[0][1] === 2) {
    const pair = rankGroups[0][0];
    const kickers = rankGroups.slice(1).map((x) => x[0]);

    return {
      category: HandCategory.ONE_PAIR,
      chosen5: sorted,
      rankingValues: [pair, ...kickers],
    };
  }

  return {
    category: HandCategory.HIGH_CARD,
    chosen5: sorted,
    rankingValues: sorted.map((c) => c.rank),
  };
}