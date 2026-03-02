import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PlanetData } from '../data/planets';

interface PlanetProps {
    data: PlanetData;
    onClick: (data: PlanetData) => void;
}

export function Planet({ data, onClick }: PlanetProps) {
    const planetRef = useRef<THREE.Mesh>(null);
    const orbitRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (orbitRef.current) {
            orbitRef.current.rotation.y += data.orbitSpeed;
        }
        if (planetRef.current) {
            planetRef.current.rotation.y += data.rotationSpeed;
        }
    });

    return (
        <group ref={orbitRef}>
            {/* 軌道の描画 */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[data.distance - 0.05, data.distance + 0.05, 128]} />
                <meshBasicMaterial color="#ffffff" transparent opacity={0.15} side={THREE.DoubleSide} />
            </mesh>

            {/* 惑星本体 */}
            <mesh
                ref={planetRef}
                position={[data.distance, 0, 0]}
                castShadow
                receiveShadow
                onClick={(e) => {
                    e.stopPropagation();
                    onClick(data);
                }}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = 'pointer';
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    document.body.style.cursor = 'auto';
                }}
            >
                <sphereGeometry args={[data.radius, 32, 32]} />
                <meshStandardMaterial color={data.color} roughness={0.6} metalness={0.2} />
            </mesh>
        </group>
    );
}
