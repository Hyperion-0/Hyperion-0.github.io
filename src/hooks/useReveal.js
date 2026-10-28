import { useEffect, useRef, useState } from 'react'

/**
 * 滚动渐入 hook：元素进入视口后给根元素加 .is-revealed
 * 用法：const ref = useReveal(); <div ref={ref} className="reveal">
 */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          io.disconnect()
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, revealed]
}
