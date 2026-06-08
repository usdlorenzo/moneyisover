"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Team Settings");
  const [team, setTeam] = useState("");
  const [country, setCountry] = useState("Brasil");
  const [prices, setPrices] = useState({ bitcoin: 0, ethereum: 0 });

  useEffect(() => {
    async function loadPrices() {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd"
        );
        const data = await res.json();
        setPrices({
          bitcoin: data.bitcoin.usd,
          ethereum: data.ethereum.usd,
        });
      } catch (e) {
        console.log(e);
      }
    }

    loadPrices();
    const timer = setInterval(loadPrices, 30000);
    return () => clearInterval(timer);
  }, []);

  const config = [
    "API Setup",
    "Team Settings",
    "Authentication",
    "Endpoints Configs",
    "Rate Limiting",
  ];

  const security = [
    "Data Encryption",
    "Text",
    "Access Control",
    "Incident Response",
  ];

  const analytics = [
    "Fetching Data",
    "Custom Reports",
    "Real Time Analytics",
    "Exporting Data",
    "Dashboard Integration",
  ];

  const teams = [
    ["Product Management", "Product development & lifecycle", "⭐⭐⭐⭐⭐", "21 Oct, 2024", "+10"],
    ["Marketing Team", "Campaigns & market analysis", "⭐⭐⭐⭐☆", "15 Oct, 2024", "G"],
    ["HR Department", "Talent acquisition, employee welfare", "⭐⭐⭐⭐⭐", "10 Oct, 2024", "+A"],
    ["Bairro Centro", "Ajuda local e colaboração", "⭐⭐⭐⭐⭐", "05 Oct, 2024", "+34"],
  ];

  function MenuItem({ item }: { item: string }) {
    return (
      <button
        onClick={() => setActive(item)}
        className={`w-full rounded-md px-3 py-2 text-left text-[13px] ${
          active === item
            ? "bg-[#eef4ff] text-[#2563eb]"
            : "text-[#111827] hover:bg-[#f5f5f5]"
        }`}
      >
        {item}
      </button>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#111827]">
      <aside className="fixed left-0 top-0 h-full w-[230px] border-r border-gray-200 bg-white px-5 py-4">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-3xl font-black text-blue-600">M</div>
          <select className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-xs font-semibold outline-none">
            <option>MoneyIsOver</option>
          </select>
        </div>

        <p className="mb-2 text-[11px] font-bold uppercase text-gray-700">
          Configuration
        </p>
        <div className="space-y-1">{config.map((i) => <MenuItem key={i} item={i} />)}</div>

        <p className="mb-2 mt-6 text-[11px] font-bold uppercase text-gray-700">
          Security
        </p>
        <div className="space-y-1">{security.map((i) => <MenuItem key={i} item={i} />)}</div>

        <p className="mb-2 mt-6 text-[11px] font-bold uppercase text-gray-700">
          Analytics
        </p>
        <div className="space-y-1">{analytics.map((i) => <MenuItem key={i} item={i} />)}</div>
      </aside>

      <section className="ml-[230px] p-6">
        <header className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm">
            <h1 className="font-semibold">{active}</h1>
            <span className="text-gray-400">
              Home / MoneyIsOver / Configuration / {active}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-md border border-gray-200 bg-white px-3 py-2 text-xs shadow-sm">
              <span className="font-bold text-orange-500">₿ BTC</span>
              <span className="text-gray-600">
                ${prices.bitcoin ? prices.bitcoin.toLocaleString("en-US") : "..."}
              </span>
              <span className="h-4 w-px bg-gray-200" />
              <span className="font-bold text-blue-500">◆ ETH</span>
              <span className="text-gray-600">
                ${prices.ethereum ? prices.ethereum.toLocaleString("en-US") : "..."}
              </span>
            </div>

            <button className="text-xl text-gray-500">⌕</button>
            <button className="text-xl text-gray-500">◴</button>
            <button className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold">
              Export
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-6 text-7xl">✊</div>
            <h2 className="text-xl font-semibold">
              Swift Setup for New Communities
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600">
              Ajude pessoas na rua ou online, ganhe Money Is Over Coin e troque
              por produtos, serviços e descontos.
            </p>
            <button
              onClick={() => alert("Criar comunidade")}
              className="mt-6 rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white"
            >
              Create Team
            </button>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-5">
              <h3 className="font-semibold">Highlights</h3>
            </div>
            <div className="p-5">
              <p className="text-sm text-gray-500">All time impact</p>
              <div className="mt-1 flex items-center gap-3">
                <span className="text-3xl font-bold">$295.7k</span>
                <span className="rounded bg-green-50 px-2 py-1 text-xs text-green-600">
                  +2.7%
                </span>
              </div>

              <div className="mt-5 flex h-2 overflow-hidden rounded-full">
                <div className="w-[55%] bg-green-500" />
                <div className="w-[30%] bg-red-500" />
                <div className="w-[15%] bg-purple-500" />
              </div>

              <div className="mt-5 border-t pt-3">
                {[
                  ["Online Store", "$172k", "↑ 3.9%"],
                  ["Facebook", "$85k", "↓ 0.7%"],
                  ["Instagram", "$36k", "↑ 8.2%"],
                  ["Google", "$26k", "↑ 8.2%"],
                  ["Retail", "$7k", "↓ 0.7%"],
                ].map(([name, value, percent]) => (
                  <div key={name} className="flex justify-between py-2 text-sm">
                    <span className="text-gray-700">{name}</span>
                    <span>{value}</span>
                    <span className={percent.includes("↑") ? "text-green-600" : "text-red-600"}>
                      {percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <h3 className="font-semibold">Teams</h3>
              <input
                placeholder="Search Teams"
                className="w-44 rounded-md border border-gray-200 px-3 py-2 text-sm outline-none"
              />
            </div>

            <div className="grid grid-cols-[50px_1fr_140px_150px_130px] border-b bg-gray-50 px-4 py-3 text-xs text-gray-500">
              <span>□</span>
              <span>Team</span>
              <span>Rating</span>
              <span>Last Modified</span>
              <span>Members</span>
            </div>

            {teams.map((row) => (
              <button
                key={row[0]}
                onClick={() => alert(`Abrindo ${row[0]}`)}
                className="grid w-full grid-cols-[50px_1fr_140px_150px_130px] items-center border-b px-4 py-3 text-left text-sm hover:bg-gray-50"
              >
                <span>□</span>
                <span>
                  <b>{row[0]}</b>
                  <p className="text-xs text-gray-500">{row[1]}</p>
                </span>
                <span>{row[2]}</span>
                <span>{row[3]}</span>
                <span className="font-bold text-green-600">{row[4]}</span>
              </button>
            ))}

            <div className="flex items-center justify-between p-4 text-sm">
              <span>
                Show <button className="rounded border px-3 py-1">5</button> per page
              </span>
              <span>1-4 of 4 &nbsp; ← &nbsp; 1 &nbsp; →</span>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-5">
              <h3 className="font-semibold">Block List</h3>
            </div>

            <div className="p-5">
              <p className="mb-4 text-sm leading-6 text-gray-600">
                Escolha país, cidade e bairro para entrar na comunidade local.
              </p>

              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mb-3 w-full rounded-md border border-gray-200 p-3 text-sm outline-none"
              >
                <option>Brasil</option>
                <option>Estados Unidos</option>
                <option>Argentina</option>
              </select>

              <input
                className="mb-3 w-full rounded-md border border-gray-200 p-3 text-sm outline-none"
                placeholder="Digite sua cidade"
              />

              <div className="flex">
                <input
                  className="w-full rounded-l-md border border-gray-200 p-3 text-sm outline-none"
                  placeholder="Digite seu bairro"
                  value={team}
                  onChange={(e) => setTeam(e.target.value)}
                />
                <button
                  onClick={() => alert(`Entrando no bairro: ${team || "não informado"}`)}
                  className="rounded-r-md bg-blue-600 px-5 text-sm font-semibold text-white"
                >
                  Add
                </button>
              </div>

              <div className="mt-5 space-y-4">
                {["Esther Howard", "Tyler Hero", "Arlene McCoy"].map((name, i) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gray-200" />
                    <div>
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="text-xs text-gray-500">{i + 6} commits</p>
                    </div>
                    <button className="ml-auto text-gray-400">⌫</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
