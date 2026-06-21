"use client";

import { useEffect, useState } from "react";

type BoxKey =
  | "time"
  | "weather"
  | "prices"
  | "hero"
  | "courses"
  | "discussions"
  | "actions"
  | "videos"
  | "reminders"
  | "calendar";

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [dragging, setDragging] = useState<BoxKey | null>(null);
  const [prices, setPrices] = useState({ btc: "...", eth: "..." });
  const [weather, setWeather] = useState({
    temp: "28",
    city: "Localização",
    desc: "Clima local",
  });

  const [positions, setPositions] = useState<Record<BoxKey, { x: number; y: number }>>({
    time: { x: 120, y: 95 },
    weather: { x: 330, y: 95 },
    prices: { x: 1100, y: 95 },
    hero: { x: 120, y: 235 },
    courses: { x: 520, y: 235 },
    discussions: { x: 120, y: 415 },
    actions: { x: 560, y: 430 },
    videos: { x: 120, y: 650 },
    reminders: { x: 670, y: 650 },
    calendar: { x: 1080, y: 650 },
  });

  useEffect(() => {
    const clock = setInterval(() => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setDate(
        now.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "2-digit",
          month: "long",
        })
      );
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  useEffect(() => {
    async function loadPrices() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await res.json();

        setPrices({
          btc: Number(data.bitcoin.usd).toLocaleString("en-US"),
          eth: Number(data.ethereum.usd).toLocaleString("en-US"),
        });
      } catch {
        setPrices({ btc: "erro", eth: "erro" });
      }
    }

    loadPrices();
    const timer = setInterval(loadPrices, 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
        );

        const data = await res.json();

        setWeather({
          temp: Math.round(data.current.temperature_2m).toString(),
          city: "Sua localização",
          desc: "Clima atualizado",
        });
      } catch {
        setWeather({
          temp: "28",
          city: "Localização",
          desc: "Clima indisponível",
        });
      }
    });
  }, []);

  function startDrag(key: BoxKey, e: React.MouseEvent<HTMLDivElement>) {
    setDragging(key);

    const startX = e.clientX;
    const startY = e.clientY;
    const initial = positions[key];

    function move(ev: MouseEvent) {
      setPositions((prev) => ({
        ...prev,
        [key]: {
          x: initial.x + ev.clientX - startX,
          y: initial.y + ev.clientY - startY,
        },
      }));
    }

    function stop() {
      setDragging(null);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  }

  const discussions = [
    ["💼", "Estou pensando em mudar de carreira", "15", "+1"],
    ["🚀", "Vale a pena abrir empresa?", "42", "+1"],
    ["🧠", "Como vencer a procrastinação?", "19", "+1"],
    ["🎓", "Faculdade ainda compensa?", "31", "+1"],
    ["⚖️", "Empreender ou CLT?", "44", "+1"],
    ["💸", "Estou perdido financeiramente", "36", "+1"],
  ];

  const actions = [
    ["✎", "Criar Desabafo"],
    ["?", "Perguntar"],
    ["↩", "Responder"],
    ["▶", "Vídeos"],
    ["▧", "Meus Posts"],
    ["▣", "Meus Vídeos"],
    ["↺", "Histórico"],
    ["♕", "Conquistas"],
    ["♚", "Amigos"],
    ["◴", "Eventos"],
    ["▤", "Carteira"],
    ["⚙", "Config"],
  ];

  const videos = ["Distribuição", "Idoso", "Roupas", "Cachorro", "Aula", "Cestas"];

  const now = new Date();
  const monthName = now.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  const today = now.getDate();

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
  <div
  className="fixed inset-0 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90')",
  }}
