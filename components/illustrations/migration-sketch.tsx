export function MigrationSketch() {
    return (
        <div className="relative w-full aspect-[2/1] bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex items-center justify-center p-8">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="relative w-full max-w-2xl flex items-center justify-between gap-4">

                {/* Google Workspace Side */}
                <div className="flex flex-col items-center gap-4 group">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-2xl shadow-md border border-slate-100 transition-transform group-hover:scale-105 duration-500">
                        <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16" xmlns="http://www.w3.org/2000/svg">
                            {/* Google G with realistic colors */}
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-slate-500 tracking-wide uppercase">Google Workspace</span>
                </div>

                {/* Transfer Animation Path */}
                <div className="flex-1 relative h-24 flex items-center">
                    {/* Animated Connection Line */}
                    <svg className="w-full h-full absolute inset-0 overflow-visible" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4285F4" />
                                <stop offset="100%" stopColor="#6D4AFF" />
                            </linearGradient>
                        </defs>
                        <path d="M 0,50 Q 50,0 100,50 T 200,50"
                            fill="none"
                            stroke="url(#flow-gradient)"
                            strokeWidth="2"
                            strokeDasharray="8 12"
                            className="animate-[dash_10s_linear_infinite]"
                            style={{ height: '100%', width: '100%' }}
                            vectorEffect="non-scaling-stroke"
                        />
                    </svg>

                    {/* Animated Packets - Staggered */}
                    {/* 1. Email */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-lg border border-slate-100 flex items-center justify-center animate-[move_4s_easeInOut_infinite]">
                        <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>

                    {/* 2. Calendar */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-lg border border-slate-100 flex items-center justify-center animate-[move_4s_easeInOut_infinite_1.3s]">
                        <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>

                    {/* 3. Files */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-lg border border-slate-100 flex items-center justify-center animate-[move_4s_easeInOut_infinite_2.6s]">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                </div>

                {/* Proton Business Side */}
                <div className="flex flex-col items-center gap-4 group">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-[#6D4AFF] rounded-2xl shadow-[0_10px_40px_-10px_rgba(109,74,255,0.4)] transition-all group-hover:scale-105 duration-500">
                        <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16" xmlns="http://www.w3.org/2000/svg">
                            {/* Proton Logo with realistic shape */}
                            <path d="M2.474 17.75V24h4.401v-5.979c0-.582.232-1.14.645-1.551a2.204 2.204 0 0 1 1.556-.643h4.513a7.955 7.955 0 0 0 5.612-2.318 7.907 7.907 0 0 0 2.325-5.595 7.91 7.91 0 0 0-2.325-5.596A7.958 7.958 0 0 0 13.587 0H2.474v7.812h4.401V4.129h6.416c.995 0 1.951.394 2.656 1.097.704.7 1.1 1.653 1.101 2.646a3.742 3.742 0 0 1-1.101 2.648 3.766 3.766 0 0 1-2.656 1.097H8.627a6.158 6.158 0 0 0-4.352 1.795 6.133 6.133 0 0 0-1.801 4.338Z" fill="white" />
                        </svg>
                        {/* Security Glow */}
                        <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xs md:text-sm font-medium text-slate-500 tracking-wide uppercase">Proton Business</span>
                </div>

            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes move {
          0% { left: 0%; transform: translate(0, -50%) scale(0.8); opacity: 0; }
          20% { opacity: 1; transform: translate(0, -50%) scale(1); }
          80% { opacity: 1; transform: translate(0, -50%) scale(1); }
          100% { left: 85%; transform: translate(0, -50%) scale(0.8); opacity: 0; }
        }
      `}} />
        </div>
    )
}
