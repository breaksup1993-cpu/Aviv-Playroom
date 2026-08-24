import './BackButton.css'

// Visual only for now — not shown on the home screen. Intended for future
// screens that need in-app navigation back to the home screen.
function BackButton() {
  return (
    <button type="button" className="back-button" aria-label="חזרה">
      <img src="/assets/images/home/back.webp" alt="" />
    </button>
  )
}

export default BackButton
