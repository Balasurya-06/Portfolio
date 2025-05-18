"use client"
import { useEffect, useRef } from "react"

export default function DynamicBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId
    let particles = []
    let hue = 0

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 150,
      lastX: 0,
      lastY: 0,
    }

    window.addEventListener("mousemove", (event) => {
      mouse.lastX = mouse.x
      mouse.lastY = mouse.y
      mouse.x = event.x
      mouse.y = event.y

      // Create particles on mouse move
      const speed = Math.abs(mouse.x - mouse.lastX) + Math.abs(mouse.y - mouse.lastY)
      if (speed > 5) {
        for (let i = 0; i < 3; i++) {
          particles.push(new Particle())
        }
      }
    })

    // Particle class
    class Particle {
      constructor() {
        this.x = mouse.x || Math.random() * canvas.width
        this.y = mouse.y || Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        this.color = `hsl(${hue}, 100%, 50%)`
        this.life = 100
        this.opacity = 1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1
        this.life -= 1
        this.opacity = this.life / 100
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }
    }

    // Create initial particles
    const init = () => {
      particles = []
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update hue for color cycling
      hue += 0.5
      if (hue > 360) hue = 0

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()

        // Remove dead particles
        if (particles[i].life <= 0 || particles[i].size <= 0.2) {
          particles.splice(i, 1)
          i--
        }
      }

      // Add new particles occasionally
      if (particles.length < 100 && Math.random() > 0.95) {
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle())
        }
      }

      // Draw connections between particles
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    // Connect particles with lines
    const connectParticles = () => {
      const maxDistance = 150

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.5 * particles[a].opacity * particles[b].opacity
            ctx.strokeStyle = `hsla(${hue}, 100%, 50%, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    init()
    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("mousemove", () => {})
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full bg-black z-0" />
}
