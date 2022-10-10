import React from 'react'
import { Sphere, MeshDistortMaterial, PointMaterial } from '@react-three/drei'

export default function AnimatedSphere() {
    return (
        <Sphere visible args={[1,100, 200]} scale={1.8}>
            <MeshDistortMaterial color="#8352FD" attach="material" distort={0.6} speed={1.5}/>
        </Sphere>);
}