/>
      <div className="fixed inset-0 bg-black/45" />

      <section className="relative z-10 flex min-h-screen items-center justify-center p-5">
        <div className="relative h-[850px] w-full max-w-[1450px] overflow-hidden rounded-[34px] border border-white/15 bg-black/10 shadow-[0_40px_140px_rgba(0,0,0,0.8)] backdrop-blur-[2px]">
          <header className="absolute left-10 top-8 flex items-center gap-3">
            <div className="text-4xl font-black">M</div>
            <div>
              <h1 className="text-sm font-bold tracking-widest">MONEY IS OVER</h1>
              <p className="text-[10px] text-white/60">Sua voz tem valor.</p>
            </div>
          </header>

          <div className="absolute left-[390px] top-9 w-[620px] rounded-full border border-white/10 bg-black/65 px-6 py-4 text-sm text-white/50">
            Buscar pessoas, tópicos, vídeos, comunidades...
            <span className="absolute right-6 top-4 text-white">⌕</span>
          </div>

          <div className="absolute right-10 top-8 flex gap-4">
            {["☼", "♧", "✉", "👨"].map((i) => (
              <button key={i} className="h-11 w-11 rounded-full border border-white/10 bg-black/50">
                {i}
              </button>
            ))}
          </div>

          <div className="absolute left-10 top-[120px] flex w-[58px] flex-col gap-3 rounded-3xl border border-white/10 bg-black/55 p-2">
            {["⌂", "▦", "▶", "$", "▥", "♚", "◴", "✉", "⚙"].map((item, i) => (
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

          <Box pos={positions.time} onMouseDown={(e) => startDrag("time", e)} w="230px" h="100px">
            <div className="flex justify-between">
              <p className="text-4xl font-bold">{time}</p>
              <span>◴</span>
            </div>
            <p className="mt-2 text-xs text-white/60 capitalize">{date}</p>
          </Box>

          <Box pos={positions.weather} onMouseDown={(e) => startDrag("weather", e)} w="300px" h="135px">
            <div className="flex items-center gap-4">
              <span className="text-5xl">⛅</span>
              <div>
                <p className="text-4xl font-bold">{weather.temp}°C</p>
                <p className="text-xs text-white/70">{weather.desc}</p>
                <p className="text-xs text-white/50">{weather.city}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 text-xs text-white/65">
              <span>Sensação<br /><b>{Number(weather.temp) + 1}°C</b></span>
              <span>Umidade<br /><b>60%</b></span>
              <span>Vento<br /><b>12 km/h</b></span>
            </div>
          </Box>

          <Box pos={positions.prices} onMouseDown={(e) => startDrag("prices", e)} w="280px" h="175px">
            <div className="flex justify-between">
              <b className="text-sm">Cotações</b>
              <span className="text-xs text-emerald-300">tempo real</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p>₿ Bitcoin: <b>${prices.btc}</b></p>
              <p>◆ Ethereum: <b>${prices.eth}</b></p>
              <p>MIO Coin: <b className="text-emerald-300">fase de lançamento</b></p>
            </div>
          </Box>

          <Box pos={positions.hero} onMouseDown={(e) => startDrag("hero", e)} w="360px" h="165px">
            <p className="text-sm text-white/65">Bem-vindo ao</p>
            <h2 className="mt-1 text-3xl font-bold">
              Money <span className="text-emerald-300">Is Over</span>
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Conecte, opine, ajude e ganhe moedas.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-full bg-emerald-400 px-5 py-3 text-xs font-bold text-black">
                Criar Desabafo
              </button>
              <button className="rounded-full border border-white/15 px-5 py-3 text-xs">
                Enviar Vídeo
              </button>
            </div>
          </Box>

          <Box pos={positions.courses} onMouseDown={(e) => startDrag("courses", e)} w="380px" h="175px">
            <b className="text-sm">Cursos Únicos</b>
            <p className="mt-3 text-xs text-white/75">
              Você sabia que sem treinar metacognição você repete os mesmos erros?
            </p>
            <p className="mt-3 text-xs text-white/75">
              O córtex pré-frontal é sua capacidade de tomar decisões racionais — e precisa ser treinado.
            </p>
            <button className="mt-4 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-black">
              Ver cursos
            </button>
          </Box>

          <Box pos={positions.discussions} onMouseDown={(e) => startDrag("discussions", e)} w="430px" h="255px">
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

          <Box pos={positions.actions} onMouseDown={(e) => startDrag("actions", e)} w="390px" h="225px" p="p-2">
            <div className="grid grid-cols-4 gap-1">
              {actions.map(([icon, label]) => (
                <button key={label} className="h-[66px] rounded-xl border border-white/10 bg-black/25 text-[11px] hover:bg-white/10">
                  <span className="mb-1 block text-xl text-emerald-300">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </Box>

          <Box pos={positions.videos} onMouseDown={(e) => startDrag("videos", e)} w="540px" h="170px">
            <div className="mb-3 flex justify-between">
              <b className="text-sm">Vídeos de Ajuda Recentes</b>
              <button className="text-xs text-emerald-300">Ver todos</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {videos.map((v, i) => (
                <div key={v} className="overflow-hidden rounded-xl bg-white/10">
                  <div className="relative flex h-[75px] items-center justify-center bg-emerald-400/10 text-xl">
                    ▶
                    <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1 text-[9px]">
                      0{i + 1}:4{i}
                    </span>
                  </div>
                  <p className="p-1 text-[10px]">{v}</p>
                  <p className="px-1 pb-1 text-[10px] text-emerald-300">+2 moedas</p>
                </div>
              ))}
            </div>
          </Box>

          <Box pos={positions.reminders} onMouseDown={(e) => startDrag("reminders", e)} w="360px" h="170px">
            <div className="mb-2 flex justify-between">
              <b className="text-sm">Lembretes</b>
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
          </Box>

        <Box pos={positions.calendar} onMouseDown={(e) => startDrag("calendar", e)} w="285px" h="215px">
  <div className="mb-3 flex justify-between">
    <button>‹</button>
    <b className="text-sm capitalize">{monthName}</b>
    <button>›</button>
  </div>

  <div className="grid grid-cols-7 gap-1 text-center text-[10px]">
    {["D","S","T","Q","Q","S","S",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((d, i) => (
      <span
        key={i}
        className={`rounded-full py-[3px] ${
          d === today ? "bg-emerald-400 text-black" : "text-white/75"
        }`}
      >
        {d}
      </span>
    ))}
  </div>
</Box>
        </div>
      </section>
    </main>
  );
}

function Box({
  children,
  pos,
  onMouseDown,
  w,
  h,
  p = "p-5",
}: {
  children: React.ReactNode;
  pos: { x: number; y: number };
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  w: string;
  h: string;
  p?: string;
}) {
  return (
    <div
      onMouseDown={onMouseDown}
      style={{
        left: pos.x,
        top: pos.y,
        width: w,
        height: h,
        cursor: "move",
      }}
      className={`absolute rounded-[24px] border border-white/12 bg-black/65 ${p} shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl`}
    >
      {children}
    </div>
  );
}
