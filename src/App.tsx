import './App.css'
// FIX (1/3): import the hook
// import { useClipboard } from './hooks/useClipboard'

const API_KEY = 'demo-key-not-real-0000-1111-2222'

export default function App() {
  // FIX (2/3): use the hook
  // const { copied, copy } = useClipboard()

  return (
    <main className="card">
      <h2>API Settings</h2>
      <p className="muted">Use this secret key to authenticate your requests.</p>

      <label>Secret key</label>
      <div className="row">
        <code>{API_KEY}</code>

        {/* BUG: copies silently — no visual feedback, user is left guessing */}
        <button onClick={() => navigator.clipboard.writeText(API_KEY)}>Copy</button>

        {/* FIX (3/3): delete the button above and uncomment this one
        <button className={copied ? 'copied' : ''} onClick={() => copy(API_KEY)}>
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
        */}
      </div>

      <label>Paste here to test</label>
      <input placeholder="Command+V to verify the key was copied…" />
    </main>
  )
}
