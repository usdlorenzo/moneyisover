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
    <main className="min-h-screen bg-[#f6f7fb] text-[#111827]">
      <aside className="fixed left-0 top-0 h-full w-64 border-r bg-white p-4">
        <div className="mb-8 text-3xl font-black text-blue-600">MIO</div>

        <button className="mb-6 w-full rounded-xl border bg-white p-3 text-left font-bold">
          🌍 MoneyIsOver
        </button>

        <p className="mb-3 text-xs font-black text-gray-400">CONFIGURATION</p>

        <div className="space-y-1">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm ${
                active === item
                  ? "bg-blue-50 font-bold text-blue-600"
                  : "hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <section className="ml-64 p-8">
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-black">{active}</h1>
            <p className="text-sm text-gray-500">
              Home / MoneyIsOver / Community / {active}
            </p>
          </div>

          <div className="flex gap-3">
            <input
              placeholder="Search..."
              className="rounded-xl border bg-white px-4 py-3 outline-none"
            />
            <button className="rounded-xl border bg-white px-4 py-3">🔔</button>
            <button className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white">
              Export
            </button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-blue-50 text-6xl">
              🤝
            </div>

            <h2 className="text-2xl font-black">
              O mundo pós-dinheiro já começou
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-600">
              Ajude pessoas na rua ou online, ganhe Money Is Over Coin e troque
              por produtos, serviços e descontos.
            </p>

            <button
              onClick={() => alert("Em breve: criação de comunidade")}
              className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-bold text-white"
            >
              Criar Comunidade
            </button>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-xl font-black">Highlights</h3>

            <p className="text-sm text-gray-500">Impacto total</p>
            <div className="mb-4 flex items-end gap-3">
              <span className="text-4xl font-black">295.7k</span>
              <span className="rounded bg-green-100 px-2 py-1 text-sm font-bold text-green-600">
                +2.7%
              </span>
            </div>

            <div className="mb-6 flex h-2 overflow-hidden rounded-full">
              <div className="w-[55%] bg-green-500" />
              <div className="w-[30%] bg-red-500" />
              <div className="w-[15%] bg-purple-500" />
            </div>

            {[
              ["Online", "$172k", "↑ 3.9%"],
              ["Facebook", "$85k", "↓ 0.7%"],
              ["Instagram", "$36k", "↑ 8.2%"],
              ["Google", "$26k", "↑ 8.2%"],
              ["Retail", "$7k", "↓ 0.7%"],
            ].map(([name, value, percent]) => (
              <div
                key={name}
                className="flex justify-between border-t py-3 text-sm"
              >
                <span>{name}</span>
                <span className="font-bold">{value}</span>
                <span
                  className={
                    percent.includes("↑") ? "text-green-600" : "text-red-600"
                  }
                >
                  {percent}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-2xl border bg-white shadow-sm">
            <div className="flex items-center justify-between border-b p-5">
              <h3 className="text-xl font-black">Comunidades</h3>
              <input
                placeholder="Search Teams"
                className="rounded-lg border px-4 py-2 outline-none"
              />
            </div>

            <div className="grid grid-cols-[1fr_120px_160px_160px] border-b bg-gray-50 p-4 text-sm font-bold text-gray-500">
              <span>Team</span>
              <span>Rating</span>
              <span>Last Modified</span>
              <span>Members</span>
            </div>

            {[
              ["Product Management", "⭐⭐⭐⭐⭐", "21 Oct, 2024", "+10"],
              ["Marketing Team", "⭐⭐⭐⭐☆", "15 Oct, 2024", "+7"],
              ["Bairro Centro", "⭐⭐⭐⭐⭐", "08 Nov, 2024", "+34"],
            ].map((row) => (
              <button
                key={row[0]}
                onClick={() => alert(`Abrindo ${row[0]}`)}
                className="grid w-full grid-cols-[1fr_120px_160px_160px] items-center border-b p-4 text-left hover:bg-blue-50"
              >
                <span>
                  <strong>{row[0]}</strong>
                  <p className="text-sm text-gray-500">
                    Comunidade e colaboração local
                  </p>
                </span>
                <span>{row[1]}</span>
                <span>{row[2]}</span>
                <span className="font-black text-blue-600">{row[3]}</span>
              </button>
            ))}
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-xl font-black">Escolha sua região</h3>

            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="mb-3 w-full rounded-xl border p-3 outline-none"
            >
              <option>Brasil</option>
              <option>Estados Unidos</option>
              <option>Argentina</option>
            </select>

            <input
              className="mb-3 w-full rounded-xl border p-3 outline-none"
              placeholder="Digite sua cidade"
            />

            <input
              className="mb-3 w-full rounded-xl border p-3 outline-none"
              placeholder="Digite seu bairro"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
            />

            <button
              onClick={() => alert(`Entrando no bairro: ${team || "não informado"}`)}
              className="w-full rounded-xl bg-blue-600 p-3 font-black text-white"
            >
              Entrar no bairro
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
