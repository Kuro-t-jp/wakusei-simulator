import { PlanetData } from '../data/planets';
import { X } from 'lucide-react';

interface PlanetInfoProps {
    data: PlanetData | null;
    onClose: () => void;
}

export function PlanetInfo({ data, onClose }: PlanetInfoProps) {
    if (!data) return null;

    return (
        <div className="absolute top-6 right-6 w-80 bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 text-slate-100 shadow-2xl transition-all select-none z-20">
            <button
                onClick={onClose}
                className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-700 p-1 rounded-full"
            >
                <X size={18} />
            </button>

            <div className="pr-6">
                <h2 className="text-2xl font-bold mb-1 flex items-baseline gap-2">
                    {data.name}
                    <span className="text-sm font-medium text-slate-400">{data.nameEn}</span>
                </h2>
            </div>

            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-5 mt-2"></div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {data.description}
            </p>

            <div className="space-y-4">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">主な特徴</h3>
                <ul className="space-y-3">
                    {data.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                            <span className="text-slate-200">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
