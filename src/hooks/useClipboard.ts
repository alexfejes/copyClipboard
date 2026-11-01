// // FIX: reusable clipboard hook. Uncomment to get "Copied!" feedback.
// // Tip: select the whole file and press Ctrl+/. The notes stay comments.
// //
// // How it works:
// // 1. Custom hook: a function named "use..." that calls other hooks. The copy
// //    and feedback logic is written once, so any button in the app can reuse it.
// // 2. `copied` state: the one piece of state the broken button was missing.
// //    Changing it makes React re-render, which is where the visual feedback comes from.
// // 3. useEffect: when `copied` becomes true, start a timer that flips it back
// //    to false after `timeout` ms (2 seconds by default).
// // 4. Automatic cleanup: the function returned from the effect clears the timer.
// //    React calls it before the effect re-runs and when the component unmounts,
// //    so timers never stack up and nothing updates a component that's gone.
// // 5. `await` before setCopied(true): "Copied!" only shows after the copy
// //    actually succeeded, so the UI never claims a copy that didn't happen.
// // 6. Return { copied, copy }: just the state to render and the action to call.
//
// import { useEffect, useState } from 'react'
//
// export function useClipboard(timeout = 2000) {
//   const [copied, setCopied] = useState(false)
//
//   useEffect(() => {
//     if (!copied) return
//     const id = setTimeout(() => setCopied(false), timeout)
//     return () => clearTimeout(id)
//   }, [copied, timeout])
//
//   const copy = async (text: string) => {
//     await navigator.clipboard.writeText(text)
//     setCopied(true)
//   }
//
//   return { copied, copy }
// }
