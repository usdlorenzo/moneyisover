"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("14:35");

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

  const menu = ["⌂", "▦", "▻", "$", "▥", "♚", "◴", "✉", "♧", "▱", "⚙"];

  const discussions = [
    ["💼", "Estou pensando em mudar de carreira", "15", "+1"],
    ["🚀", "Vale a pena abrir empresa?", "42", "+1"],
    ["🧠", "Como vencer a procrastinação?", "19", "+1"],
    ["🎓", "Faculdade ainda compensa?", "31", "+1"],
    ["⚖️", "Empreender ou CLT?", "44", "+1"],
  ];

  const actions = [
    ["✎", "Criar Desabafo"],
    ["?", "Fazer Pergunta"],
    ["↩", "Responder"],
    ["▻", "Vídeos de Ajuda"],
    ["▧", "Meus Desabafos"],
    ["▣", "Meus Vídeos"],
    ["↺", "Histórico"],
    ["♕", "Conquistas"],
    ["♚", "Amigos"],
    ["♙", "Grupos"],
    ["◴", "Eventos"],
    ["✉", "Convites"],
    ["▤", "Carteira"],
    ["🛒", "Loja"],
    ["▥", "Níveis"],
    ["⚙", "Configurações"],
  ];

  const videos = ["Distribuição", "Idoso", "Roupas", "Cachorro", "Aula", "Cestas"];

  return (
    <main className="min-h-screen overflow-hidden bg-[#07100f] text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
      <div className="fixed inset-0 bg-black/35" />

      <section className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="relative h-[860px] w-full max-w-[1420px] overflow-hidden rounded-[34px] border border-white/15 bg-black/15 shadow-[0_40px_140px_rgba(0,0,0,0.7)] backdrop-blur-[2px]">
          <header className="absolute left-10 top-8 flex items-center gap-3">
            <div className="text-4xl font-black">M</div>
            <div>
              <h1 className="text-sm font-bold tracking-widest">MONEY IS OVER</h1>
              <p className="text-[10px] text-white/60">Sua voz tem valor.</p>
            </div>
          </header>

          <div className="absolute left-10 top-[125px] flex w-[58px] flex-col gap-3 rounded-3xl border border-white/10 bg-black/45 p-2 backdrop-blur-xl">
            {menu.map((item, i) => (
              <button
                key={i}
                className={`flex h-11 w-11 items-center justify-center rounded-2xl text-lg ${
                  i === 0 ? "bg-emerald-400 text-black" : "bg-white/5 text-white/80"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="absolute left-[390px] top-9 w-[620px] rounded-full border border-white/10 bg-black/55 px-6 py-4 text-sm text-white/50 backdrop-blur-xl">
            Buscar pessoas, tópicos, vídeos, comunidades...
            <span className="absolute right-6 top-4 text-white">⌕</span>
          </div>

          <div className="absolute right-10 top-8 flex gap-4">
            {["☼", "♧", "✉"].map((i) => (
              <button key={i} className="h-11 w-11 rounded-full border border-white/10 bg-black/40">
                {i}
              </button>
            ))}
            <div className="h-12 w-12 rounded-full border border-white/20 bg-white/20 text-center text-2xl">
              👨
            </div>
          </div>

          <Box className="left-[140px] top-[110px] h-[96px] w-[250px]">
            <div className="flex items-center justify-between">
              <p className="text-4xl font-bold">{time}</p>
              <span className="rounded-full bg-white/10 px-3 py-2">◴</span>
            </div>
            <p className="mt-2 text-xs text-white/60">Sábado, 24 de Maio</p>
          </Box>

          <Box className="left-[410px] top-[110px] h-[145px] w-[300px]">
            <div className="flex items-center gap-4">
              <span className="text-5xl">⛅</span>
              <div>
                <p className="text-4xl font-bold">28°C</p>
                <p className="text-xs text-white/70">Parcialmente nublado</p>
                <p className="text-xs text-white/50">São Paulo, SP</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 text-xs text-white/65">
              <span>Sensação<br /><b>29°C</b></span>
              <span>Umidade<br /><b>60%</b></span>
              <span>Vento<br /><b>12 km/h</b></span>
            </div>
          </Box>

          <Box className="left-[790px] top-[115px] h-[96px] w-[300px]">
            <div className="flex justify-between">
              <b className="text-sm">Próximo compromisso</b>
              <button className="text-xs text-emerald-300">Ver todos</button>
            </div>
            <p className="mt-3 text-sm">Reunião com a equipe</p>
            <p className="text-xs text-white/55">Hoje às 15:00</p>
          </Box>

          <Box className="right-[110px] top-[120px] h-[160px] w-[300px]">
            <div className="flex justify-between">
              <b className="text-sm">Moedas da Comunidade</b>
              <button className="text-xs text-emerald-300">Ver gráfico</button>
            </div>
            <p className="mt-5 text-4xl font-bold">1.284 <span className="text-sm text-emerald-300">+18%</span></p>
            <p className="text-xs text-white/60">Total distribuído hoje</p>
            <div className="mt-4 h-10 rounded-xl bg-gradient-to-r from-emerald-400/10 via-cyan-400/30 to-emerald-400/60" />
          </Box>

          <Box className="left-[140px] top-[275px] h-[175px] w-[380px]">
            <p className="text-sm text-white/65">Bem-vindo ao</p>
            <h2 className="mt-1 text-3xl font-bold">
              Money <span className="text-emerald-300">Is Over</span>
            </h2>
            <p className="mt-4 text-sm text-white/70">
              Mais que uma plataforma. Um novo jeito de conectar, ajudar e crescer.
            </p>
            <div className="mt-5 flex gap-3">
              <button className="rounded-full bg-emerald-400 px-5 py-3 text-xs font-bold text-black">
                ✎ Criar Desabafo
              </button>
              <button className="rounded-full border border-white/15 px-5 py-3 text-xs">
                ▻ Enviar Vídeo
              </button>
            </div>
          </Box>

          <Box className="left-[555px] top-[285px] h-[180px] w-[300px]">
            <div className="flex justify-between">
              <b className="text-sm">Music system</b>
              <span className="rounded-full bg-emerald-400 px-4 py-2" />
            </div>
            <div className="mx-auto mt-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-black text-sm">
              JUNGLE
            </div>
            <div className="mt-3 flex justify-between text-xs">
              <span className="text-emerald-300">Back On 74</span>
              <span>⏮ ▶ ⏭</span>
            </div>
          </Box>

          <Box className="right-[110px] top-[305px] h-[220px] w-[310px]">
            <div className="mb-3 flex justify-between">
              <b className="text-sm">Atividade da Comunidade</b>
              <button className="text-xs text-emerald-300">Ver tudo</button>
            </div>
            {["Mariana respondeu sua pergunta", "João ganhou +2 moedas", "Vídeo aprovado: Doação de roupas", "Ana publicou um novo desabafo", "Carlos entrou na comunidade"].map((a, i) => (
              <div key={a} className="flex justify-between border-b border-white/10 py-2 text-xs">
                <span>{["👩", "🟣", "🟢", "👩‍🦰", "👨"][i]} {a}</span>
                <span className="text-white/45">há {i + 1}h</span>
              </div>
            ))}
          </Box>

          <Box className="left-[140px] top-[480px] h-[245px] w-[380px]">
            <div className="mb-3 flex justify-between">
              <b className="text-sm">Discussões em Destaque</b>
              <button className="text-xs text-emerald-300">Ver todas</button>
            </div>
            {discussions.map((d) => (
              <div key={d[1]} className="grid grid-cols-[34px_1fr_45px_35px] items-center border-b border-white/10 py-2 text-xs">
                <span className="text-xl">{d[0]}</span>
                <span>{d[1]}</span>
                <span>💬 {d[2]}</span>
                <b className="text-emerald-300">{d[3]}</b>
              </div>
            ))}
          </Box>

          <Box className="left-[545px] top-[500px] h-[260px] w-[430px] p-2">
            <div className="grid grid-cols-4 gap-1">
              {actions.map(([icon, label]) => (
                <button key={label} className="h-[60px] rounded-xl border border-white/10 bg-black/25 text-[11px] hover:bg-white/10">
                  <span className="mb-1 block text-xl text-emerald-300">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </Box>

          <Box className="left-[110px] bottom-[70px] h-[150px] w-[500px]">
            <div className="mb-3 flex justify-between">
              <b className="text-sm">Vídeos de Ajuda Recentes</b>
              <button className="text-xs text-emerald-300">Ver todos</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {videos.map((v, i) => (
                <div key={v} className="overflow-hidden rounded-xl bg-white/10">
                  <div className="relative flex h-70 items-center justify-center bg-emerald-400/10 text-xl">
                    ▶
                    <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1 text-[9px]">0{i + 1}:4{i}</span>
                  </div>
                  <p className="p-1 text-[10px]">{v}</p>
                  <p className="px-1 pb-1 text-[10px] text-emerald-300">+2 moedas</p>
                </div>
              ))}
            </div>
          </Box>

          <Box className="left-[630px] bottom-[70px] h-[150px] w-[350px]">
            <div className="mb-2 flex justify-between">
              <b className="text-sm">Lembretes e Compromissos</b>
              <button className="text-xs text-emerald-300">Ver agenda</button>
            </div>
            {[
              ["Reunião com a equipe", "15:00"],
              ["Enviar relatório mensal", "17:30"],
              ["Treino na academia", "19:00"],
              ["Dentista", "09:00"],
            ].map((r) => (
              <div key={r[0]} className="flex justify-between border-b border-white/10 py-1.5 text-xs">
                <span>{r[0]}</span>
                <span className="text-white/55">{r[1]}</span>
              </div>
            ))}
            <button className="mt-2 text-xs text-emerald-300">+ Adicionar lembrete</button>
          </Box>

          <Box className="right-[110px] bottom-[70px] h-[165px] w-[250px]">
            <div className="mb-3 flex justify-between">
              <button>‹</button>
              <b className="text-sm">Maio 2025</b>
              <button>›</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[11px]">
              {["D","S","T","Q","Q","S","S",27,28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((d, i) => (
                <span key={i} className={`rounded-full py-1 ${d === 24 ? "bg-emerald-400 text-black" : "text-white/75"}`}>
                  {d}
                </span>
              ))}
            </div>
          </Box>

          <div className="absolute bottom-5 left-10 flex w-[220px] items-center gap-3 rounded-2xl border border-white/10 bg-black/45 p-3 text-xs backdrop-blur-xl">
            <button className="h-8 w-8 rounded-full bg-white/10">‹</button>
            <span className="text-2xl">◉</span>
            <div>
              <b>Home Cinema</b>
              <p className="text-white/50">Câmera on</p>
            </div>
          </div>

          <div className="absolute bottom-5 right-[390px] flex gap-3">
            {["Lighting", "Vacuum Cleaner", "Ar Condicionado"].map((x, i) => (
              <div key={x} className="flex w-[180px] items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-4 py-3 text-xs backdrop-blur-xl">
                <span>{x}</span>
                <span className={`h-5 w-9 rounded-full ${i === 0 ? "bg-emerald-400" : "bg-white/20"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Box({
  children,
  className = "",
  p = "p-5",
}: {
  children: React.ReactNode;
  className?: string;
  p?: string;
}) {
  return (
    <div
      className={`absolute rounded-[24px] border border-white/12 bg-black/55 ${p} shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl ${className}`}
    >
      {children}
    </div>
  );
}
