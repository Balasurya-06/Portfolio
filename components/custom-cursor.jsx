"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseDown = () => setCursorVariant("click")
    const handleMouseUp = () => setCursorVariant("default")
    const handleMouseEnter = () => document.body.classList.add("cursor-visible")
    const handleMouseLeave = () => document.body.classList.remove("cursor-visible")

    // Add hover effect for links and buttons
    const handleLinkHover = () => setCursorVariant("hover")
    const handleLinkLeave = () => setCursorVariant("default")

    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const addHoverListeners = () => {
      const links = document.querySelectorAll("a, button, .hover-target")
      links.forEach((link) => {
        link.addEventListener("mouseenter", handleLinkHover)
        link.addEventListener("mouseleave", handleLinkLeave)
      })
    }

    // Initial setup
    addHoverListeners()

    // Setup mutation observer to detect new elements
    const observer = new MutationObserver(() => {
      addHoverListeners()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => {
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)

      const links = document.querySelectorAll("a, button, .hover-target")
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover)
        link.removeEventListener("mouseleave", handleLinkLeave)
      })

      observer.disconnect()
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "transparent",
      border: "1px solid white",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "white",
      border: "1px solid white",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "white",
      border: "1px solid white",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  const cursorDotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      opacity: 0,
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
    click: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 0.5,
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
  }

  return (
    <>
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{ mixBlendMode: "difference" }}
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{ mixBlendMode: "difference" }}
        variants={cursorDotVariants}
        animate={cursorVariant}
      />
    </>
  )
}
