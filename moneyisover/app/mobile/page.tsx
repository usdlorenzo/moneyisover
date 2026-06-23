"use client";

import { useEffect, useState } from "react";

export default function MobileHome() {
const autoResize = (
  e: React.FormEvent<HTMLTextAreaElement>
) => {
const [postText, setPostText] = useState("");
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState("28");

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

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
        );

        const data = await res.json();
        setWeather(Math.round(data.current.temperature_2m).toString());
      } catch {}
    });
  }, []);

  const discussions = [
    ["💼", "Estou pensando em mudar de carreira", "Preciso de opiniões sinceras de quem já passou por isso.", "42 respostas"],
    ["💔", "Meu relacionamento terminou", "Quero desabafar e ouvir experiências reais.", "28 respostas"],
    ["🧠", "Como vencer a procrastinação?", "Sinto que repito os mesmos erros todos os dias.", "19 respostas"],
    ["💸", "Estou perdido financeiramente", "Como vocês começariam do zero?", "36 respostas"],
    ["🚀", "Vale a pena abrir empresa?", "Tenho medo de largar a segurança e tentar algo próprio.", "51 respostas"],
    ["🎓", "Faculdade ainda compensa?", "Com IA e cursos online, fico em dúvida se vale o investimento.", "33 respostas"],
    ["❤️", "Como lidar com rejeição?", "Sinto que isso mexe muito com minha autoestima.", "67 respostas"],
    ["🏙️", "Mudar de cidade muda a vida?", "Penso em recomeçar em outro lugar.", "24 respostas"],
    ["📚", "Como estudar com foco?", "Começo motivado e desisto rápido.", "18 respostas"],
    ["⚖️", "Empreender ou CLT?", "O que vocês fariam se estivessem começando agora?", "44 respostas"],
    ["🧩", "Como entender melhor minhas emoções?", "Às vezes eu reajo antes de pensar.", "31 respostas"],
    ["💬", "Preciso de uma opinião sincera", "Estou confuso sobre uma decisão importante.", "22 respostas"],
    ["🪙", "Como ganhar mais dinheiro?", "Quero sair do básico e construir algo maior.", "58 respostas"],
    ["🌱", "Como começar do zero?", "Sinto que perdi muito tempo.", "73 respostas"],
    ["🔥", "Como manter disciplina?", "Tenho energia no começo e depois abandono.", "39 respostas"],
    ["👥", "Como fazer amigos adultos?", "Depois de certa idade parece mais difícil.", "27 respostas"],
    ["🧘", "Como controlar ansiedade?", "Minha mente não para.", "46 respostas"],
    ["🎥", "Criar conteúdo vale a pena?", "Tenho ideias, mas medo de aparecer.", "21 respostas"],
    ["🧠", "Metacognição funciona mesmo?", "Quero aprender a pensar melhor.", "17 respostas"],
    ["🌎", "Trabalhar remoto é possível?", "Quero mudar minha vida nos próximos anos.", "62 respostas"],
  ];

  const videos = [
    "Distribuição de alimentos",
    "Ajuda a idoso",
    "Doação de roupas",
    "Aula gratuita",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <style jsx global>{`
        @keyframes softPulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 rgba(52, 211, 153, 0);
          }
          50% {
            transform: scale(1.035);
            box-shadow: 0 0 22px rgba(52, 211, 153, 0.35);
          }
        }

        @keyframes tinyFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes glowBorder {
          0%, 100% {
            box-shadow: 0 0 18px rgba(52, 211, 153, 0.22);
          }
          50% {
            box-shadow: 0 0 34px rgba(52, 211, 153, 0.48);
          }
        }

        .nobank-action {
          animation: softPulse 2.2s infinite ease-in-out;
        }

        .nobank-float {
          animation: tinyFloat 1.8s infinite ease-in-out;
        }

        .nobank-highlight {
          animation: glowBorder 2.4s infinite ease-in-out;
        }
      `}</style>

      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fundo.png')",
        }}
      />

      <div className="fixed inset-0 bg-black/45" />

      <section className="relative z-10 mx-auto max-w-md px-4 pb-24 pt-5">
        <header className="mb-5 flex items-center justify-between">
          <div>
       <img
  src="/logo.png"
  alt="Money Is Over"
  className="w-full max-w-[320px] mx-auto object-contain"
/>
           <p className="mt-2 max-w-[250px] rounded-2xl border border-emerald-300/40 bg-black/80 px-3 py-2 text-[13px] font-black leading-5 text-emerald-200 shadow-[0_0_22px_rgba(52,211,153,0.35)] backdrop-blur-xl">
  Ajude ou Peça Ajuda e Ganhe Moedas para trocar por produtos ou serviços, uma
  nova forma de adquirir coisas.
