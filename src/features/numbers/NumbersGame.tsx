import { useRef, useState } from 'react'
import {
  createMatchState,
  evaluateDrop,
  isMatchGameComplete,
  placeItem,
  type MatchItem,
  type MatchTarget,
} from '../../game-core/matchingGame'
import './NumbersGame.css'

const numberItems: readonly MatchItem[] = [
  { id: 'one', value: '1' },
  { id: 'two', value: '2' },
  { id: 'three', value: '3' },
]

const numberTargets: readonly MatchTarget[] = [
  { id: 'target-one', accepts: 'one' },
  { id: 'target-two', accepts: 'two' },
  { id: 'target-three', accepts: 'three' },
]

interface DragPosition {
  x: number
  y: number
}

function NumbersGame() {
  const [matchState, setMatchState] = useState(createMatchState)
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [dragPosition, setDragPosition] = useState<DragPosition | null>(null)
  const [returningId, setReturningId] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<'incorrect' | 'complete' | null>(null)
  const boardRef = useRef<HTMLDivElement>(null)
  const audioContextRef = useRef<AudioContext | null>(null)

  const playGentleError = () => {
    const AudioContextConstructor = window.AudioContext ||
      (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

    if (!AudioContextConstructor) {
      return
    }

    const context = audioContextRef.current ?? new AudioContextConstructor()
    audioContextRef.current = context
    const oscillator = context.createOscillator()
    const gain = context.createGain()
    const now = context.currentTime

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(220, now)
    oscillator.frequency.exponentialRampToValueAtTime(165, now + 0.16)
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.exponentialRampToValueAtTime(0.08, now + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2)
    oscillator.connect(gain)
    gain.connect(context.destination)
    oscillator.start(now)
    oscillator.stop(now + 0.21)
  }

  const getBoardPosition = (event: PointerEvent): DragPosition => {
    const board = boardRef.current?.getBoundingClientRect()
    return {
      x: event.clientX - (board?.left ?? 0),
      y: event.clientY - (board?.top ?? 0),
    }
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLButtonElement>, itemId: string) => {
    if (matchState.placedIds.includes(itemId)) {
      return
    }

    event.currentTarget.setPointerCapture(event.pointerId)
    setDraggingId(itemId)
    setDragPosition(getBoardPosition(event.nativeEvent))
    setFeedback(null)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (draggingId === null) {
      return
    }

    setDragPosition(getBoardPosition(event.nativeEvent))
  }

  const handlePointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (draggingId === null) {
      return
    }

    const targetElement = document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest<HTMLElement>('[data-target-id]')
    const targetId = targetElement?.dataset.targetId
    const target = numberTargets.find((candidate) => candidate.id === targetId)
    const item = numberItems.find((candidate) => candidate.id === draggingId)

    if (target && item && evaluateDrop(item, target, matchState) === 'correct') {
      const nextState = placeItem(matchState, item.id)
      setMatchState(nextState)
      setFeedback(isMatchGameComplete(nextState, numberItems) ? 'complete' : null)
    } else {
      playGentleError()
      setReturningId(item?.id ?? null)
      setFeedback('incorrect')
      window.setTimeout(() => setReturningId(null), 280)
    }

    setDraggingId(null)
    setDragPosition(null)
  }

  const resetGame = () => {
    setMatchState(createMatchState())
    setFeedback(null)
  }

  return (
    <div className="numbers-game">
      <div className="numbers-game__intro">
        <span className="numbers-game__eyebrow">מספרים</span>
        <h1 className="numbers-game__title">התאימו כל מספר</h1>
      </div>

      <div className="numbers-game__board" ref={boardRef}>
        <div className="numbers-game__targets" aria-label="יעדי המספרים">
          {numberTargets.map((target) => {
            const item = numberItems.find((candidate) => candidate.id === target.accepts)
            const isPlaced = item ? matchState.placedIds.includes(item.id) : false
            return (
              <div
                key={target.id}
                className={`number-target${isPlaced ? ' number-target--filled' : ''}`}
                data-target-id={target.id}
              >
                <span aria-hidden="true">{item?.value}</span>
              </div>
            )
          })}
        </div>

        <div className="numbers-game__pieces" aria-label="מספרים לגרירה">
          {numberItems.map((item) => {
            const isPlaced = matchState.placedIds.includes(item.id)
            const isDragging = draggingId === item.id
            const style = isDragging && dragPosition
              ? { left: dragPosition.x, top: dragPosition.y }
              : undefined

            return (
              <button
                key={item.id}
                type="button"
                className={`number-piece number-piece--${item.id}${isPlaced ? ' number-piece--placed' : ''}${isDragging ? ' number-piece--dragging' : ''}${returningId === item.id ? ' number-piece--returning' : ''}`}
                style={style}
                aria-label={`מספר ${item.value}`}
                onPointerDown={(event) => handlePointerDown(event, item.id)}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
              >
                {item.value}
              </button>
            )
          })}
        </div>
      </div>

      <div className="numbers-game__status" aria-live="polite">
        {feedback === 'complete' && (
          <>
            <span>כל הכבוד!</span>
            <button type="button" onClick={resetGame}>שוב</button>
          </>
        )}
        {feedback === 'incorrect' && <span>נסו שוב</span>}
      </div>
    </div>
  )
}

export default NumbersGame
