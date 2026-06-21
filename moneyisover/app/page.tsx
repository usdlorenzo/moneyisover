"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("14:35");
  const [active, setActive] = useState("Página Inicial");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const menu = [
    "Página Inicial",
    "Publicações",
    "Vídeos",
    "Moedas",
    "Ranking",
    "Eventos",
    "Mensagens",
    "Salvos",
    "Configurações",
  ];

  const discussions = [
    ["💼", "Estou pensando em mudar de carreira", "15", "+1"],
    ["🚀", "Vale a pena abrir empresa?", "42", "+1"],
    ["🧠", "Como vencer a procrastinação?", "19", "+1"],
    ["🎓", "Faculdade ainda compensa?", "31", "+1"],
    ["⚖️", "Empreender ou CLT?", "44", "+1"],
  ];

  const videos = [
    ["Distribuição", "03:24"],
    ["Ajuda a idoso", "02:15"],
    ["Roupas", "02:45"],
    ["Cachorro", "01:48"],
    ["Aula grátis", "02:37"],
    ["Cestas", "02:58"],
  ];

  const actions = [
    "Criar Desabafo",
    "Fazer Pergunta",
    "Responder",
    "Vídeos",
    "Carteira",
    "Ranking",
    "Eventos",
    "Salvos",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center p-5">
        <div className="w-full max-w-[1180px] rounded-[34px] border border-white/25 bg-white/10 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
          <div className="grid gap-4 lg:grid-cols-[170px_1fr]">
            <aside className="rounded-[26px] border border-white/15 bg-white/10 p-3">
              <div className="mb-5 px-2">
                <div className="text-5xl font-black text-blue-400">M</div>
                <h1 className="mt-1 text-sm font-bold">MONEY IS OVER</h1>
                <p className="text-[10px] text-white/55">
                  Sua voz tem valor.
                </p>
              </div>

              <div className="space-y-1">
                {menu.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`w-full rounded-xl px-3 py-2 text-left text-xs ${
                      active === item
                        ? "bg-gradient-to-r from-blue-500 to-violet-500"
                        : "hover:bg-white/10 text-white/75"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3">
                <p className="text-xs text-white/60">Minhas moedas</p>
                <p className="text-2xl font-bold">1.284</p>
                <p className="text-xs text-green-300">+18% hoje</p>
              </div>
            </aside>

            <div className="space-y-4">
              <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <input
                  placeholder="Buscar pessoas, tópicos, vídeos..."
                  className="w-full max-w-md rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-xs outline-none placeholder:text-white/50"
                />

                <div className="flex items-center gap-3">
                  <button className="h-10 w-10 rounded-full bg-white/10">☼</button>
                  <button className="h-10 w-10 rounded-full bg-white/10">♧</button>
                  <button className="h-10 w-10 rounded-full bg-white/10">✉</button>
                  <div className="h-11 w-11 rounded-full bg-white/20 text-center text-2xl">
                    👨
                  </div>
                </div>
              </header>

              <div className="grid gap-3 md:grid-cols-[180px_1fr_260px]">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-4xl font-bold">{time}</p>
                  <p className="mt-2 text-xs text-white/55">
                    Sábado, 24 Maio
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <div className="flex items-center gap-5">
                    <span className="text-5xl">⛅</span>
                    <div>
                      <p className="text-4xl font-bold">28°C</p>
                      <p className="text-xs text-white/70">
                        Parcialmente nublado
                      </p>
                      <p className="text-xs text-white/50">São Paulo, SP</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold">Próximo compromisso</p>
                  <p className="mt-3 text-xs text-white/70">
                    Reunião com a equipe
                  </p>
                  <p className="text-xs text-white/50">Hoje às 15:00</p>
                </div>
              </div>

              <div className="grid gap-3 xl:grid-cols-[1fr_420px]">
                <div className="space-y-3">
                  <div className="rounded-2xl border border-white/15 bg-black/25 p-6">
                    <p className="text-sm text-white/70">Bem-vindo ao</p>
                    <h2 className="text-4xl font-black">
                      Money{" "}
                      <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">
                        Is Over
                      </span>
                    </h2>
                    <p className="mt-3 max-w-lg text-sm text-white/70">
                      Um novo jeito de conectar, ajudar e crescer.
                    </p>

                    <div className="mt-5 flex gap-3">
                      <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 text-xs font-bold">
                        Criar Desabafo
                      </button>
                      <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold">
                        Enviar Vídeo
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                    <div className="mb-3 flex justify-between">
                      <h3 className="text-sm font-bold">Discussões</h3>
                      <button className="text-xs text-cyan-300">Ver todos</button>
                    </div>

                    {discussions.map((item) => (
                      <div
                        key={item[1]}
                        className="mb-2 grid grid-cols-[36px_1fr_45px_35px] items-center rounded-xl bg-white/7 px-3 py-2 text-xs"
                      >
                        <span className="text-xl">{item[0]}</span>
                        <span>{item[1]}</span>
                        <span>💬 {item[2]}</span>
                        <b className="text-green-300">{item[3]}</b>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                      <p className="text-sm font-bold">Moedas</p>
                      <p className="mt-4 text-4xl font-bold">1.284</p>
                      <p className="text-xs text-green-300">+18%</p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                      <p className="text-sm font-bold">Atividade</p>
                      <p className="mt-3 text-xs text-white/65">
                        Mariana respondeu sua pergunta
                      </p>
                      <p className="mt-2 text-xs text-white/65">
                        João ganhou +2 moedas
                      </p>
                      <p className="mt-2 text-xs text-white/65">
                        Vídeo aprovado
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {actions.map((item) => (
                      <button
                        key={item}
                        className="rounded-xl border border-white/10 bg-white/10 p-3 text-[11px] hover:bg-white/20"
                      >
                        <span className="mb-1 block text-xl">□</span>
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <h3 className="mb-3 text-sm font-bold">Lembretes</h3>
                      {[
                        ["Reunião", "15:00"],
                        ["Relatório", "17:30"],
                        ["Academia", "19:00"],
                      ].map((item) => (
                        <div
                          key={item[0]}
                          className="flex justify-between border-b border-white/10 py-2 text-xs"
                        >
                          <span>{item[0]}</span>
                          <span className="text-white/55">{item[1]}</span>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                      <h3 className="mb-3 text-center text-sm font-bold">
                        Maio 2025
                      </h3>
                      <div className="grid grid-cols-7 gap-1 text-center text-[11px]">
                        {[
                          "D",
                          "S",
                          "T",
                          "Q",
                          "Q",
                          "S",
                          "S",
                          27,
                          28,
                          29,
                          30,
                          1,
                          2,
                          3,
                          4,
                          5,
                          6,
                          7,
                          8,
                          9,
                          10,
                          11,
                          12,
                          13,
                          14,
                          15,
                          16,
                          17,
                          18,
                          19,
                          20,
                          21,
                          22,
                          23,
                          24,
                        ].map((d, i) => (
                          <span
                            key={i}
                            className={`rounded-full py-1 ${
                              d === 24 ? "bg-blue-500" : ""
                            }`}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-4">
                <div className="mb-3 flex justify-between">
                  <h3 className="text-sm font-bold">Vídeos de Ajuda</h3>
                  <button className="text-xs text-cyan-300">Ver todos</button>
                </div>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
                  {videos.map((video) => (
                    <div
                      key={video[0]}
                      className="overflow-hidden rounded-xl border border-white/10 bg-white/10"
                    >
                      <div className="relative flex h-20 items-center justify-center bg-white/10 text-2xl">
                        ▶
                        <span className="absolute bottom-1 right-1 rounded bg-black/50 px-1 text-[10px]">
                          {video[1]}
                        </span>
                      </div>
                      <div className="p-2">
                        <p className="text-[11px] font-bold">{video[0]}</p>
                        <p className="text-[11px] text-green-300">+2 moedas</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
