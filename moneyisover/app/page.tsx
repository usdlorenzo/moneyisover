export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-black tracking-tight">
          Money<span className="text-green-400">IsOver</span>
        </div>

        <button className="rounded-full bg-white px-5 py-2 font-bold text-black">
          Entrar
        </button>
      </header>

      <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
         Ajude pessoas na rua ou online agora.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-gray-300 md:text-2xl">
          Ganhe <strong>Money Is Over Coin</strong> e troque por produtos,
          serviços e descontos. Quem mais ajuda se torna influencer do seu
          bairro.
        </p>

        <div className="mt-10 grid w-full max-w-3xl gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 md:grid-cols-3">
          <select className="rounded-xl bg-black p-4 text-white outline-none">
            <option>Brasil</option>
            <option>Estados Unidos</option>
            <option>Argentina</option>
          </select>

          <input
            className="rounded-xl bg-black p-4 text-white outline-none"
            placeholder="Digite sua cidade"
          />

          <input
            className="rounded-xl bg-black p-4 text-white outline-none"
            placeholder="Digite seu bairro"
          />
        </div>

        <button className="mt-6 rounded-full bg-green-400 px-8 py-4 text-lg font-black text-black">
          Entrar no meu bairro
        </button>
      </section>
    </main>
  );
}
