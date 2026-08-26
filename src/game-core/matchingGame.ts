export interface MatchItem {
  id: string
  value: string
}

export interface MatchTarget {
  id: string
  accepts: string
}

export interface MatchState {
  placedIds: string[]
}

export type DropResult = 'correct' | 'incorrect'

export function createMatchState(): MatchState {
  return { placedIds: [] }
}

export function evaluateDrop(
  item: MatchItem,
  target: MatchTarget,
  state: MatchState,
): DropResult {
  if (state.placedIds.includes(item.id)) {
    return 'correct'
  }

  return item.id === target.accepts ? 'correct' : 'incorrect'
}

export function placeItem(state: MatchState, itemId: string): MatchState {
  if (state.placedIds.includes(itemId)) {
    return state
  }

  return { placedIds: [...state.placedIds, itemId] }
}

export function isMatchGameComplete(
  state: MatchState,
  items: readonly MatchItem[],
): boolean {
  return items.every((item) => state.placedIds.includes(item.id))
}
