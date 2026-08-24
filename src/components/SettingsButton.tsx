import './SettingsButton.css'

// Visual only for now — intentionally has no onClick, opens nothing yet.
function SettingsButton() {
  return (
    <button type="button" className="settings-button" aria-label="הגדרות">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <path
          fill="currentColor"
          d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9.4 4a7.4 7.4 0 0 0-.14-1.4l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.5 7.5 0 0 0-1.21-.7l-.36-2.54a.5.5 0 0 0-.5-.43h-3.84a.5.5 0 0 0-.5.43l-.36 2.54c-.43.18-.84.42-1.21.7l-2.39-.96a.5.5 0 0 0-.6.22L2.6 8.38a.5.5 0 0 0 .12.64L4.75 10.6A7.4 7.4 0 0 0 4.6 12c0 .48.05.94.14 1.4l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.37.28.78.52 1.21.7l.36 2.54c.05.25.26.43.5.43h3.84c.25 0 .45-.18.5-.43l.36-2.54c.43-.18.84-.42 1.21-.7l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64L21.26 13.4c.09-.46.14-.92.14-1.4Z"
        />
      </svg>
    </button>
  )
}

export default SettingsButton
