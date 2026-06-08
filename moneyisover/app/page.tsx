export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6e7b8] text-[#3b2414]">
      <div className="absolute left-10 top-20 animate-bounce text-6xl">☮️</div>
      <div className="absolute right-16 top-32 animate-pulse text-7xl">🌞</div>
      <div className="absolute bottom-24 left-20 animate-bounce text-6xl">🌻</div>
      <div className="absolute bottom-36 right-24 animate-pulse text-6xl">🪐</div>

      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            Money<span className="text-orange-600">IsOver</span>
          </h1>
          <p className="text-sm font-bold tracking-[0.25em] text-orange-700">
            O mundo pós-dinheiro já começou
          </p>
        </div>

        <button className="rounded-full bg-[#3b2414] px-6 py-3 font-black text-[#f6e7b8] shadow-lg">
          Entrar
        </button>
      </header>

      <section className="relative z-10 mx-auto grid min-h-[75vh] max-w-7xl items-center gap-10 px-8 md:grid-cols-2">
        <div>
          <div className="mb-6 inline-block rotate-[-2deg] rounded-full bg-orange-300 px-5 py-2 font-black shadow-md">
            Paz • Amor • Comunidade • Recompensas
          </div>

          <h2 className="text-6xl font-black leading-none md:text-8xl">
            Ajude.
            <br />
            Ame.
            <br />
            Compartilhe.
          </h2>

          <p className="mt-8 max-w-xl text-xl font-bold leading-relaxed">
            Uma nova forma de conseguir coisas sem depender apenas do dinheiro.
            Aqui, boas ações viram valor real.
          </p>

          <p className="mt-4 max-w-xl text-lg">
            Ajude pessoas na rua ou online, ganhe Money Is Over Coin e troque
            por produtos, serviços, descontos e oportunidades.
          </p>

          <button className="mt-8 rounded-full bg-orange-500 px-10 py-5 text-xl font-black text-white shadow-xl">
            Entrar na tribo
          </button>
        </div>

        <div className="relative rounded-[3rem] border-4 border-[#3b2414] bg-[#ffcf70] p-8 shadow-2xl">
          <div className="absolute -top-8 left-10 rounded-full bg-pink-400 px-5 py-3 font-black rotate-[-8deg]">
            good vibes
          </div>

          <div className="grid gap-5 text-center">
            <div className="rounded-3xl bg-[#fff3cf] p-6 shadow-lg">
              <div className="text-6xl">🧘‍♀️ 🧘‍♂️</div>
              <p className="mt-3 text-xl font-black">Pessoas em paz</p>
            </div>

            <div className="rounded-3xl bg-[#fff3cf] p-6 shadow-lg">
              <div className="text-6xl">🤝 🌍 ✨</div>
              <p className="mt-3 text-xl font-black">Ajuda vira valor</p>
            </div>

            <div className="rounded-3xl bg-[#fff3cf] p-6 shadow-lg">
              <div className="text-6xl">🎁 🪙 🛒</div>
              <p className="mt-3 text-xl font-black">
                Troque por coisas reais
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto mb-12 grid max-w-5xl gap-4 px-8 md:grid-cols-3">
        <select className="rounded-full border-4 border-[#3b2414] bg-[#fff3cf] p-4 font-bold">
          <option>Brasil</option>
          <option>Estados Unidos</option>
          <option>Argentina</option>
        </select>

        <input
          className="rounded-full border-4 border-[#3b2414] bg-[#fff3cf] p-4 font-bold"
          placeholder="Digite sua cidade"
        />

        <input
          className="rounded-full border-4 border-[#3b2414] bg-[#fff3cf] p-4 font-bold"
          placeholder="Digite seu bairro"
        />
      </section>
    </main>
  );
}
