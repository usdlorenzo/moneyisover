"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Página inicial");
  const [time, setTime] = useState("14:35");

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const menu = [
    "Página inicial",
    "Publicações",
    "Vídeos de Ajuda",
    "Moedas",
    "Ranking",
    "Comunidades",
    "Eventos",
    "Mensagens",
    "Notificações",
    "Favoritos",
    "Salvos",
    "Moderação",
    "Relatórios",
    "Configurações",
  ];

  const discussions = [
    ["💼", "Estou pensando em mudar de carreira", "Preciso de opiniões sinceras.", "15", "Hoje", "+1"],
    ["🚀", "Vale a pena abrir empresa?", "Quem já empreendeu?", "42", "Ontem", "+1"],
    ["🧠", "Como vencer a procrastinação?", "Preciso de ajuda.", "19", "Hoje", "+1"],
    ["🎓", "Faculdade ainda compensa?", "Mercado mudou muito.", "31", "Ontem", "+1"],
    ["⚖️", "Empreender ou CLT?", "O que vocês fariam?", "44", "Ontem", "+1"],
  ];

  const videos = [
    ["Distribuição de alimentos", "Ajuda a famílias carentes.", "03:24"],
    ["Ajuda a idoso", "Suporte em transporte...", "02:15"],
    ["Doação de roupas", "Entrega para pessoas...", "02:45"],
    ["Resgate de cachorro", "Animal abandonado...", "01:48"],
    ["Aula gratuita", "Ensino de matemática...", "02:37"],
    ["Cestas básicas", "Ação solidária...", "02:37"],
  ];

  const actions = [
    ["✎", "Criar Desabafo"],
    ["?", "Fazer Pergunta"],
    ["↩", "Responder"],
    ["▻", "Vídeos de Ajuda"],
    ["◎", "Doar Moedas"],
    ["☷", "Meus Desabafos"],
    ["▣", "Meus Vídeos"],
    ["↺", "Histórico"],
    ["♕", "Conquistas"],
    ["✉", "Convites"],
    ["♟", "Amigos"],
    ["♚", "Grupos"],
    ["◴", "Eventos"],
    ["▱", "Salvos"],
    ["▥", "Estatísticas"],
    ["▣", "Carteira"],
    ["▤", "Loja"],
    ["♙", "Níveis"],
    ["▧", "Relatórios"],
    ["⚙", "Configurações"],
  ];

  const activities = [
    ["👩", "Mariana respondeu sua pergunta", "há 10 min"],
    ["🟣", "João ganhou +2 moedas", "há 30 min"],
    ["🟢", "Vídeo aprovado: Doação de roupas", "há 1 hora"],
    ["👩‍🦰", "Ana publicou um novo desabafo", "há 2 horas"],
    ["👨", "Carlos entrou na comunidade", "há 3 horas"],
  ];

  const reminders = [
    ["◴", "Reunião com a equipe", "Hoje", "15:00"],
    ["◷", "Enviar relatório mensal", "Hoje", "17:30"],
    ["♙", "Treino na academia", "Hoje", "19:00"],
    ["✚", "Dentista", "Amanhã", "09:00"],
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/25 via-slate-900/10 to-orange-950/20" />
      <div className="fixed inset-0 backdrop-blur-[2px]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-8">
        <div className="grid h-auto w-full max-w-[1540px] grid-cols-1 gap-4 rounded-[30px] border border-white/25 bg-white/10 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:grid-cols-[210px_1fr] xl:max-h-[900px]">
          <aside className="rounded-[24px] border border-white/15 bg-white/10 p-3 backdrop-blur-2xl">
            <div className="mb-5 px-2 pt-2">
              <div className="flex items-center gap-3">
                <div className="text-5xl font-black leading-none text-blue-400 drop-shadow-[0_0_18px_rgba(59,130,246,0.9)]">
                  M
                </div>
                <div>
                  <h1 className="text-sm font-bold tracking-wide">
                    MONEY IS OVER
                  </h1>
                  <p className="text-[10px] text-white/55">
                    Sua voz tem valor.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-1">
              {menu.map((item) => (
                <button
                  key={item}
                  onClick={() => setActive(item)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs transition ${
                    active === item
                      ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/25"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    {item === "Página inicial"
                      ? "⌂"
                      : item === "Publicações"
                      ? "▤"
                      : item === "Vídeos de Ajuda"
                      ? "▻"
                      : item === "Moedas"
                      ? "$"
                      : item === "Ranking"
                      ? "▥"
                      : item === "Comunidades"
                      ? "♚"
                      : item === "Eventos"
                      ? "◴"
                      : item === "Mensagens"
                      ? "✉"
                      : item === "Notificações"
                      ? "♧"
                      : item === "Favoritos"
                      ? "☆"
                      : item === "Salvos"
                      ? "▱"
                      : item === "Moderação"
                      ? "♢"
                      : item === "Relatórios"
                      ? "▧"
                      : "⚙"}
                  </span>
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/70">Nível da Comunidade</p>
                  <p className="text-xs font-bold">Nível 12</p>
                </div>
                <span className="text-white/50">›</span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-black/25">
                <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-400 to-violet-500" />
              </div>

              <p className="mt-2 text-right text-[10px] text-white/60">
                2.350 / 3.000 XP
              </p>
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/10 p-3">
              <p className="text-xs text-white/70">Minhas Moedas</p>
              <div className="mt-1 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">1.284</p>
                  <p className="text-xs font-bold text-green-300">+18%</p>
                </div>
                <span className="text-4xl">🪙</span>
              </div>
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/10 p-3 text-xs">
              <button className="flex w-full justify-between border-b border-white/10 py-2">
                <span>Central de Ajuda</span>
                <span>●</span>
              </button>
              <button className="flex w-full justify-between py-2">
                <span>Sair da conta</span>
                <span>›</span>
              </button>
            </div>
          </aside>

          <div className="min-w-0">
            <header className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
              <div className="relative max-w-[480px]">
                <input
                  placeholder="Buscar pessoas, tópicos, vídeos, comunidades..."
                  className="w-full rounded-2xl border border-white/20 bg-white/15 px-5 py-3 pr-12 text-xs text-white outline-none backdrop-blur-xl placeholder:text-white/55"
                />
                <span className="absolute right-4 top-3 text-lg text-white/80">
                  ⌕
                </span>
              </div>

              <div className="flex items-center gap-4 self-end">
                {["☼", "♧", "✉"].map((icon, index) => (
                  <button
                    key={icon}
                    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg backdrop-blur-xl"
                  >
                    {icon}
                    {index === 1 && (
                      <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-red-500" />
                    )}
                  </button>
                ))}

                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/20">
                  <div className="flex h-full w-full items-center justify-center text-2xl">
                    👨
                  </div>
                  <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-400" />
                </div>
              </div>
            </header>

            <div className="mb-4 grid gap-3 xl:grid-cols-[210px_1fr_300px]">
              <div className="rounded-2xl border border-white/15 bg-white/12 p-6 backdrop-blur-2xl">
                <div className="flex items-center justify-between">
                  <p className="text-4xl font-bold">{time}</p>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-xl">
                    ◴
                  </span>
                </div>
                <p className="mt-3 text-xs text-white/65">
                  Sábado, 24 de Maio
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/12 p-5 backdrop-blur-2xl">
                <div className="flex items-center gap-6">
                  <span className="text-6xl">⛅</span>
                  <div>
                    <p className="text-4xl font-bold">28°C</p>
                    <p className="text-xs">Parcialmente nublado</p>
                    <p className="text-xs text-white/60">São Paulo, SP</p>
                  </div>

                  <div className="ml-auto hidden grid-cols-3 gap-8 text-xs sm:grid">
                    <div>
                      <p className="text-white/45">Sensação</p>
                      <b>29°C</b>
                    </div>
                    <div>
                      <p className="text-white/45">Umidade</p>
                      <b>60%</b>
                    </div>
                    <div>
                      <p className="text-white/45">Vento</p>
                      <b>12 km/h</b>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/12 p-5 backdrop-blur-2xl">
                <div className="mb-2 flex justify-between">
                  <p className="text-sm font-bold">Próximo compromisso</p>
                  <button className="text-xs text-cyan-300">Ver todos</button>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-black/20 p-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    ◴
                  </span>
                  <div>
                    <p className="text-sm font-bold">Reunião com a equipe</p>
                    <p className="text-xs text-white/60">Hoje às 15:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 xl:grid-cols-[1.1fr_0.85fr]">
              <div className="space-y-3">
                <div className="rounded-2xl border border-blue-300/25 bg-black/25 p-7 backdrop-blur-2xl">
                  <p className="text-sm">Bem-vindo ao</p>
                  <h2 className="mt-1 text-4xl font-black">
                    Money{" "}
                    <span className="bg-gradient-to-r from-blue-300 to-violet-400 bg-clip-text text-transparent">
                      Is Over
                    </span>
                  </h2>
                  <p className="mt-4 max-w-lg text-sm leading-6 text-white/80">
                    Mais que uma plataforma. Um novo jeito de conectar, ajudar e
                    crescer.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <button className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 px-5 py-3 text-xs font-bold shadow-lg shadow-blue-500/25">
                      ✎ Criar Desabafo
                    </button>
                    <button className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold">
                      ▻ Enviar Vídeo de Ajuda
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold">Discussões em Destaque</h3>
                    <button className="text-xs text-cyan-300">Ver todos</button>
                  </div>

                  <div className="space-y-1">
                    {discussions.map((item) => (
                      <button
                        key={item[1]}
                        className="grid w-full grid-cols-[44px_1fr_50px_60px_45px_20px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-xs hover:bg-white/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-lg">
                          {item[0]}
                        </span>
                        <span>
                          <b className="block">{item[1]}</b>
                          <span className="text-white/55">{item[2]}</span>
                        </span>
                        <span>💬 {item[3]}</span>
                        <span className="text-white/65">{item[4]}</span>
                        <span className="font-bold text-green-300">{item[5]}</span>
                        <span>›</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-bold">Vídeos de Ajuda Recentes</h3>
                    <button className="text-xs text-cyan-300">Ver todos</button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                    {videos.map((video) => (
                      <div
                        key={video[0]}
                        className="overflow-hidden rounded-xl border border-white/10 bg-white/10"
                      >
                        <div className="relative flex h-24 items-center justify-center bg-gradient-to-br from-blue-400/30 to-orange-300/20 text-2xl">
                          ▶
                          <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px]">
                            {video[2]}
                          </span>
                        </div>
                        <div className="p-2">
                          <p className="line-clamp-2 text-[11px] font-bold">
                            {video[0]}
                          </p>
                          <p className="line-clamp-1 text-[10px] text-white/55">
                            {video[1]}
                          </p>
                          <p className="mt-1 text-[11px] font-bold text-green-300">
                            +2 moedas
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                    <div className="flex justify-between">
                      <h3 className="text-sm font-bold">Moedas da Comunidade</h3>
                      <button className="text-xs text-cyan-300">Ver gráfico</button>
                    </div>
                    <p className="mt-5 text-4xl font-bold">1.284</p>
                    <p className="text-xs text-white/60">Total distribuído hoje</p>
                    <div className="mt-5 h-24 rounded-2xl bg-gradient-to-tr from-blue-500/20 via-violet-500/25 to-green-400/20" />
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                    <h3 className="text-sm font-bold">Atividade da Comunidade</h3>
                    <div className="mt-3 space-y-2">
                      {activities.slice(0, 4).map((activity) => (
                        <div
                          key={activity[1]}
                          className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px]"
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-lg">{activity[0]}</span>
                            {activity[1]}
                          </span>
                          <span className="text-white/50">{activity[2]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {actions.map((action) => (
                    <button
                      key={action[1]}
                      className="min-h-[72px] rounded-xl border border-white/12 bg-white/8 p-2 text-center text-[11px] backdrop-blur-xl hover:bg-white/15"
                    >
                      <span className="mb-2 block text-2xl text-blue-300">
                        {action[0]}
                      </span>
                      {action[1]}
                    </button>
                  ))}
                </div>

                <div className="grid gap-3 lg:grid-cols-[1fr_260px]">
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                    <div className="mb-3 flex justify-between">
                      <h3 className="text-sm font-bold">
                        Lembretes e Compromissos
                      </h3>
                      <button className="text-xs text-cyan-300">Ver agenda</button>
                    </div>

                    {reminders.map((item) => (
                      <div
                        key={item[1]}
                        className="grid grid-cols-[30px_1fr_60px_50px] border-b border-white/10 py-2 text-xs"
                      >
                        <span>{item[0]}</span>
                        <span>{item[1]}</span>
                        <span className="text-white/55">{item[2]}</span>
                        <span>{item[3]}</span>
                      </div>
                    ))}

                    <button className="mt-3 text-xs text-cyan-300">
                      + Adicionar lembrete
                    </button>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-2xl">
                    <div className="mb-3 flex items-center justify-between">
                      <button>‹</button>
                      <h3 className="text-sm font-bold">Maio 2025</h3>
                      <button>›</button>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-[11px] text-white/60">
                      {["D", "S", "T", "Q", "Q", "S", "S"].map((d) => (
                        <span key={d}>{d}</span>
                      ))}

                      {[
                        27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
                        27, 28, 29, 30, 31,
                      ].map((day, i) => (
                        <span
                          key={`${day}-${i}`}
                          className={`rounded-full py-1 ${
                            day === 24
                              ? "bg-gradient-to-r from-blue-500 to-violet-600 text-white"
                              : ""
                          }`}
                        >
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
