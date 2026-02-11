import { cn } from '@/lib/utils';

export default function SoursopLogo({ className, mode = 'dark', showText = true, color }) {
    const hexColor = mode === 'dark' ? '#0F172A' : '#FFFFFF'; // Slate-900 or White
    const accentColor = color || '#10B981'; // User Brand Color or Emerald-500

    return (
        <div className={cn("flex items-center gap-3 select-none", className)}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
            >
                <path
                    d="M 54.33 7.5
                       L 84.67 25
                       Q 89 27.5 89 32.5
                       L 89 67.5
                       Q 89 72.5 84.67 75
                       L 54.33 92.5
                       Q 50 95 45.67 92.5
                       L 15.33 75
                       Q 11 72.5 11 67.5
                       L 11 32.5
                       Q 11 27.5 15.33 25
                       L 45.67 7.5
                       Q 50 5 54.33 7.5
                       Z"
                    stroke={accentColor}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />
                <circle cx="50" cy="50" r="8" fill={accentColor} />
            </svg>

            {showText && (
                <div className="flex items-start">
                    <span className="font-extrabold text-2xl tracking-tight leading-none" style={{ color: hexColor }}>
                        SOURSOP
                    </span>
                    <span
                        className="ml-1 text-[10px] font-bold uppercase tracking-widest border border-emerald-500/50 rounded px-1 py-0.5 leading-none"
                        style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.4)' }}
                    >
                        OS
                    </span>
                </div>
            )}
        </div>
    );
}
