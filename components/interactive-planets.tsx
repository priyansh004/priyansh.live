"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export function InteractivePlanets() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 30

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0x4169e1, 2)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 2000

    const positions = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)
    const colors = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 200
      positions[i3 + 1] = (Math.random() - 0.5) * 200
      positions[i3 + 2] = (Math.random() - 0.5) * 200

      sizes[i] = Math.random() * 2

      // Blue-cyan color palette for stars
      colors[i3] = 0.5 + Math.random() * 0.5 // More blue
      colors[i3 + 1] = 0.7 + Math.random() * 0.3 // Some green
      colors[i3 + 2] = 0.9 + Math.random() * 0.1 // Lots of blue
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    starGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))
    starGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))

    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Create planets
    const planets: THREE.Mesh[] = []
    const planetOrbits: THREE.Line[] = []

    // Planet textures and materials
    const createPlanet = (radius: number, color: number, distance: number, speed: number) => {
      const planetGeometry = new THREE.SphereGeometry(radius, 32, 32)
      const planetMaterial = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.3,
        roughness: 0.7,
      })

      const planet = new THREE.Mesh(planetGeometry, planetMaterial)

      // Create orbit
      const orbitGeometry = new THREE.BufferGeometry()
      const orbitPoints = []
      const segments = 100

      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2
        orbitPoints.push(Math.cos(theta) * distance, 0, Math.sin(theta) * distance)
      }

      orbitGeometry.setAttribute("position", new THREE.Float32BufferAttribute(orbitPoints, 3))

      const orbitMaterial = new THREE.LineBasicMaterial({
        color: 0x4169e1,
        transparent: true,
        opacity: 0.3,
      })

      const orbit = new THREE.Line(orbitGeometry, orbitMaterial)
      scene.add(orbit)

      // Set initial position
      planet.position.x = distance

      // Add to arrays
      planets.push(planet)
      planetOrbits.push(orbit)

      // Add to scene
      scene.add(planet)

      return { planet, speed, distance }
    }

    // Create several planets with different properties
    const planetData = [
      createPlanet(1.2, 0x3498db, 15, 0.5), // Blue planet
      createPlanet(0.8, 0x1abc9c, 22, 0.3), // Teal planet
      createPlanet(2.0, 0x2980b9, 30, 0.2), // Dark blue planet
      createPlanet(0.6, 0x00ffff, 10, 0.7), // Cyan planet
      createPlanet(1.5, 0x34495e, 38, 0.15), // Navy planet
    ]

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.001

      // Rotate stars slightly based on mouse position
      stars.rotation.x += 0.0001
      stars.rotation.y += 0.0001
      stars.rotation.x += mousePosition.y * 0.0001
      stars.rotation.y += mousePosition.x * 0.0001

      // Animate planets
      planetData.forEach(({ planet, speed, distance }) => {
        const angle = time * speed
        planet.position.x = Math.cos(angle) * distance
        planet.position.z = Math.sin(angle) * distance
        planet.rotation.y += 0.01
      })

      // Move camera slightly based on mouse position
      camera.position.x = mousePosition.x * 2
      camera.position.y = mousePosition.y * 2
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      // Dispose geometries and materials
      starGeometry.dispose()
      starMaterial.dispose()

      planets.forEach((planet) => {
        planet.geometry.dispose()
        ;(planet.material as THREE.Material).dispose()
        scene.remove(planet)
      })

      planetOrbits.forEach((orbit) => {
        orbit.geometry.dispose()
        ;(orbit.material as THREE.Material).dispose()
        scene.remove(orbit)
      })

      scene.remove(stars)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 bg-gradient-to-b from-[#050A18] via-[#0A1A40] to-[#050A18]" />
}
