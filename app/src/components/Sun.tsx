import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PlanetData } from '../data/planets';

interface SunProps {
    data: PlanetData;
    onClick: (data: PlanetData) => void;
}

export function Sun({ data, onClick }: SunProps) {
    const sunRef = useRef<THREE.Mesh>(null);

    useFrame(() => {
        if (sunRef.current) {
            sunRef.current.rotation.y += data.rotationSpeed;
        }
    });

    return (
        <mesh
            ref={sunRef}
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
            <sphereGeometry args={[data.radius, 64, 64]} />
            {/* 太陽は自ら発光するためBasicMaterialを使用し、光源としてPointLightを配置 */}
            <meshBasicMaterial color={data.color} />

            {/* 太陽の光（他の惑星を照らす: 明るくして影を表現） */}
            <pointLight intensity={15} distance={1000} decay={1.0} color="#ffffff" castShadow shadow-mapSize={[2048, 2048]} shadow-camera-far={600} shadow-camera-near={0.1} shadow-bias={-0.001} />
            <pointLight intensity={5} distance={150} decay={1.5} color={data.color} />
        </mesh>
    );
}
