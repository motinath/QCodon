import PageShell from './_PageShell'

export default function About() {
  return (
    <PageShell className="bg-[#f8fafc] dark:bg-[#0f172a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Title / Hero */}
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-accent-blue uppercase font-semibold">About Quantum Codon</p>
          <h1 className="font-serif-display text-4xl md:text-6xl mt-4 leading-tight">Unlocking the Genome's Hidden Moat</h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-muted-foreground leading-relaxed text-base">
            <p>
              Quantum Codon was founded to explore the final frontier of biology: the non-coding and silent DNA regions that constitute 98% of our genome. Long dismissed as "junk DNA", these regions hold the instructions for creating stable, highly potent therapeutic candidates that do not exist in nature.
            </p>
            <p>
              Led by Prof. Pawan K Dhar, a pioneer with over 15 years of continuous dark genome research, we integrate advanced bioinformatics, state-of-the-art AI structural predictions (AlphaFold), and quantum mechanics to design and synthesize novel peptides and proteins.
            </p>
            <blockquote className="border-l-2 border-accent-blue pl-5 py-2 italic text-foreground bg-white/5 dark:bg-black/5 rounded-r-xl pr-4 text-sm font-medium">
              "We are building a parallel biology universe. By synthetically expressing genes that nature kept silent, we are creating a completely new class of medicines."
              <span className="block not-italic mt-2 text-xs font-semibold text-muted-foreground">— Prof. Pawan K Dhar, CSO</span>
            </blockquote>
          </div>

          <div className="lg:col-span-5 bg-white/40 dark:bg-black/20 border border-black/5 dark:border-white/5 rounded-3xl p-8 backdrop-blur-md shadow-lg flex flex-col items-center">
            <img src="/logo-full.png" alt="Quantum Codon Logo" className="h-28 w-auto object-contain mb-8 dark:brightness-110" />
            <div className="w-full">
              <h3 className="font-serif-display text-xl mb-6 font-semibold">Scientific Anchors</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center shrink-0 text-accent-blue font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-sm">Academic Heritage</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Research initiated at Jawaharlal Nehru University (JNU), New Delhi, with proof of concept validated across multiple peer-reviewed studies.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-emerald/10 flex items-center justify-center shrink-0 text-accent-emerald font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-sm">Amaravati Quantum Valley</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Anchor corporate laboratory in Amaravati, designing advanced quantum-computational simulations of molecular docking and folding dynamics.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </PageShell>
  )
}
