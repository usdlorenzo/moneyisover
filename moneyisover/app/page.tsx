"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Team Settings");
  const [team, setTeam] = useState("");
  const [selected, setSelected] = useState("Brasil");

  const menu = [
    "API Setup",
    "Team Settings",
    "Authentication",
    "Endpoints Configs",
    "Rate Limiting",
    "Data Encryption",
    "Access Control",
    "Incident Response",
    "Fetching Data",
    "Custom Reports",
    "Real Time Analytics",
  ];

  return (
    <main className="min-h-screen bg-[#eef2f7] text-slate-950">
      <aside className="fixed left-0 top-0 h-full w-72 border-r border-slate-200 bg-white/80 p-5 backdrop-blur-xl">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-xl font-black text-white shadow-lg shadow-blue-500/30">
            M
          </div>
          <div>
            <h1 className="text-xl font-black">MoneyIsOver</h1>
            <p className="text-xs font-bold text-slate-400">Post-money OS</p>
          </div>
        </div>

        <button className="mb-6 w-full rounded-2xl border border-slate-200 bg-white p-4 text-left font-bold shadow-sm hover:border-blue-300">
          🌍 Global Community
        </button>

        <p className="mb-3 text-xs font-black tracking-widest text-slate-400">
          CONFIGURATION
        </p>

        <div className="space-y-1">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm transition ${
                active === item
                  ? "bg-blue-600 font-black text-white shadow-lg shadow-blue-500/25"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <section className="ml-72 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-black">{active}</h2>
            <p className="mt-1 text-sm text-slate-500">
              Home / MoneyIsOver / Community / {active}
            </p>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="Search..."
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none shadow-sm"
            />
            <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              🔔
            </button>
            <button className="rounded-2xl bg-slate-950 px-6 py-3 font-black text-white shadow-lg">
              Export
            </button>
          </div>
        </header>

        <section className="relative mb-6 overflow-hidden rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl">
          <div className="absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full bg-blue-500/40 blur-3xl" />
          <div className="absolute bottom-[-100px] left-1/3 h-72 w-72 rounded-full bg-cyan-400/30 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200">
                O mundo pós-dinheiro já começou
              </span>

              <h3 className="mt-8 max-w-3xl text-6xl font-black leading-none">
                Ajude pessoas. Ganhe valor. Crie influência local.
              </h3>

              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                Ajude pessoas na rua ou online, ganhe Money Is Over Coin e
                troque por produtos, serviços e descontos.
              </p>

              <button
                onClick={() => alert("Em breve: criação de comunidade")}
                className="mt-8 rounded-2xl bg-blue-500 px-8 py-4 font-black text-white shadow-lg shadow-blue-500/40"
              >
                Criar Comunidade
              </button>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm text-slate-300">Impacto total</p>
              <div className="mt-2 flex items-end gap-3">
                <span className="text-5xl font-black">295.7k</span>
                <span className="rounded-lg bg-green-400/20 px-2 py-1 text-sm font-bold text-green-300">
                  +2.7%
                </span>
              </div>

              <div className="mt-6 flex h-3 overflow-hidden rounded-full bg-white/10">
                <div className="w-[55%] bg-green-400" />
                <div className="w-[30%] bg-red-400" />
                <div className="w-[15%] bg-purple-400" />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["Online", "$172k", "↑ 3.9%"],
                  ["Facebook", "$85k", "↓ 0.7%"],
                  ["Instagram", "$36k", "↑ 8.2%"],
                  ["Google", "$26k", "↑ 8.2%"],
                ].map(([name, value, percent]) => (
                  <div key={name} className="flex justify-between text-sm">
                    <span>{name}</span>
                    <b>{value}</b>
                    <span
                      className={
                        percent.includes("↑")
                          ? "text-green-300"
                          : "text-red-300"
                      }
                    >
                      {percent}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b p-5">
              <h3 className="text-xl font-black">Comunidades</h3>
              <input
                placeholder="Search Teams"
                className="rounded-xl border border-slate-200 px-4 py-2 outline-none"
              />
            </div>

            {[
              ["Product Management", "⭐⭐⭐⭐⭐", "21 Oct, 2024", "+10"],
              ["Marketing Team", "⭐⭐⭐⭐☆", "15 Oct, 2024", "+7"],
              ["Bairro Centro", "⭐⭐⭐⭐⭐", "08 Nov, 2024", "+34"],
            ].map((row) => (
              <button
                key={row[0]}
                onClick={() => alert(`Abrindo ${row[0]}`)}
                className="grid w-full grid-cols-[1fr_120px_150px_100px] items-center border-b p-5 text-left hover:bg-blue-50"
              >
                <span>
                  <strong>{row[0]}</strong>
                  <p className="text-sm text-slate-500">
                    Comunidade e colaboração local
                  </p>
                </span>
                <span>{row[1]}</span>
                <span>{row[2]}</span>
                <span className="font-black text-blue-600">{row[3]}</span>
              </button>
            ))}
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-xl font-black">Escolha sua região</h3>

            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="mb-3 w-full rounded-2xl border border-slate-200 p-4 outline-none"
            >
              <option>Brasil</option>
              <option>Estados Unidos</option>
              <option>Argentina</option>
            </select>

            <input
              className="mb-3 w-full rounded-2xl border border-slate-200 p-4 outline-none"
              placeholder="Digite sua cidade"
            />

            <input
              className="mb-3 w-full rounded-2xl border border-slate-200 p-4 outline-none"
              placeholder="Digite seu bairro"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />

            <button
              onClick={() =>
                alert(`Entrando no bairro: ${team || "não informado"}`)
              }
              className="w-full rounded-2xl bg-blue-600 p-4 font-black text-white shadow-lg shadow-blue-500/25"
            >
              Entrar no bairro
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
