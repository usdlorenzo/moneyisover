"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("");
  const [active, setActive] = useState("Página Inicial");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const menu = [
    "Página Inicial",
    "Publicações",
    "Vídeos de Ajuda",
    "Moedas",
    "Ranking",
    "Moderação",
    "Configurações",
  ];

  const posts = [
    ["💼", "Estou pensando em mudar de carreira", "Preciso de opiniões sinceras.", "15", "Hoje", "+1"],
    ["💔", "Meu relacionamento terminou", "Quero ouvir experiências.", "28", "Hoje", "+1"],
    ["🚀", "Vale a pena abrir empresa?", "Quem já empreendeu?", "42", "Ontem", "+1"],
    ["💸", "Estou perdido financeiramente", "Como recomeçar?", "36", "Ontem", "+1"],
    ["🧠", "Como vencer a procrastinação?", "Preciso de ajuda.", "19", "Hoje", "+1"],
    ["🏙️", "Mudar de cidade vale a pena?", "Estou em dúvida.", "24", "Hoje", "+1"],
    ["🎓", "Faculdade ainda compensa?", "Mercado mudou muito.", "31", "Ontem", "+1"],
    ["🤝", "Como fazer novas amizades?", "Me sinto isolado.", "17", "Hoje", "+1"],
    ["⚖️", "Empreender ou CLT?", "O que vocês fariam?", "44", "Ontem", "+1"],
    ["✨", "Como melhorar autoestima?", "Aceito sugestões.", "52", "Hoje", "+1"],
  ];

  const videos = [
    ["Distribuição de alimentos", "Ajuda a famílias carentes.", "+2", "03:24"],
    ["Ajuda a idoso", "Suporte em transporte e compras.", "+2", "02:15"],
    ["Doação de roupas", "Entrega para pessoas necessitadas.", "+2", "02:45"],
    ["Resgate de cachorro", "Animal abandonado resgatado.", "+2", "01:48"],
    ["Aula gratuita", "Matemática para jovens.", "+2", "02:37"],
    ["Cestas básicas", "Ação solidária comunitária.", "+2", "02:58"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#050b18] text-white">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#22c55e33,transparent_30%),linear-gradient(135deg,#050b18,#0f172a,#10213f)]" />
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-25" />

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <aside className="hidden w-[270px] shrink-0 border-r border-white/10 bg-white/10 p-5 backdrop-blur-2xl lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-violet-600 text-2xl font-black shadow-lg shadow-blue-500/30">
              M
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wide">MONEY IS OVER</h1>
              <p className="text-xs text-white/50">Sua ajuda tem valor</p>
            </div>
          </div>

          <div className="space-y-2">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${
                  active === item
                    ? "bg-white/20 text-white shadow-lg shadow-blue-500/20"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm text-white/60">Minhas moedas</p>
            <div className="mt-2 flex items-end justify-between">
              <span className="text-3xl font-bold">1.284</span>
              <span className="rounded-full bg-green-400/20 px-3 py-1 text-xs text-green-300">
                +18%
              </span>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
            <p className="mb-3 text-sm text-white/60">Nível da comunidade</p>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />
            </div>
            <p className="mt-2 text-xs text-white/50">2.350 / 3.000 XP</p>
          </div>
        </aside>

        <section className="flex-1 p-4 lg:p-8">
          <header className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between lg:hidden">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-violet-600 font-black">
                  M
                </div>
                <b>MONEY IS OVER</b>
              </div>

              <button className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs backdrop-blur-xl">
                Entrar
              </button>
            </div>

            <div className="hidden w-[380px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/50 backdrop-blur-xl lg:block">
              Buscar pessoas, tópicos, vídeos...
            </div>

            <div className="flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-2xl lg:min-w-[560px]">
              <div>
                <p className="text-3xl font-bold">{time}</p>
                <p className="text-xs text-white/50">Hoje • Brasil</p>
              </div>

              <div className="h-10 w-px bg-white/10" />

              <div className="flex items-center gap-3">
                <span className="text-4xl">⛅</span>
                <div>
                  <p className="text-2xl font-bold">28°C</p>
                  <p className="text-xs text-white/50">Clima local</p>
                </div>
              </div>

              <div className="hidden h-10 w-px bg-white/10 sm:block" />

              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Compromisso</p>
                <p className="text-xs text-white/50">Reunião às 15:00</p>
              </div>
            </div>
          </header>

          <div className="mb-5 flex gap-2 overflow-x-auto lg:hidden">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-xs ${
                  active === item ? "bg-blue-500 text-white" : "bg-white/10 text-white/70"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl lg:p-8">
              <p className="text-white/70">Bem-vindo ao</p>
              <h2 className="mt-1 bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-400 bg-clip-text text-3xl font-black text-transparent lg:text-5xl">
                Money Is Over
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70 lg:text-base">
                Uma plataforma futurista onde desabafos, opiniões e boas ações
                viram reputação, impacto e moedas.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 text-sm font-bold shadow-lg shadow-blue-500/30">
                  Criar Desabafo
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-xl">
                  Enviar Vídeo de Ajuda
                </button>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Clima Atual</h3>
                <span className="text-4xl">⛅</span>
              </div>

              <div className="mt-4">
                <p className="text-5xl font-black">28°C</p>
                <p className="text-white/60">Parcialmente nublado</p>
                <p className="text-sm text-white/50">Baseado na sua localização</p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-sm">
                <div>
                  <p className="text-white/40">Sensação</p>
                  <b>29°C</b>
                </div>
                <div>
                  <p className="text-white/40">Umidade</p>
                  <b>60%</b>
                </div>
                <div>
                  <p className="text-white/40">Vento</p>
                  <b>12 km/h</b>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-5 xl:grid-cols-[1fr_360px]">
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-bold">Discussões em Destaque</h3>
                <button className="text-sm text-cyan-300">Ver todos</button>
              </div>

              <div className="space-y-2">
                {posts.map((post) => (
                  <button
                    key={post[1]}
                    className="grid w-full grid-cols-[42px_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 text-left transition hover:bg-white/10"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-xl">
                      {post[0]}
                    </div>

                    <div>
                      <b className="text-sm">{post[1]}</b>
                      <p className="text-xs text-white/50">{post[2]}</p>
                    </div>

                    <div className="text-right text-xs text-white/60">
                      <p>💬 {post[3]}</p>
                      <p className="text-green-300">{post[5]}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
                <h3 className="font-bold">Moedas da Comunidade</h3>
                <p className="mt-5 text-5xl font-black">1.284</p>
                <p className="text-sm text-white/50">Total distribuído hoje</p>

                <div className="mt-5 h-28 rounded-3xl bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-green-400/20" />
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-2xl">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold">Compromissos</h3>
                  <button className="text-sm text-cyan-300">Ver todos</button>
                </div>

                {[
                  ["Reunião com equipe", "15:00"],
                  ["Enviar relatório mensal", "17:30"],
                  ["Treino na academia", "19:00"],
                ].map((item) => (
                  <div
                    key={item[0]}
                    className="flex justify-between border-b border-white/10 py-3 text-sm"
                  >
                    <span>{item[0]}</span>
                    <span className="text-white/50">{item[1]}</span>
                  </div>
                ))}

                <button className="mt-4 text-sm text-cyan-300">
                  + Adicionar lembrete
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  ["Pergunta", "+1"],
                  ["Resposta", "+1"],
                  ["Vídeo", "+2"],
                ].map((item) => (
                  <div
                    key={item[0]}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm backdrop-blur-xl"
                  >
                    <p className="text-white/60">{item[0]}</p>
                    <b className="text-green-300">{item[1]}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold">Vídeos de Ajuda Recentes</h3>
              <button className="text-sm text-cyan-300">Ver todos</button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
              {videos.map((video, index) => (
                <div
                  key={video[0]}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/10"
                >
                  <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-blue-500/30 to-violet-500/20 text-4xl">
                    ▶
                    <span className="absolute bottom-2 right-2 rounded bg-black/50 px-2 py-1 text-xs">
                      {video[3]}
                    </span>
                  </div>

                  <div className="p-3">
                    <h4 className="text-sm font-bold">{video[0]}</h4>
                    <p className="mt-1 line-clamp-2 text-xs text-white/50">
                      {video[1]}
                    </p>
                    <p className="mt-3 text-sm font-bold text-green-300">
                      {video[2]} moedas
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