</p>
          </div>

          <div className="rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs backdrop-blur-md">
            {time}
          </div>
        </header>

        <div className="mb-4 rounded-[28px] border border-emerald-300/40 bg-gradient-to-br from-emerald-400/25 via-black/75 to-black/85 p-5 backdrop-blur-md nobank-highlight">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Nobank Coin
          </p>

          <h2 className="mt-2 text-2xl font-black leading-tight">
            Você não está sozinho(a)
          </h2>

          <p className="mt-3 text-base font-semibold leading-6 text-white">
            Peça ajuda, desabafe, nossa comunidade vai ajudar você!
          </p>

          <p className="mt-3 text-sm leading-6 text-white/70">
            Cada postagem ou resposta útil gera +1 Nobank Coin. Vídeos de ajuda
            aprovados geram +2.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="nobank-action rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-bold text-black">
              Peça ajuda
            </button>

            <button className="nobank-float rounded-2xl border border-emerald-300/30 bg-white/10 px-4 py-3 text-sm font-bold">
              Enviar vídeo
            </button>
          </div>
        </div>

        <section className="mb-4 rounded-[28px] border border-white/10 bg-black/60 p-4 backdrop-blur-md">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold">Discussões</h3>
            <button className="text-xs text-emerald-300">Ver todas</button>
          </div>

          <div className="mb-4 rounded-3xl border border-emerald-300/30 bg-emerald-400/10 p-4">
            <p className="mb-3 text-xl font-black text-emerald-300">
              Escreva Aqui....
            </p>
<textarea
  value={postText}
  onChange={(e) => setPostText(e.target.value)}
  rows={Math.max(3, postText.split("\n").length)}
  className="..."
/>

            <button className="nobank-action mt-3 w-full rounded-2xl bg-emerald-400 py-3 text-sm font-bold text-black">
              Enviar e ganhar +1 Nobank Coin
            </button>
          </div>

          <div className="space-y-3">
            {discussions.map((item) => (
              <article
                key={item[1]}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex gap-3">
                  <span className="text-2xl">{item[0]}</span>

                  <div className="w-full">
                    <h4 className="font-bold">{item[1]}</h4>
                    <p className="mt-1 text-sm leading-5 text-white/60">
                      {item[2]}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="text-white/45">{item[3]}</span>
                      <span className="text-emerald-300">+1 Nobank Coin</span>
                    </div>

                    <button className="nobank-action mt-3 w-full rounded-2xl bg-emerald-400 px-4 py-3 text-xs font-black text-black">
                      Responda e ganhe 1 Nobank Coin
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-4 rounded-[28px] border border-white/10 bg-black/60 p-4 backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-bold">TV Money Is Over</h3>
            <button className="text-xs text-emerald-300">Ver todos</button>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/50">
            <video
              className="h-56 w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />

            <div className="p-3">
              <p className="text-sm font-bold">Ação em destaque</p>
              <p className="text-xs text-white/55">
                Vídeo automático sem som • +2 Nobank Coins
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {videos.map((video) => (
              <div
                key={video}
                className="rounded-2xl border border-white/10 bg-white/5 p-3"
              >
                <div className="mb-2 flex h-20 items-center justify-center rounded-xl bg-emerald-400/10 text-2xl">
                  ▶
                </div>
                <p className="text-xs font-bold">{video}</p>
                <button className="nobank-action mt-2 w-full rounded-xl bg-emerald-400 py-2 text-[11px] font-bold text-black">
                  Assistir +2 Coins
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4 rounded-[28px] border border-white/10 bg-black/60 p-5 backdrop-blur-md">
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
            Curso do dia
          </p>

          <h3 className="mt-2 text-xl font-black">Cursos Únicos</h3>

          <p className="mt-3 text-sm leading-6 text-white/65">
            Você sabia que sem treinar metacognição você repete os mesmos erros?
          </p>

          <button className="nobank-action mt-4 w-full rounded-2xl bg-emerald-400 px-5 py-3 text-sm font-bold text-black">
            Assistir aula
          </button>
        </section>
      </section>

      <nav className="fixed bottom-4 left-1/2 z-20 flex w-[92%] max-w-md -translate-x-1/2 justify-between rounded-full border border-white/10 bg-black/75 px-5 py-3 backdrop-blur-xl">
        {["⌂", "💬", "▶", "🎓", "👤"].map((item, i) => (
          <button
            key={item}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-lg ${
              i === 0 ? "bg-emerald-400 text-black" : "text-white/70"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </main>
  );
}
