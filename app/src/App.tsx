import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { planetsData, PlanetData } from './data/planets';
import { Sun } from './components/Sun';
import { Planet } from './components/Planet';
import { PlanetInfo } from './components/PlanetInfo';

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);

  const sunData = planetsData.find(p => p.id === 'sun')!;
  const orbitingPlanets = planetsData.filter(p => p.id !== 'sun');

  return (
    <div className="w-screen h-screen bg-slate-950 relative overflow-hidden font-sans">
      <div className="absolute top-6 left-6 z-10 pointer-events-none drop-shadow-xl select-none">
        <h1 className="text-3xl font-extrabold text-white tracking-wider flex items-center gap-3">
          WAKUSEI
          <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 text-xs font-bold tracking-[0.2em] border border-blue-500/30">SIMULATOR</span>
        </h1>
        <p className="text-slate-400 mt-2 text-sm max-w-[300px] leading-relaxed">
          ドラッグで視点移動、スクロールでズームできます。
          <br />天体をクリックすると詳細情報が表示されます。
        </p>
      </div>

      <Canvas camera={{ position: [0, 50, 70], fov: 45 }} shadows>
        <color attach="background" args={['#03050C']} />

        {/* 環境光（宇宙空間のわずかな光） - 惑星の暗黒面を十分に明るくする */}
        <ambientLight intensity={0.8} color="#eef2ff" />

        <Suspense fallback={null}>
          {/* 背景の星々 */}
          <Stars radius={150} depth={50} count={7000} factor={4} saturation={0} fade speed={0.5} />

          {/* 太陽 */}
          <Sun data={sunData} onClick={setSelectedPlanet} />

          {/* 各惑星 */}
          {orbitingPlanets.map(planet => (
            <Planet key={planet.id} data={planet} onClick={setSelectedPlanet} />
          ))}
        </Suspense>

        <OrbitControls
          makeDefault
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxDistance={200}
          minDistance={5}
        />
      </Canvas>

      {/* 惑星情報UIオーバーレイ */}
      <PlanetInfo data={selectedPlanet} onClose={() => setSelectedPlanet(null)} />
    </div>
  );
}

export default App;
