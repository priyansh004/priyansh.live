"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 5

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Stars
    const starGeometry = new THREE.BufferGeometry()
    const starCount = 1500

    const positions = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 100
      positions[i3 + 1] = (Math.random() - 0.5) * 100
      positions[i3 + 2] = (Math.random() - 0.5) * 100

      sizes[i] = Math.random() * 2
    }

    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    starGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1))

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      sizeAttenuation: true,
      size: 0.1,
    })

    const stars = new THREE.Points(starGeometry, starMaterial)
    scene.add(stars)

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      stars.rotation.x += 0.0001
      stars.rotation.y += 0.0001

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }

      scene.remove(stars)
      starGeometry.dispose()
      starMaterial.dispose()
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
}
