import './SettingsButton.css'

// Visual only for now — intentionally has no onClick, opens nothing yet.
function SettingsButton() {
  return (
    <button type="button" className="settings-button" aria-label="הגדרות">
      <img src="/assets/images/home/settings.png" alt="" />
    </button>
  )
}

export default SettingsButton
