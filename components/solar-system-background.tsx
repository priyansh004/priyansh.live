"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

export function SolarSystemBackground() {
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

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
    directionalLight.position.set(1, 1, 1)
    scene.add(directionalLight)

    // Stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 40000

    const positions = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)
    const colors = new Float32Array(starCount * 3)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 200
      positions[i3 + 1] = (Math.random() - 0.5) * 200
      positions[i3 + 2] = (Math.random() - 0.5) * 200

      sizes[i] = Math.random() * 2

      // White stars with occasional blue tint
      colors[i3] = 0.8 + Math.random() * 0.2 // R
      colors[i3 + 1] = 0.8 + Math.random() * 0.2 // G
      colors[i3 + 2] = 0.8 + Math.random() * 0.2 // B

      // Make some stars blue
      if (Math.random() > 0.8) {
        colors[i3] = 0.5 + Math.random() * 0.3 // Less red
        colors[i3 + 1] = 0.7 + Math.random() * 0.3 // Some green
        colors[i3 + 2] = 0.9 + Math.random() * 0.1 // More blue
      }
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

    // Sun (center)
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32)
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffcc33,
    })
    const sun = new THREE.Mesh(sunGeometry, sunMaterial)
    scene.add(sun)

    // Sunlight
    const sunLight = new THREE.PointLight(0xffcc33, 1.5, 100)
    sunLight.position.set(0, 0, 0)
    scene.add(sunLight)

    // Planet textures and materials
    const createPlanet = (radius: number, color: number, distance: number, speed: number, tilt = 0) => {
      const planetGeometry = new THREE.SphereGeometry(radius, 32, 32)
      const planetMaterial = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.2,
        roughness: 0.8,
      })

      const planet = new THREE.Mesh(planetGeometry, planetMaterial)
      planet.rotation.x = tilt

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
        color: 0xffffff,
        transparent: true,
        opacity: 0.1,
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
      createPlanet(0.4, 0x999999, 5, 0.8), // Mercury
      createPlanet(0.6, 0xe39e1c, 8, 0.6), // Venus
      createPlanet(0.7, 0x3498db, 12, 0.4, 0.1), // Earth (blue)
      createPlanet(0.5, 0xc0392b, 16, 0.3), // Mars
      createPlanet(1.2, 0xf39c12, 22, 0.2), // Jupiter
      createPlanet(1.0, 0xf1c40f, 28, 0.15, 0.2), // Saturn
      createPlanet(0.8, 0x3498db, 34, 0.1), // Uranus (blue)
      createPlanet(0.8, 0x2980b9, 40, 0.08), // Neptune (blue)
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

      // Rotate sun
      sun.rotation.y += 0.001

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
      sunGeometry.dispose()
      sunMaterial.dispose()

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
      scene.remove(sun)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 bg-gradient-to-b from-[#030014] via-[#0A0A2A] to-[#030014]" />
}
