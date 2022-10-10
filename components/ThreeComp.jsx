import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Sphere from './AnimatedSphere'

const ThreeComp = () => {
  return (
    <Canvas className='canvas'>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
            <Sphere />
        </Suspense>
    </Canvas>
  )
}

export default ThreeComp