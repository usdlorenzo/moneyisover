"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

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

type Position = { x: number; y: number };

const initialPositions: Record<BoxKey, Position> = {
  time: { x: 115, y: 90 },
  weather: { x: 320, y: 90 },
  reminders: { x: 625, y: 90 },
  prices: { x: 1055, y: 90 },
  hero: { x: 115, y: 220 },
  courses: { x: 520, y: 220 },
  actions: { x: 940, y: 245 },
  discussions: { x: 115, y: 435 },
  videos: { x: 620, y: 455 },
  calendar: { x: 1085, y: 520 },
};

const initialZ: Record<BoxKey, number> = {
  time: 10,
  weather: 11,
  reminders: 12,
  prices: 13,
  hero: 14,
  courses: 15,
  actions: 16,
  discussions: 17,
  videos: 18,
  calendar: 19,
};

export default function Home() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [prices, setPrices] = useState({ btc: "...", eth: "..." });
  const [weather, setWeather] = useState({
    temp: "28",
    city: "Localização",
    desc: "Clima local",
  });

  const [positions, setPositions] = useState<Record<BoxKey, Position>>(initialPositions);
  const [zIndexes, setZIndexes] = useState<Record<BoxKey, number>>(initialZ);

  useEffect(() => {
    const saved = localStorage.getItem("moneyisover-layout-v4");
    const savedZ = localStorage.getItem("moneyisover-z-v4");

    if (saved) {
      try {
        setPositions({ ...initialPositions, ...JSON.parse(saved) });
      } catch {}
    }

    if (savedZ) {
      try {
        setZIndexes({ ...initialZ, ...JSON.parse(savedZ) });
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("moneyisover-layout-v4", JSON.stringify(positions));
  }, [positions]);

  useEffect(() => {
    localStorage.setItem("moneyisover-z-v4", JSON.stringify(zIndexes));
  }, [zIndexes]);

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
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
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

  function bringToFront(key: BoxKey) {
    setZIndexes((prev) => {
      const highest = Math.max(...Object.values(prev));
      return { ...prev, [key]: highest + 1 };
    });
  }

  function startDrag(key: BoxKey, e: MouseEvent<HTMLDivElement>) {
    bringToFront(key);

    const target = e.target as HTMLElement;
    if (["BUTTON", "INPUT", "TEXTAREA", "VIDEO"].includes(target.tagName)) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const initial = positions[key];

    function move(ev: globalThis.MouseEvent) {
      setPositions((prev) => ({
        ...prev,
        [key]: {
          x: initial.x + ev.clientX - startX,
          y: initial.y + ev.clientY - startY,
        },
      }));
    }

    function stop() {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
  }

  function resetLayout() {
    localStorage.removeItem("moneyisover-layout-v4");
    localStorage.removeItem("moneyisover-z-v4");
    setPositions(initialPositions);
    setZIndexes(initialZ);
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
    ["✎", "Criar"],
    ["?", "Perguntar"],
    ["↩", "Responder"],
    ["▶", "Vídeos"],
    ["▧", "Posts"],
    ["▣", "Vídeos"],
    ["↺", "Histórico"],
    ["♕", "Conquistas"],
    ["♚", "Amigos"],
    ["◴", "Eventos"],
    ["▤", "Carteira"],
    ["⚙", "Config"],
  ];

  const videos = ["Distribuição", "Idoso", "Roupas", "Cachorro", "Aula", "Cestas"];

  const now = new Date();
  const monthName = now.toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });
  const today = now.getDate();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const calendarDays = [
    ...Array(firstDay).fill(""),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fundo.png')" }}
      />
      <div className="fixed inset-0 bg-black/10" />

      <section className="relative z-10 min-h-screen p-4 lg:flex lg:items-center lg:justify-center">
        <div className="relative mx-auto min-h-screen w-full max-w-[1450px] overflow-visible rounded-[34px] border border-white/15 bg-black/5 p-4 shadow-[0_40px_140px_rgba(0,0,0,0.8)] backdrop-blur-[1px] lg:h-[850px] lg:min-h-0 lg:overflow-hidden">
          <header className="mb-4 flex items-center gap-3 lg:absolute lg:left-10 lg:top-8">
            <div className="text-4xl font-black">M</div>
            <div>
              <h1 className="text-sm font-bold tracking-widest">MONEY IS OVER</h1>
              <p className="text-[10px] text-white/60">Sua voz tem valor.</p>
            </div>
          </header>

          <div className="mb-4 rounded-full border border-white/10 bg-black/55 px-6 py-4 text-sm text-white/50 lg:absolute lg:left-[390px] lg:top-9 lg:w-[620px]">
            Buscar pessoas, tópicos, vídeos, comunidades...
            <span className="float-right text-white">⌕</span>
          </div>

          <div className="mb-4 flex gap-3 lg:absolute lg:right-10 lg:top-8 lg:z-[9999]">
            {["☼", "♧", "✉", "👨"].map((i) => (
              <button key={i} className="h-11 w-11 rounded-full border border-white/10 bg-black/45">
                {i}
              </button>
            ))}
            <button
              onClick={resetLayout}
              className="rounded-full border border-white/10 bg-black/45 px-4 text-xs text-emerald-300"
            >
              Reset
            </button>
          </div>

          <div className="mb-4 flex gap-2 overflow-x-auto rounded-3xl border border-white/10 bg-black/55 p-2 lg:absolute lg:left-10 lg:top-[120px] lg:z-[9999] lg:w-[58px] lg:flex-col">
            {["⌂", "▦", "▶", "$", "▥", "♚", "◴", "✉", "⚙"].map((item, i) => (
              <button
                key={i}
                className={`flex h-11 min-w-11 items-center justify-center rounded-2xl text-lg ${
                  i === 0 ? "bg-emerald-400 text-black" : "bg-white/5 text-white/80"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <Box pos={positions.time} z={zIndexes.time} onMouseDown={(e) => startDrag("time", e)} w="180px" h="90px">
            <div className="flex justify-between">
              <p className="text-3xl font-bold">{time}</p>
              <span>◴</span>
            </div>
            <p className="mt-2 text-[11px] text-white/60 capitalize">{date}</p>
          </Box>

          <Box pos={positions.weather} z={zIndexes.weather} onMouseDown={(e) => startDrag("weather", e)} w="245px" h="128px">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⛅</span>
              <div>
                <p className="text-3xl font-bold">{weather.temp}°C</p>
                <p className="text-[11px] text-white/70">{weather.desc}</p>
                <p className="text-[11px] text-white/50">{weather.city}</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-[10px] text-white/65">
              <span>Sensação<br /><b>{Number(weather.temp) + 1}°C</b></span>
              <span>Umidade<br /><b>60%</b></span>
              <span>Vento<br /><b>12 km/h</b></span>
            </div>
          </Box>

          <Box pos={positions.reminders} z={zIndexes.reminders} onMouseDown={(e) => startDrag("reminders", e)} w="330px" h="175px">
            <div className="h-full overflow-y-auto pr-1">
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
            </div>
          </Box>

          <Box pos={positions.prices} z={zIndexes.prices} onMouseDown={(e) => startDrag("prices", e)} w="240px" h="160px">
            <div className="flex justify-between">
              <b className="text-sm">Cotações</b>
              <span className="text-xs text-emerald-300">tempo real</span>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p>₿ Bitcoin: <b>${prices.btc}</b></p>
              <p>◆ Ethereum: <b>${prices.eth}</b></p>
              <p>Nobank Coin: <b className="text-emerald-300">lançamento</b></p>
            </div>
          </Box>

          <Box pos={positions.hero} z={zIndexes.hero} onMouseDown={(e) => startDrag("hero", e)} w="370px" h="250px">
            <div className="h-full overflow-y-auto pr-1">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">Sua casa digital</p>
              <h2 className="mt-2 text-3xl font-black leading-tight">
                Money <span className="text-emerald-300">Is Over</span>
              </h2>
              <p className="mt-3 max-w-[310px] text-sm leading-5 text-white/70">
                Aprenda, ajude pessoas, participe da comunidade e ganhe Nobank Coin.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/55">
                <span>🔥 127 pessoas ajudadas hoje</span>
                <span>🪙 2.341 Nobank Coins</span>
              </div>
              <div className="mt-4 flex gap-3">
                <button className="rounded-full bg-emerald-400 px-5 py-3 text-xs font-bold text-black">
                  Criar Desabafo
                </button>
                <button className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs text-white/85">
                  Enviar Vídeo
                </button>
              </div>
            </div>
          </Box>

          <Box pos={positions.courses} z={zIndexes.courses} onMouseDown={(e) => startDrag("courses", e)} w="365px" h="215px">
            <div className="h-full overflow-y-auto pr-1">
              <b className="text-sm">Cursos Únicos</b>
              <p className="mt-3 text-xs leading-5 text-white/75">
                Você sabia que sem treinar metacognição você repete os mesmos erros?
              </p>
              <p className="mt-2 text-xs leading-5 text-white/75">
                O córtex pré-frontal precisa ser treinado para decisões racionais.
              </p>
              <button className="mt-3 rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-black">
                Ver cursos
              </button>
            </div>
          </Box>

          <Box pos={positions.actions} z={zIndexes.actions} onMouseDown={(e) => startDrag("actions", e)} w="330px" h="205px" p="p-2">
            <div className="grid h-full grid-cols-4 gap-1">
              {actions.map(([icon, label]) => (
                <button key={label} className="rounded-xl border border-white/10 bg-black/25 text-[10px] hover:bg-white/10">
                  <span className="mb-1 block text-lg text-emerald-300">{icon}</span>
                  {label}
                </button>
              ))}
            </div>
          </Box>

          <Box pos={positions.discussions} z={zIndexes.discussions} onMouseDown={(e) => startDrag("discussions", e)} w="500px" h="390px">
            <div className="h-full overflow-hidden">
              <div className="mb-3 flex justify-between">
                <b className="text-sm">Discussões em Destaque</b>
                <button className="text-xs text-emerald-300">Ver todas</button>
              </div>
              <div className="mb-3 rounded-2xl border border-white/10 bg-black/35 p-3">
                <p className="mb-2 text-xs font-bold text-white/80">
                  Peça ajuda, desabafe, peça opinião, escreva algo...
                </p>
                <div className="flex gap-2">
                  <input
                    placeholder="Digite sua postagem..."
                    className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs outline-none placeholder:text-white/35"
                  />
                  <button className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-black">
                    Enviar
                  </button>
                </div>
                <p className="mt-2 text-[11px] text-emerald-300">
                  Cada postagem você ganha +1 Nobank Coin.
                </p>
              </div>
              <div className="h-[210px] overflow-y-auto pr-1">
                {discussions.map((d) => (
                  <div key={d[1]} className="grid grid-cols-[34px_1fr_45px_35px] items-center border-b border-white/10 py-2 text-xs">
                    <span className="text-xl">{d[0]}</span>
                    <span>{d[1]}</span>
                    <span>💬 {d[2]}</span>
                    <b className="text-emerald-300">{d[3]}</b>
                  </div>
                ))}
              </div>
            </div>
          </Box>

          <Box pos={positions.videos} z={zIndexes.videos} onMouseDown={(e) => startDrag("videos", e)} w="490px" h="360px">
            <div className="h-full overflow-y-auto pr-1">
              <div className="mb-3 flex justify-between">
                <b className="text-sm">TV Money Is Over</b>
                <button className="text-xs text-emerald-300">Ver todos</button>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/35">
                <video
                  className="h-[160px] w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                />
                <div className="flex items-center justify-between px-3 py-2">
                  <div>
                    <p className="text-xs font-bold">Ação em destaque</p>
                    <p className="text-[11px] text-white/50">Vídeo automático sem som</p>
                  </div>
                  <span className="text-xs font-bold text-emerald-300">+2 Nobank Coins</span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-6 gap-2">
                {videos.map((v, i) => (
                  <div key={v} className="overflow-hidden rounded-xl bg-white/10">
                    <div className="relative flex h-[52px] items-center justify-center bg-emerald-400/10 text-lg">
                      ▶
                      <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1 text-[8px]">
                        0{i + 1}:4{i}
                      </span>
                    </div>
                    <p className="p-1 text-[9px]">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </Box>

          <Box pos={positions.calendar} z={zIndexes.calendar} onMouseDown={(e) => startDrag("calendar", e)} w="240px" h="215px">
            <div className="h-full overflow-hidden">
              <div className="mb-3 flex justify-between">
                <button>‹</button>
                <b className="text-xs capitalize">{monthName}</b>
                <button>›</button>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[9px]">
                {["D", "S", "T", "Q", "Q", "S", "S", ...calendarDays].map((d, i) => (
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
  z,
}: {
  children: ReactNode;
  pos: { x: number; y: number };
  onMouseDown: (e: MouseEvent<HTMLDivElement>) => void;
  w: string;
  h: string;
  p?: string;
  z: number;
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
        zIndex: z,
      }}
      className={`mb-4 overflow-visible rounded-[24px] border border-white/12 bg-black/55 ${p} shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-md lg:absolute lg:mb-0 lg:overflow-hidden`}
    >
      {children}
    </div>
  );
}
