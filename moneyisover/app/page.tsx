export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.45),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(127,29,29,0.5),transparent_40%)]" />

      <header className="relative z-10 flex items-center justify-between px-8 py-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-600 bg-black text-3xl font-black text-red-500 shadow-[0_0_35px_rgba(220,38,38,0.8)]">
            Ⓐ
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-tight">
              MONEY<span className="text-red-600">ISOVER</span>
            </h1>
            <p className="text-xs uppercase tracking-[0.35em] text-red-500">
              O mundo pós-dinheiro já começou
            </p>
          </div>
        </div>

        <button className="border border-red-700 bg-red-950/40 px-6 py-3 font-black text-red-300">
          Entrar
        </button>
      </header>

      <section className="relative z-10 grid min-h-[78vh] items-center px-8 md:grid-cols-2">
        <div>
          <h2 className="text-6xl font-black leading-none md:text-8xl">
            AJUDE.
            <br />
            RESISTA.
            <br />
            <span className="text-red-600">LIBERTE.</span>
          </h2>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full border border-red-900/60 bg-red-950/20 blur-xl" />

          <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border-4 border-red-700 bg-black shadow-[0_0_90px_rgba(185,28,28,0.7)]">
            <div className="absolute text-[260px] font-black text-red-700/25">
              Ⓐ
            </div>

            <div className="z-10 text-center">
              <div className="text-8xl">𓂀</div>
              <p className="mt-4 text-sm uppercase tracking-[0.5em] text-red-400">
                Freedom Symbol
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-16 grid max-w-6xl gap-4 px-8 md:grid-cols-4">
        {["⚔️", "🔥", "🜏", "⛓️"].map((symbol, index) => (
          <div
            key={index}
            className="flex h-44 items-center justify-center border border-red-900 bg-black/60 text-7xl shadow-[0_0_30px_rgba(127,29,29,0.35)]"
          >
            {symbol}
          </div>
        ))}
      </section>
    </main>
  );
}
