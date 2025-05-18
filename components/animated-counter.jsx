"use client"
import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

export default function AnimatedCounter({ from = 0, to, duration = 2000, className = "" }) {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime
      let animationFrameId

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        setCount(Math.floor(progress * (to - from) + from))

        if (progress < 1) {
          animationFrameId = window.requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrameId = window.requestAnimationFrame(step)

      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [from, to, duration, isInView, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}
