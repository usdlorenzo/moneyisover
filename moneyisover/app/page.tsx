"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Página Inicial");

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
    ["Estou pensando em mudar de carreira", "Preciso de opiniões sinceras.", "15 comentários", "Hoje", "+1 moeda"],
    ["Meu relacionamento terminou", "Quero ouvir experiências.", "28 comentários", "Hoje", "+1 moeda"],
    ["Vale a pena abrir empresa?", "Quem já empreendeu?", "42 comentários", "Ontem", "+1 moeda"],
    ["Estou perdido financeiramente", "Como recomeçar?", "36 comentários", "Ontem", "+1 moeda"],
    ["Como vencer a procrastinação?", "Preciso de ajuda.", "19 comentários", "Hoje", "+1 moeda"],
    ["Mudar de cidade vale a pena?", "Estou em dúvida.", "24 comentários", "Hoje", "+1 moeda"],
    ["Faculdade ainda compensa?", "Mercado mudou muito.", "31 comentários", "Ontem", "+1 moeda"],
    ["Como fazer novas amizades?", "Me sinto isolado.", "17 comentários", "Hoje", "+1 moeda"],
    ["Empreender ou CLT?", "O que vocês fariam?", "44 comentários", "Ontem", "+1 moeda"],
    ["Como melhorar autoestima?", "Aceito sugestões.", "52 comentários", "Hoje", "+1 moeda"],
  ];

  const videos = [
    ["Distribuição de alimentos", "Ajuda a famílias carentes.", "2 moedas"],
    ["Ajuda a idoso", "Suporte em transporte e compras.", "2 moedas"],
    ["Doação de roupas", "Entrega para pessoas necessitadas.", "2 moedas"],
    ["Resgate de cachorro", "Animal encontrado abandonado.", "2 moedas"],
    ["Aula gratuita", "Ensino de matemática para jovens.", "2 moedas"],
    ["Entrega de cestas básicas", "Ação solidária comunitária.", "2 moedas"],
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
            <option>Money Is Over</option>
          </select>
        </div>

        <p className="mb-2 text-[11px] font-bold uppercase text-gray-700">
          Menu
        </p>

        <div className="space-y-1">
          {menu.map((i) => (
            <MenuItem key={i} item={i} />
          ))}
        </div>
      </aside>

      <section className="ml-[230px] p-6">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{active}</h1>
            <p className="text-sm text-gray-500">
              Home / Money Is Over / {active}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-semibold">
              Entrar
            </button>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
              Criar conta
            </button>
          </div>
        </header>

        <div className="mb-6 rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
          <div className="mx-auto mb-3 text-4xl">✊</div>

          <h2 className="text-xl font-bold">
            Ajude pessoas, compartilhe opiniões e ganhe moedas
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
            No Money Is Over, você ganha moedas ao publicar desabafos, responder
            perguntas e ajudar pessoas de verdade através de vídeos de caridade.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            <button className="rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
              Criar Desabafo
            </button>

            <button className="rounded-md border border-gray-200 bg-white px-5 py-2 text-sm font-semibold">
              Enviar Vídeo de Ajuda
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <h3 className="font-semibold">
                Desabafos e Pedidos de Opinião
              </h3>

              <button className="text-sm font-semibold text-blue-600">
                Ver todos
              </button>
            </div>

            <div className="grid grid-cols-[1fr_150px_120px_120px] border-b bg-gray-50 px-4 py-3 text-xs text-gray-500">
              <span>Publicação</span>
              <span>Comentários</span>
              <span>Data</span>
              <span>Recompensa</span>
            </div>

            <div className="max-h-[700px] overflow-y-auto">
              {posts.map((row) => (
                <button
                  key={row[0]}
                  onClick={() => alert(`Abrindo: ${row[0]}`)}
                  className="grid w-full grid-cols-[1fr_150px_120px_120px] items-center border-b px-4 py-4 text-left text-sm hover:bg-gray-50"
                >
                  <span>
                    <b>{row[0]}</b>
                    <p className="text-xs text-gray-500">{row[1]}</p>
                  </span>

                  <span>{row[2]}</span>
                  <span>{row[3]}</span>
                  <span className="font-bold text-green-600">{row[4]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-5">
              <h3 className="font-semibold">Moedas da Comunidade</h3>
            </div>

            <div className="p-5">
              <p className="text-sm text-gray-500">Total distribuído hoje</p>

              <div className="mt-1 flex items-center gap-3">
                <span className="text-3xl font-bold">1.284</span>
                <span className="rounded bg-green-50 px-2 py-1 text-xs text-green-600">
                  +18%
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Publicar pergunta</span>
                  <b className="text-green-600">+1 moeda</b>
                </div>

                <div className="flex justify-between">
                  <span>Responder alguém</span>
                  <b className="text-green-600">+1 moeda</b>
                </div>

                <div className="flex justify-between">
                  <span>Vídeo de ajuda aprovado</span>
                  <b className="text-green-600">+2 moedas</b>
                </div>
              </div>

              <button className="mt-6 w-full rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                Ver ranking
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h3 className="font-semibold">Vídeos de Ajuda</h3>

            <button className="text-sm font-semibold text-blue-600">
              Ver todos
            </button>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video[0]}
                className="rounded-lg border border-gray-200 p-4"
              >
                <div className="mb-4 flex h-36 items-center justify-center rounded-lg bg-gray-100 text-5xl">
                  ▶
                </div>

                <h4 className="font-semibold">{video[0]}</h4>

                <p className="mt-2 text-sm text-gray-500">{video[1]}</p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-green-600">{video[2]}</span>

                  <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                    Assistir
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
