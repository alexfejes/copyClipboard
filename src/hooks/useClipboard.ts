// FIX: reusable clipboard hook — uncomment to enable "Copied!" feedback.
//
// import { useEffect, useState } from 'react'
//
// export function useClipboard(timeout = 2000) {
//   const [copied, setCopied] = useState(false)
//
//   // Auto-revert after `timeout`; cleanup clears the timer on re-run or unmount.
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
