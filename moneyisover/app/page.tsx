export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-green-500/30 blur-3xl" />
      <div className="absolute right-[-120px] top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-[-160px] left-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div>
          <h1 className="text-2xl font-black tracking-tight">
            Money<span className="text-green-400">IsOver</span>
          </h1>
          <p className="mt-1 text-xs uppercase tracking-[0.35em] text-gray-400">
            O mundo pós-dinheiro já começou
          </p>
        </div>

        <button className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur hover:bg-white hover:text-black">
          Entrar
        </button>
      </header>

      <section className="relative z-10 grid min-h-[82vh] items-center gap-12 px-6 py-10 md:grid-cols-2 md:px-12">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-300">
            Nova economia social • Ajuda vira valor
          </div>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
            Ajude pessoas.
            <br />
            Ganhe valor.
            <br />
            <span className="bg-gradient-to-r from-green-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Supere o dinheiro.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
            Uma nova forma de conseguir produtos, serviços, descontos e
            oportunidades sem depender apenas do dinheiro.
          </p>

          <p className="mt-4 max-w-2xl text-gray-400">
            Ajude pessoas na rua ou online, ganhe Money Is Over Coin e construa
            sua influência no seu bairro.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-green-400 px-8 py-4 font-black text-black shadow-[0_0_40px_rgba(74,222,128,0.35)]">
              Entrar no movimento
            </button>

            <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold backdrop-blur hover:bg-white/10">
              Ver como funciona
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
            <p className="text-sm text-gray-300">Impacto gerado</p>
            <p className="text-3xl font-black text-green-300">+12.480</p>
          </div>

          <div className="absolute -right-4 bottom-10 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
            <p className="text-sm text-gray-300">Moedas distribuídas</p>
            <p className="text-3xl font-black text-cyan-300">MIO 87K</p>
          </div>

          <div className="mx-auto flex h-[420px] max-w-[420px] items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-8 shadow-2xl backdrop-blur">
            <div className="flex h-64 w-64 items-center justify-center rounded-full border border-green-300/40 bg-black shadow-[0_0_100px_rgba(74,222,128,0.35)]">
              <span className="text-7xl font-black text-green-300">MIO</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-12 grid max-w-5xl gap-4 px-6 md:grid-cols-3">
        <select className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur outline-none">
          <option>Brasil</option>
          <option>Estados Unidos</option>
          <option>Argentina</option>
        </select>

        <input
          className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur outline-none placeholder:text-gray-400"
          placeholder="Digite sua cidade"
        />

        <input
          className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white backdrop-blur outline-none placeholder:text-gray-400"
          placeholder="Digite seu bairro"
        />
      </section>
    </main>
  );
}
