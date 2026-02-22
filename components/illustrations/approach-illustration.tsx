"use client"

import { motion } from "framer-motion"
import { Search, Settings, Database, Mail, Lock, CheckCircle } from "lucide-react"

const nodes = [
    { id: 1, icon: Search, label: "Onderzoek", color: "text-blue-500" },
    { id: 2, icon: Settings, label: "Voorbereiding", color: "text-slate-500" },
    { id: 3, icon: Database, label: "Migratie", color: "text-indigo-500" },
    { id: 4, icon: Mail, label: "Switch", color: "text-primary" },
    { id: 5, icon: Lock, label: "Afronding", color: "text-emerald-500" },
]

export function ApproachIllustration() {
    return (
        <div className="relative w-full aspect-[2/1] bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden flex items-center justify-center p-4 md:p-8">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

            {/* Path Container */}
            <div className="relative w-full h-full flex items-center justify-between">

                {/* The Winding Path SVG */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none">
                    <motion.path
                        d="M 50,150 C 150,150 150,50 250,50 S 350,150 450,150 S 550,50 550,150"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeOpacity="0.1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 50,150 C 150,150 150,50 250,50 S 350,150 450,150 S 550,50 550,150"
                        fill="none"
                        stroke="url(#path-gradient)"
                        strokeWidth="3"
                        strokeDasharray="12 18"
                        className="text-blue-500"
                        animate={{ strokeDashoffset: [0, -30] }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "linear"
                        }}
                    />
                    <defs>
                        <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Nodes */}
                {nodes.map((node, index) => (
                    <motion.div
                        key={node.id}
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                        className="relative z-10 flex flex-col items-center gap-3"
                        style={{
                            marginTop: index % 2 === 0 ? "80px" : "-80px"
                        }}
                    >
                        <div className="group relative">
                            {/* Node Card */}
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-2xl duration-300">
                                <node.icon className={`w-8 h-8 md:w-10 md:h-10 ${node.color}`} />

                                {/* Completion Checkmark (Subtle) */}
                                <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1 border-2 border-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                            </div>

                            {/* Step Number */}
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-slate-900 text-white rounded-full text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm">
                                {node.id}
                            </div>
                        </div>

                        <div className="text-center">
                            <span className="text-[10px] md:text-sm font-bold text-slate-900 whitespace-nowrap uppercase tracking-tighter">
                                {node.label}
                            </span>
                        </div>
                    </motion.div>
                ))}

            </div>
        </div>
    )
}
