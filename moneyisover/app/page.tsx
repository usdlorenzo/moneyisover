"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Página Inicial");

  const menu = [
    "Página Inicial",
    "Publicações",
    "Vídeos",
    "Moedas",
    "Ranking",
    "Moderação",
  ];

  const posts = [
    ["Estou pensando em mudar de carreira", "Preciso de opiniões sinceras.", "15 comentários", "Hoje", "+1"],
    ["Meu relacionamento terminou", "Quero ouvir experiências.", "28 comentários", "Hoje", "+1"],
    ["Vale a pena abrir empresa?", "Quem já empreendeu?", "42 comentários", "Ontem", "+1"],
    ["Estou perdido financeiramente", "Como recomeçar?", "36 comentários", "Ontem", "+1"],
    ["Como vencer a procrastinação?", "Preciso de ajuda.", "19 comentários", "Hoje", "+1"],
    ["Mudar de cidade vale a pena?", "Estou em dúvida.", "24 comentários", "Hoje", "+1"],
    ["Faculdade ainda compensa?", "Mercado mudou muito.", "31 comentários", "Ontem", "+1"],
    ["Como fazer novas amizades?", "Me sinto isolado.", "17 comentários", "Hoje", "+1"],
    ["Empreender ou CLT?", "O que vocês fariam?", "44 comentários", "Ontem", "+1"],
    ["Como melhorar autoestima?", "Aceito sugestões.", "52 comentários", "Hoje", "+1"],
  ];

  const videos = [
    ["Distribuição de alimentos", "Ajuda a famílias carentes.", "+2"],
    ["Ajuda a idoso", "Suporte em transporte e compras.", "+2"],
    ["Doação de roupas", "Entrega para pessoas necessitadas.", "+2"],
    ["Resgate de cachorro", "Animal abandonado resgatado.", "+2"],
    ["Aula gratuita", "Matemática para jovens.", "+2"],
    ["Cestas básicas", "Ação solidária comunitária.", "+2"],
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#111827]">
      <aside className="hidden fixed left-0 top-0 h-full w-[230px] border-r border-gray-200 bg-white px-5 py-4 lg:block">
        <div className="mb-6 flex items-center gap-3">
          <div className="text-3xl font-black text-blue-600">M</div>
          <b className="text-sm">Money Is Over</b>
        </div>

        <p className="mb-2 text-[11px] font-bold uppercase text-gray-700">
          Menu
        </p>

        <div className="space-y-1">
          {menu.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`w-full rounded-md px-3 py-2 text-left text-[13px] ${
                active === item
                  ? "bg-[#eef4ff] text-[#2563eb]"
                  : "hover:bg-[#f5f5f5]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <section className="p-4 lg:ml-[230px] lg:p-6">
        <header className="mb-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:bg-transparent lg:border-0 lg:shadow-none lg:p-0">
          <div className="mb-3 flex items-center justify-between lg:mb-0">
            <div>
              <h1 className="text-lg font-bold lg:text-xl">{active}</h1>
              <p className="text-xs text-gray-500 lg:text-sm">
                Money Is Over
              </p>
            </div>

            <button className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white lg:text-sm">
              Criar conta
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto lg:hidden">
            {menu.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs ${
                  active === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </header>

        <div className="mb-4 rounded-xl border border-gray-200 bg-white p-3 text-center shadow-sm">
          <h2 className="text-base font-bold lg:text-lg">
            Ajude, opine e ganhe moedas
          </h2>

          <p className="mx-auto mt-1 max-w-xl text-xs leading-5 text-gray-600 lg:text-sm">
            Publique desabafos, responda pessoas e envie vídeos de ajuda real.
          </p>

          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button className="rounded-md bg-blue-600 px-4 py-2 text-xs font-semibold text-white">
              Criar Desabafo
            </button>

            <button className="rounded-md border border-gray-200 bg-white px-4 py-2 text-xs font-semibold">
              Enviar Vídeo
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_330px]">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-200 p-4">
              <h3 className="font-semibold">Discussões</h3>

              <button className="text-sm font-semibold text-blue-600">
                Ver todos
              </button>
            </div>

            <div className="hidden grid-cols-[1fr_140px_90px_90px] border-b bg-gray-50 px-4 py-3 text-xs text-gray-500 md:grid">
              <span>Publicação</span>
              <span>Comentários</span>
              <span>Data</span>
              <span>Moedas</span>
            </div>

            <div className="max-h-[720px] overflow-y-auto">
              {posts.map((row) => (
                <button
                  key={row[0]}
                  onClick={() => alert(`Abrindo: ${row[0]}`)}
                  className="block w-full border-b px-4 py-4 text-left text-sm hover:bg-gray-50 md:grid md:grid-cols-[1fr_140px_90px_90px] md:items-center"
                >
                  <span>
                    <b>{row[0]}</b>
                    <p className="text-xs text-gray-500">{row[1]}</p>
                  </span>

                  <span className="mt-2 block text-xs text-gray-600 md:mt-0 md:text-sm">
                    {row[2]}
                  </span>

                  <span className="mt-1 block text-xs text-gray-500 md:mt-0 md:text-sm">
                    {row[3]}
                  </span>

                  <span className="mt-1 block font-bold text-green-600 md:mt-0">
                    {row[4]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <h3 className="font-semibold">Moedas</h3>
            </div>

            <div className="p-4">
              <p className="text-sm text-gray-500">Distribuídas hoje</p>

              <div className="mt-1 flex items-center gap-3">
                <span className="text-3xl font-bold">1.284</span>
                <span className="rounded bg-green-50 px-2 py-1 text-xs text-green-600">
                  +18%
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Publicar pergunta</span>
                  <b className="text-green-600">+1</b>
                </div>

                <div className="flex justify-between">
                  <span>Responder alguém</span>
                  <b className="text-green-600">+1</b>
                </div>

                <div className="flex justify-between">
                  <span>Vídeo aprovado</span>
                  <b className="text-green-600">+2</b>
                </div>
              </div>

              <button className="mt-5 w-full rounded-md bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                Ver ranking
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <h3 className="font-semibold">Vídeos de Ajuda</h3>

            <button className="text-sm font-semibold text-blue-600">
              Ver todos
            </button>
          </div>

          <div className="grid gap-4 p-4 sm:grid-cols-2 xl:grid-cols-3">
            {videos.map((video) => (
              <div
                key={video[0]}
                className="rounded-lg border border-gray-200 p-3"
              >
                <div className="mb-3 flex h-32 items-center justify-center rounded-lg bg-gray-100 text-4xl">
                  ▶
                </div>

                <h4 className="font-semibold">{video[0]}</h4>

                <p className="mt-1 text-sm text-gray-500">{video[1]}</p>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-green-600">{video[2]}</span>

                  <button className="rounded-md bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
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
