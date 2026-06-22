// --- Sub-component: DarkGenomeSandbox ---
export function DarkGenomeSandbox({ isDark }: { isDark: boolean }) {
    const [activeStage, setActiveStage] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [hoveredNode, setHoveredNode] = useState<number | null>(null);

    const stages = [
        { id: "01", name: "Intro", label: "Intro - Capsule Appears", desc: "Scene fades in from darkness. Particle field forms. Capsule materializes in the center with a soft glow.", durationText: "1.2s", easingText: "easeOutCubic" },
        { id: "02", name: "Protein-Coding", label: "Connect: Protein-Coding", desc: "Top-left node activates. Dotted line draws from capsule top to the node. Node icon and text fade in with gold glow.", durationText: "1.4s", easingText: "easeInOutCubic" },
        { id: "03", name: "Class I Dark DNA", label: "Connect: Class I Dark DNA", desc: "Mid-left node activates. Dotted line draws from capsule middle-left. Amber glow pulses along the line.", durationText: "1.4s", easingText: "easeInOutCubic" },
        { id: "04", name: "Class II Dark RNA", label: "Connect: Class II Dark RNA", desc: "Bottom-left node activates. Dotted line draws from capsule lower section. Indigo glow pulses along the line.", durationText: "1.4s", easingText: "easeInOutCubic" },
        { id: "05", name: "Currently Mined", label: "Connect: Currently Mined", desc: "Top-right node activates. Dotted line draws from capsule top-right. Copper glow travels to the node.", durationText: "1.4s", easingText: "easeInOutCubic" },
        { id: "06", name: "Class I Potential", label: "Connect: Class I Potential", desc: "Mid-right node activates. Amber line extends to the ~40% potential card. Band pulses.", durationText: "1.4s", easingText: "easeInOutCubic" },
        { id: "07", name: "Class II Potential", label: "Connect: Class II Potential", desc: "Bottom-right node activates. Indigo line extends to the ~56% potential card. All 6 nodes now lit.", durationText: "1.4s", easingText: "easeInOutCubic" },
        { id: "08", name: "All Active", label: "All Connections Active", desc: "All six nodes are connected. Lines pulse once. Capsule rotation slows and settles in the center.", durationText: "1.2s", easingText: "easeOutCubic" },
        { id: "09", name: "Rotation", label: "Capsule Rotation Highlight", desc: "Capsule rotates 360°. Bands emit sequential glow from top to bottom and back.", durationText: "1.2s", easingText: "linear" },
        { id: "10", name: "Loop & Idle", label: "Loop & Idle State", desc: "Subtle ambient loop. Capsule continues slow rotation. Connections breathe softly. Particles drift.", durationText: "6.0s", easingText: "easeInOutSine" },
    ];

    const stageDurations = [3000, 3500, 3500, 3500, 3500, 3500, 3500, 2500, 2500, 8000];

    useEffect(() => {
        if (!isPlaying) return;
        const timer = setTimeout(() => {
            setActiveStage((prev) => (prev + 1) % 10);
        }, stageDurations[activeStage] || 3500);
        return () => clearTimeout(timer);
    }, [isPlaying, activeStage]);

    const [typedDesc, setTypedDesc] = useState("");
    useEffect(() => {
        let index = 0;
        const fullText = stages[activeStage].desc;
        setTypedDesc("");
        const interval = setInterval(() => {
            setTypedDesc((prev) => prev + fullText.charAt(index));
            index++;
            if (index >= fullText.length) clearInterval(interval);
        }, 15);
        return () => clearInterval(interval);
    }, [activeStage]);

    // Nodes 1-3 on left, 4-6 on right
    const isNodeActive = (nodeIndex: number) => {
        if (activeStage >= 7) return true;
        if (nodeIndex === 1) return activeStage >= 1;
        if (nodeIndex === 2) return activeStage >= 2;
        if (nodeIndex === 3) return activeStage >= 3;
        if (nodeIndex === 4) return activeStage >= 4;
        if (nodeIndex === 5) return activeStage >= 5;
        if (nodeIndex === 6) return activeStage >= 6;
        return false;
    };

    const getCapsuleRotationClass = () => {
        if (activeStage === 0) return "capsule-scroller-intro";
        if (activeStage >= 1 && activeStage <= 6) return "capsule-scroller-standard";
        if (activeStage === 7) return "capsule-scroller-slow";
        if (activeStage === 8) return "capsule-scroller-highlight";
        return "capsule-scroller-idle";
    };

    const bgParticles = useMemo(() => {
        return Array.from({ length: 25 }).map((_, i) => ({
            cx: Math.random() * 800,
            cy: Math.random() * 340,
            r: Math.random() * 2 + 0.6,
            delay: Math.random() * 5,
            duration: Math.random() * 6 + 4,
            color: ["#cca54a", "#f59e0b", "#3f4c8c", "#3e6b5c", "#faf6f0"][Math.floor(Math.random() * 5)],
        }));
    }, []);

    const capsuleBodyColor = isDark ? "#121316" : "#e4e2da";
    const capsuleLineColor = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
    const capsuleLineColorStrong = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";

    type ColorClass = { activeBorder: string; activeBg: string; activeText: string };

    const colorGold: ColorClass = { activeBorder: "border-[#cca54a]/60 dark:border-[#cca54a]/50 shadow-[0_0_15px_rgba(204,165,74,0.06)]", activeBg: "bg-[#cca54a]/5 dark:bg-[#cca54a]/3", activeText: "text-[#cca54a]" };
    const colorAmber: ColorClass = { activeBorder: "border-amber-500/60 dark:border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.06)]", activeBg: "bg-amber-500/5 dark:bg-amber-500/3", activeText: "text-amber-600 dark:text-amber-400" };
    const colorIndigo: ColorClass = { activeBorder: "border-[#3f4c8c]/60 dark:border-[#3f4c8c]/50 shadow-[0_0_15px_rgba(63,76,140,0.06)]", activeBg: "bg-[#3f4c8c]/5 dark:bg-[#3f4c8c]/3", activeText: "text-[#3f4c8c] dark:text-[#5c6bb0]" };
    const colorCopper: ColorClass = { activeBorder: "border-[#3e6b5c]/60 dark:border-[#3e6b5c]/50 shadow-[0_0_15px_rgba(62,107,92,0.06)]", activeBg: "bg-[#3e6b5c]/5 dark:bg-[#3e6b5c]/3", activeText: "text-[#3e6b5c] dark:text-[#5fa38d]" };

    const renderCard = (
        badgeNum: number,
        title: string,
        subtitle: string,
        icon: React.ReactNode,
        colorClass: ColorClass,
        isActive: boolean
    ) => {
        const isHovered = hoveredNode === badgeNum;
        return (
            <div
                onClick={() => { setActiveStage(badgeNum <= 3 ? badgeNum : badgeNum); setIsPlaying(false); }}
                onMouseEnter={() => setHoveredNode(badgeNum)}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-3 md:p-4 rounded-2xl border text-left transition-all duration-500 cursor-pointer ${isActive
                    ? `${colorClass.activeBorder} ${colorClass.activeBg} ${isHovered ? "scale-[1.04] border-opacity-100" : "scale-[1.02]"}`
                    : `${isDark ? "border-zinc-800/50 bg-[#0d0e12]/20 text-zinc-500" : "border-slate-200 bg-slate-50/30 text-slate-400"} hover:scale-[1.01]`
                    }`}
            >
                <div className="flex items-center gap-3">
                    <div className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all ${isActive ? colorClass.activeBorder : "border-border-subtle"} ${isHovered ? "scale-110" : ""}`}>
                        {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className={`text-[10px] md:text-xs font-mono tracking-wider uppercase font-bold truncate transition-colors ${isActive ? colorClass.activeText : "text-text-secondary"}`}>
                            {title}
                        </h4>
                        <p className="text-[9px] md:text-[10px] text-text-secondary/70 font-mono mt-0.5 truncate">{subtitle}</p>
                    </div>
                    <span className={`h-5 w-5 rounded-full text-[9px] font-mono font-bold flex items-center justify-center border transition-all ${isActive ? `${colorClass.activeBorder} ${colorClass.activeText}` : "border-border-subtle text-zinc-500"} ${isHovered ? "scale-110" : ""}`}>
                        {badgeNum}
                    </span>
                </div>
            </div>
        );
    };

    const renderBadgeOnPath = (cx: number, cy: number, num: number, isActive: boolean, activeColor: string) => {
        const isHovered = hoveredNode === num;
        const radius = isHovered ? 13 : (isActive ? 10 : 8.5);
        return (
            <g>
                <circle cx={cx} cy={cy} r={radius} fill={isActive ? activeColor : (isDark ? "#121316" : "#faf6f0")} stroke={isActive ? activeColor : (isDark ? "#27272a" : "#cbd5e1")} strokeWidth={isHovered ? 2.5 : 1.5} className="transition-all duration-300 ease-out" style={{ filter: isHovered ? "url(#glow-filter)" : "none" }} />
                <text x={cx} y={cy + 3} textAnchor="middle" fontSize={isHovered ? "10" : "9"} fontWeight="bold" fontFamily="monospace" fill={isActive ? (isDark ? "#0a0b0d" : "#ffffff") : (isDark ? "#71717a" : "#64748b")} className="transition-all duration-300">{num}</text>
            </g>
        );
    };

    // Shared connection path renderer — keeps DRY
    const renderConn = (d: string, stroke: string, nodeIdx: number) => (
        <>
            <path d={d} stroke={isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            <path
                d={d}
                stroke={stroke}
                strokeWidth={hoveredNode === nodeIdx || hoveredNode === 99 ? 3.5 : 2}
                strokeDasharray="300"
                strokeDashoffset={isNodeActive(nodeIdx) ? 0 : 300}
                className={`transition-all ${activeStage === 7 ? "line-pulse-once" : ""} ${activeStage === 9 && isNodeActive(nodeIdx) && hoveredNode === null ? "connection-breathe" : ""}`}
                style={{ transition: "stroke-dashoffset 1400ms cubic-bezier(0.645,0.045,0.355,1)", filter: hoveredNode === nodeIdx || hoveredNode === 99 ? "url(#glow-filter)" : "none" }}
                fill="none"
            />
            {isNodeActive(nodeIdx) && (
                <path d={d} stroke={stroke} strokeWidth="2.5" strokeDasharray="6 24" className="animate-flow-particles" fill="none"
                    opacity={activeStage === 9 || hoveredNode === nodeIdx || hoveredNode === 99 ? 0.95 : 0} />
            )}
        </>
    );


    return (
        <div className={`w-full border rounded-3xl p-5 md:p-8 flex flex-col items-center relative overflow-hidden transition-all duration-300 ${isDark ? "bg-obsidian/45 border-zinc-850 shadow-2xl shadow-black/40" : "bg-white/70 border-slate-200/90 shadow-xl shadow-slate-100/50"
            }`}>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes rotateCapsule { 0% { transform: translateX(0); } 100% { transform: translateX(-100px); } }
        .capsule-scroller-intro { animation: rotateCapsule 10s linear infinite; }
        .capsule-scroller-standard { animation: rotateCapsule 22s linear infinite; }
        .capsule-scroller-slow { animation: rotateCapsule 45s linear infinite; }
        .capsule-scroller-highlight { animation: rotateCapsule 1.2s linear 1; }
        .capsule-scroller-idle { animation: rotateCapsule 30s linear infinite; }
        @keyframes pulseGlow { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.65; } }
        .active-band-glow { animation: pulseGlow 2s ease-in-out infinite; }
        @keyframes bandSeqGlow { 0% { opacity: 0.15; filter: none; } 25% { opacity: 0.95; filter: url(#glow-filter); } 50% { opacity: 0.15; filter: none; } 100% { opacity: 0.15; filter: none; } }
        .band-seq-glow-gold { animation: bandSeqGlow 1.2s cubic-bezier(0.645,0.045,0.355,1) 1; }
        .band-seq-glow-amber { animation: bandSeqGlow 1.2s cubic-bezier(0.645,0.045,0.355,1) 1; animation-delay: 0.25s; }
        .band-seq-glow-indigo { animation: bandSeqGlow 1.2s cubic-bezier(0.645,0.045,0.355,1) 1; animation-delay: 0.5s; }
        @keyframes flowConnection { 0% { stroke-dashoffset: 300; } 100% { stroke-dashoffset: 0; } }
        .animate-flow-particles { animation: flowConnection 4s linear infinite; }
        @keyframes floatParticle { 0%, 100% { transform: translateY(0) translateX(0); opacity: 0.05; } 50% { transform: translateY(-15px) translateX(8px); opacity: 0.3; } }
        .bg-particle-animate { animation: floatParticle 8s ease-in-out infinite; }
        @keyframes particlesIntensifyAnim { 0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; } 50% { transform: translateY(-25px) scale(1.4); opacity: 0.8; } }
        .particles-intensify { animation: particlesIntensifyAnim 4s ease-in-out infinite; }
        @keyframes scanline { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .scanline-effect::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to bottom, transparent, rgba(250,250,250,0.06), transparent); animation: scanline 3s linear infinite; pointer-events: none; z-index: 5; }
        @keyframes connectionBreathing { 0%, 100% { opacity: 0.75; stroke-width: 2px; } 50% { opacity: 1; stroke-width: 2.75px; } }
        .connection-breathe { animation: connectionBreathing 3.5s cubic-bezier(0.445,0.05,0.55,0.95) infinite; }
        @keyframes linePulse { 0% { stroke-width: 2px; opacity: 0.65; } 50% { stroke-width: 4px; opacity: 1; filter: url(#glow-filter); } 100% { stroke-width: 2px; opacity: 0.65; } }
        .line-pulse-once { animation: linePulse 1.2s cubic-bezier(0.215,0.610,0.355,1) 1; }
        .capsule-intro { animation: capsuleFadeIn 1.2s cubic-bezier(0.215,0.610,0.355,1) forwards; }
        @keyframes capsuleFadeIn { 0% { opacity: 0; transform: scale(0.85); filter: blur(4px); } 100% { opacity: 1; transform: scale(1); filter: blur(0); } }
        @keyframes fillProgress { 0% { width: 0%; } 100% { width: 100%; } }
      ` }} />

            {/* Background particles */}
            <div className={`absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] ${activeStage === 8 ? "opacity-75" : "opacity-40"}`}>
                <svg className="w-full h-full" fill="none">
                    {bgParticles.map((p, i) => (
                        <circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.color}
                            className={activeStage === 8 ? "particles-intensify" : "bg-particle-animate"}
                            style={{ animationDelay: `${p.delay}s`, animationDuration: `${activeStage === 8 ? p.duration / 2 : p.duration}s` }} />
                    ))}
                </svg>
            </div>

            {/* Header */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center border-b border-border-subtle/30 pb-6 mb-8 gap-4 z-10">
                <div>
                    <h2 className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-amber-500">Dark Genome – Interactive Sequence</h2>
                    <h3 className="font-serif-display text-2xl font-medium tracking-tight text-text-primary mt-1">Complete Animation Flow</h3>
                </div>
                <div className="flex flex-col md:items-end gap-2 max-w-md">
                    <p className="text-[11px] text-text-secondary leading-relaxed md:text-right">
                        A continuous, smooth, story-driven animation that connects all nodes one by one with capsule rotation, particle fields, glow pulses and elegant transitions.
                    </p>
                    <button onClick={() => setIsPlaying(!isPlaying)}
                        className={`px-3 py-1.5 rounded-full text-[9px] font-mono uppercase font-bold border transition-all flex items-center gap-1.5 self-start md:self-auto ${isDark ? "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300" : "border-slate-200 bg-slate-100/50 hover:bg-slate-200/50 text-slate-600"}`}>
                        {isPlaying ? (<><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />Autoplay ON</>) : (<><span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />Autoplay OFF</>)}
                    </button>
                </div>
            </div>


            {/* ═══ DESKTOP: 3 left cards + SVG capsule + 3 right cards ═══ */}
            <div className="hidden md:flex items-center justify-between w-full max-w-5xl h-[400px] relative z-10 gap-3">

                {/* LEFT column — 3 nodes */}
                <div className="w-[200px] flex flex-col justify-around h-full py-4">
                    {renderCard(1, "Protein-Coding", "1–2% of genome", <Brain className="h-4 w-4" />, colorGold, isNodeActive(1))}
                    {renderCard(2, "Class I Dark DNA", "Non-expressing DNA", <Sparkles className="h-4 w-4" />, colorAmber, isNodeActive(2))}
                    {renderCard(3, "Class II Dark RNA", "Non-translating RNA", <Activity className="h-4 w-4" />, colorIndigo, isNodeActive(3))}
                </div>

                {/* CENTER SVG — capsule + 6 connection lines */}
                <div className="flex-1 h-[400px] flex justify-center items-center">
                    <svg viewBox="0 0 260 400" className="w-full h-full select-none pointer-events-none overflow-visible" style={{ maxWidth: 260 }}>
                        <defs>
                            <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="4" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            {/* Capsule clip — two pill segments + waist circle */}
                            <clipPath id="capsule-clip-path">
                                <rect x="105" y="30" width="50" height="135" rx="25" ry="25" />
                                <rect x="105" y="235" width="50" height="135" rx="25" ry="25" />
                                <circle cx="130" cy="220" r="12" />
                            </clipPath>
                            <linearGradient id="capsule-shading" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor={isDark ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.18)"} />
                                <stop offset="18%" stopColor={isDark ? "rgba(255,255,255,0.32)" : "rgba(255,255,255,0.65)"} />
                                <stop offset="45%" stopColor={isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0)"} />
                                <stop offset="82%" stopColor={isDark ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)"} />
                                <stop offset="92%" stopColor={isDark ? "rgba(0,0,0,0.38)" : "rgba(0,0,0,0.02)"} />
                                <stop offset="100%" stopColor={isDark ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.22)"} />
                            </linearGradient>
                        </defs>

                        {/* ── 6 connection lines: left side exits at x=0, right at x=260 ── */}
                        {/* 1 Protein-Coding (gold) → left top y=67 */}
                        {renderConn("M 108 55 C 78 42, 42 67, 0 67", "#cca54a", 1)}
                        {/* 2 Class I Dark DNA (amber) → left mid y=200 */}
                        {renderConn("M 106 140 C 68 140, 38 200, 0 200", "#f59e0b", 2)}
                        {/* 3 Class II Dark RNA (indigo) → left bottom y=333 */}
                        {renderConn("M 108 290 C 72 300, 40 333, 0 333", "#3f4c8c", 3)}
                        {/* 4 Currently Mined (copper) → right top y=67 */}
                        {renderConn("M 152 55 C 182 42, 218 67, 260 67", "#3e6b5c", 4)}
                        {/* 5 Class I Potential ~40% (amber) → right mid y=200 */}
                        {renderConn("M 154 140 C 192 140, 222 200, 260 200", "#f59e0b", 5)}
                        {/* 6 Class II Potential ~56% (indigo) → right bottom y=333 */}
                        {renderConn("M 152 290 C 188 300, 220 333, 260 333", "#3f4c8c", 6)}

                        {/* ── Chromosome capsule (clipped rotating bands) ── */}
                        <g clipPath="url(#capsule-clip-path)" className={activeStage === 0 ? "capsule-intro" : ""}>
                            <g className={getCapsuleRotationClass()}>
                                {[0, 100].map((offset) => (
                                    <g key={offset} transform={`translate(${offset}, 0)`}>
                                        <rect x="0" y="0" width="100" height="400" fill={capsuleBodyColor} />
                                        <rect x="14" y="0" width="3.5" height="400" fill={capsuleLineColor} />
                                        <rect x="44" y="0" width="6" height="400" fill={capsuleLineColorStrong} />
                                        <rect x="74" y="0" width="4.5" height="400" fill={capsuleLineColor} />
                                        {/* Gold band y=45 */}
                                        <rect x="0" y="45" width="100" height="22" fill="#cca54a" />
                                        <rect x="14" y="45" width="8" height="22" fill={isDark ? "#8c6f27" : "#faf6f0"} />
                                        <rect x="44" y="45" width="12" height="22" fill={isDark ? "#634e19" : "#eeddcc"} />
                                        <rect x="74" y="45" width="8" height="22" fill={isDark ? "#8c6f27" : "#faf6f0"} />
                                        {/* Amber band y=120 */}
                                        <rect x="0" y="120" width="100" height="22" fill={isDark ? "#b45309" : "#f59e0b"} />
                                        <rect x="19" y="120" width="10" height="22" fill={isDark ? "#78350f" : "#fef3c7"} />
                                        <rect x="59" y="120" width="12" height="22" fill={isDark ? "#92400e" : "#fde68a"} />
                                        {/* Indigo band y=268 */}
                                        <rect x="0" y="268" width="100" height="26" fill="#3f4c8c" />
                                        <rect x="10" y="268" width="8" height="26" fill={isDark ? "#2d3765" : "#e0e7ff"} />
                                        <rect x="50" y="268" width="12" height="26" fill={isDark ? "#1e244a" : "#c7d2fe"} />
                                    </g>
                                ))}
                            </g>
                        </g>

                        {/* 3D shading overlay */}
                        <g className={activeStage === 0 ? "capsule-intro" : ""}>
                            <rect x="105" y="30" width="50" height="135" rx="25" ry="25" fill="url(#capsule-shading)" pointerEvents="none" />
                            <rect x="105" y="235" width="50" height="135" rx="25" ry="25" fill="url(#capsule-shading)" pointerEvents="none" />
                            <circle cx="130" cy="220" r="12" fill="url(#capsule-shading)" pointerEvents="none" />
                        </g>

                        {/* Capsule outlines */}
                        <rect x="105" y="30" width="50" height="135" rx="25" ry="25" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <rect x="105" y="235" width="50" height="135" rx="25" ry="25" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <circle cx="130" cy="220" r="12" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />

                        {/* Band glows — light up when connected node is active */}
                        <rect x="105" y="45" width="50" height="22" fill="#cca54a" filter="url(#glow-filter)"
                            opacity={activeStage === 8 ? 1 : (isNodeActive(1) || isNodeActive(4) || hoveredNode === 1 || hoveredNode === 4 || hoveredNode === 99 ? 0.65 : 0)}
                            className={`transition-opacity duration-700 pointer-events-none ${activeStage === 8 ? "band-seq-glow-gold" : (activeStage >= 7 ? "active-band-glow" : "")}`} />
                        <rect x="105" y="120" width="50" height="22" fill="#f59e0b" filter="url(#glow-filter)"
                            opacity={activeStage === 8 ? 1 : (isNodeActive(2) || isNodeActive(5) || hoveredNode === 2 || hoveredNode === 5 || hoveredNode === 99 ? 0.65 : 0)}
                            className={`transition-opacity duration-700 pointer-events-none ${activeStage === 8 ? "band-seq-glow-amber" : (activeStage >= 7 ? "active-band-glow" : "")}`} />
                        <rect x="105" y="268" width="50" height="26" fill="#3f4c8c" filter="url(#glow-filter)"
                            opacity={activeStage === 8 ? 1 : (isNodeActive(3) || isNodeActive(6) || hoveredNode === 3 || hoveredNode === 6 || hoveredNode === 99 ? 0.65 : 0)}
                            className={`transition-opacity duration-700 pointer-events-none ${activeStage === 8 ? "band-seq-glow-indigo" : (activeStage >= 7 ? "active-band-glow" : "")}`} />

                        {/* Mid-path badges — visual step indicators */}
                        {renderBadgeOnPath(46, 60, 1, isNodeActive(1), "#cca54a")}
                        {renderBadgeOnPath(44, 180, 2, isNodeActive(2), "#f59e0b")}
                        {renderBadgeOnPath(44, 315, 3, isNodeActive(3), "#3f4c8c")}
                        {renderBadgeOnPath(214, 60, 4, isNodeActive(4), "#3e6b5c")}
                        {renderBadgeOnPath(216, 180, 5, isNodeActive(5), "#f59e0b")}
                        {renderBadgeOnPath(216, 315, 6, isNodeActive(6), "#3f4c8c")}
                    </svg>
                </div>

                {/* RIGHT column — 3 nodes */}
                <div className="w-[200px] flex flex-col justify-around h-full py-4">
                    {renderCard(4, "Currently Mined", "~2% explored frontier", <Search className="h-4 w-4" />, colorCopper, isNodeActive(4))}
                    {renderCard(5, "Class I Potential", "~40% untapped", <Sparkles className="h-4 w-4" />, colorAmber, isNodeActive(5))}
                    {renderCard(6, "Class II Potential", "~56% untapped", <Activity className="h-4 w-4" />, colorIndigo, isNodeActive(6))}
                </div>
            </div>


            {/* ═══ MOBILE: stacked capsule + active stage card ═══ */}
            <div className="flex md:hidden flex-col items-center gap-6 w-full max-w-sm relative z-10">
                <div className="h-56 flex justify-center items-center">
                    <svg viewBox="85 30 50 340" className="w-16 h-56 select-none pointer-events-none overflow-visible">
                        <defs>
                            <filter id="glow-filter-mobile" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            <clipPath id="capsule-clip-path-mobile">
                                <rect x="85" y="30" width="50" height="135" rx="25" ry="25" />
                                <rect x="85" y="235" width="50" height="135" rx="25" ry="25" />
                                <circle cx="110" cy="220" r="12" />
                            </clipPath>
                            <linearGradient id="capsule-shading-mobile" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor={isDark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.18)"} />
                                <stop offset="20%" stopColor={isDark ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.6)"} />
                                <stop offset="45%" stopColor={isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0)"} />
                                <stop offset="75%" stopColor={isDark ? "rgba(0,0,0,0)" : "rgba(0,0,0,0)"} />
                                <stop offset="92%" stopColor={isDark ? "rgba(0,0,0,0.35)" : "rgba(0,0,0,0.02)"} />
                                <stop offset="100%" stopColor={isDark ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.22)"} />
                            </linearGradient>
                        </defs>
                        <g clipPath="url(#capsule-clip-path-mobile)" className={activeStage === 0 ? "capsule-intro" : ""}>
                            <g className={getCapsuleRotationClass()}>
                                {[0, 100].map((offset) => (
                                    <g key={offset} transform={`translate(${offset}, 0)`}>
                                        <rect x="0" y="0" width="100" height="400" fill={capsuleBodyColor} />
                                        <rect x="14" y="0" width="3.5" height="400" fill={capsuleLineColor} />
                                        <rect x="44" y="0" width="6" height="400" fill={capsuleLineColorStrong} />
                                        <rect x="0" y="45" width="100" height="22" fill="#cca54a" />
                                        <rect x="14" y="45" width="8" height="22" fill={isDark ? "#8c6f27" : "#faf6f0"} />
                                        <rect x="0" y="120" width="100" height="22" fill={isDark ? "#b45309" : "#f59e0b"} />
                                        <rect x="19" y="120" width="10" height="22" fill={isDark ? "#78350f" : "#fef3c7"} />
                                        <rect x="0" y="268" width="100" height="26" fill="#3f4c8c" />
                                        <rect x="10" y="268" width="8" height="26" fill={isDark ? "#2d3765" : "#e0e7ff"} />
                                    </g>
                                ))}
                            </g>
                        </g>
                        <rect x="85" y="30" width="50" height="135" rx="25" ry="25" fill="url(#capsule-shading-mobile)" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <rect x="85" y="235" width="50" height="135" rx="25" ry="25" fill="url(#capsule-shading-mobile)" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <circle cx="110" cy="220" r="12" fill="url(#capsule-shading-mobile)" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <rect x="85" y="30" width="50" height="135" rx="25" ry="25" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <rect x="85" y="235" width="50" height="135" rx="25" ry="25" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <circle cx="110" cy="220" r="12" stroke={isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"} strokeWidth="1.5" fill="none" pointerEvents="none" className={activeStage === 0 ? "capsule-intro" : ""} />
                        <rect x="85" y="45" width="50" height="22" fill="#cca54a" filter="url(#glow-filter-mobile)" opacity={isNodeActive(1) ? 0.6 : 0} className="transition-opacity duration-700 pointer-events-none" />
                        <rect x="85" y="120" width="50" height="22" fill="#f59e0b" filter="url(#glow-filter-mobile)" opacity={isNodeActive(2) ? 0.6 : 0} className="transition-opacity duration-700 pointer-events-none" />
                        <rect x="85" y="268" width="50" height="26" fill="#3f4c8c" filter="url(#glow-filter-mobile)" opacity={isNodeActive(3) ? 0.6 : 0} className="transition-opacity duration-700 pointer-events-none" />
                    </svg>
                </div>

                <div className={`w-full p-5 rounded-2xl border transition-all duration-500 text-center ${isDark ? "bg-[#0d0e12]/60 border-zinc-800/80" : "bg-slate-50/80 border-slate-200"}`}>
                    <h4 className="text-xs font-mono font-bold tracking-widest uppercase">{stages[activeStage].id} {stages[activeStage].label}</h4>
                    <p className="text-[9px] opacity-80 font-mono mt-1">Duration: {stages[activeStage].durationText} • Easing: {stages[activeStage].easingText}</p>
                    <p className="text-xs text-text-secondary mt-3 leading-relaxed">{stages[activeStage].desc}</p>
                </div>
            </div>

            {/* Stage description box (desktop) */}
            <div className={`hidden md:block w-full mt-6 p-5 rounded-2xl border text-center transition-all duration-500 relative overflow-hidden ${isDark ? "bg-[#0d0e12]/40 border-zinc-800/80 scanline-effect" : "bg-slate-50/50 border-slate-200 scanline-effect"}`}>
                <div className="flex justify-between items-center border-b border-border-subtle/30 pb-2 mb-3">
                    <span className="text-[10px] font-mono uppercase font-bold text-amber-500 tracking-wider">{stages[activeStage].id} {stages[activeStage].label}</span>
                    <span className="text-[9px] font-mono uppercase text-text-tertiary">Duration: {stages[activeStage].durationText} • Easing: {stages[activeStage].easingText}</span>
                </div>
                <p className="text-sm text-text-primary leading-relaxed max-w-2xl mx-auto font-medium text-left min-h-[40px]">{typedDesc}</p>
            </div>

            {/* Timeline controls */}
            <div className="w-full flex flex-col items-center gap-3 mt-6 pt-4 border-t border-border-subtle/50 z-10">
                <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center font-mono">
                    {[
                        { id: "01", name: "Intro", targetStage: 0 },
                        { id: "02", name: "Protein-Coding", targetStage: 1 },
                        { id: "03", name: "Class I Dark DNA", targetStage: 2 },
                        { id: "04", name: "Class II Dark RNA", targetStage: 3 },
                        { id: "05", name: "Currently Mined", targetStage: 4 },
                        { id: "06", name: "Class I Potential", targetStage: 5 },
                        { id: "07", name: "Class II Potential", targetStage: 6 },
                        { id: "08", name: "Fully Connected", targetStage: 9 },
                    ].map((st, idx) => {
                        const isButtonActive = st.targetStage === 9 ? activeStage >= 7 : activeStage === st.targetStage;
                        return (
                            <button key={idx}
                                onClick={() => { setActiveStage(st.targetStage); setIsPlaying(false); }}
                                onMouseEnter={() => {
                                    if (st.targetStage === 0) setHoveredNode(null);
                                    else if (st.targetStage <= 6) setHoveredNode(st.targetStage);
                                    else setHoveredNode(99);
                                }}
                                onMouseLeave={() => setHoveredNode(null)}
                                className={`px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase transition-all duration-300 border ${isButtonActive
                                        ? "bg-accent-blue dark:bg-white text-white dark:text-zinc-950 border-transparent scale-105"
                                        : `${isDark ? "border-zinc-800 hover:border-zinc-700 bg-zinc-900/30 text-zinc-400" : "border-slate-200 hover:border-slate-350 bg-slate-50/50 text-slate-500"}`
                                    }`}>
                                {st.id} <span className="hidden sm:inline ml-1 font-sans text-[9px] font-semibold tracking-normal">{st.name}</span>
                            </button>
                        );
                    })}
                </div>

                <div className={`h-1 w-48 rounded-full overflow-hidden mt-1 bg-opacity-10 ${isDark ? "bg-white" : "bg-black"}`}>
                    <div
                        key={activeStage + (isPlaying ? "-playing" : "-paused")}
                        className="h-full bg-accent-blue dark:bg-white"
                        style={{
                            width: isPlaying ? "100%" : `${((activeStage + 1) / 10) * 100}%`,
                            transition: isPlaying ? `width ${stageDurations[activeStage]}ms linear` : "width 300ms ease-out",
                        }}
                    />
                </div>
            </div>

            {/* Footer principles */}
            <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 pt-6 border-t border-border-subtle/30 text-[10px] font-mono text-text-tertiary">
                <div className="flex items-center gap-1.5 justify-center md:justify-start"><Activity className="w-3.5 h-3.5 text-amber-500" /><span>Smooth easing (easeInOutCubic)</span></div>
                <div className="flex items-center gap-1.5 justify-center"><Layers className="w-3.5 h-3.5 text-[#cca54a]" /><span>Dotted drawing (stroke-dasharray)</span></div>
                <div className="flex items-center gap-1.5 justify-center"><Sparkles className="w-3.5 h-3.5 text-[#3f4c8c]" /><span>Glow pulses on completion</span></div>
                <div className="flex items-center gap-1.5 justify-center"><Brain className="w-3.5 h-3.5 text-[#3e6b5c]" /><span>Subtle depth &amp; parallax</span></div>
                <div className="flex items-center gap-1.5 justify-center md:justify-end col-span-2 md:col-span-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /><span>Respects reduce-motion</span></div>
            </div>
        </div>
    );
}
