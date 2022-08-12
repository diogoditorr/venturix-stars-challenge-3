import React from "react";
import DogImage2 from "../assets/image-2.png";

export function Motivation() {
    return (
        <section
            id="motivation"
            className="grid grid-cols-[1fr,2fr] p-8 bg-white"
        >
            <div className="flex justify-center items-center">
                <img
                    src={DogImage2}
                    alt="Cachorro e um coração atrás com uma mensagem de 'Eu te amo'"
                />
            </div>
            <div className="flex flex-col px-4">
                <h1 className="mb-2 text-[2rem] font-bold text-center">
                    Motivação
                </h1>
                <p className="mb-4 indent-4">
                    Devido as crises econômicas e sociais, pessoas tendem a se
                    preocupar mais com suas vidas em risco do que outras mais
                    vulneráveis. Em decorrência disso, vários animais são
                    abandonados pelo seus donos. Segue abaixo um trecho da
                    notícia sobre esse tema do jornal Exame:
                </p>
                <figure className="flex flex-col items-center justify-center">
                    <blockquote className="w-3/4 mb-1 font-light italic text-center">
                        &quot;Estamos no mês da campanha Dezembro Verde, dedicada a
                        ações de conscientização contra o abandono animal. O
                        tema é de extrema importância uma vez que durante a
                        pandemia, ainda que tenha existido um aumento de cerca
                        de 30% na adoção de cães e gatos, o número de abandono
                        também cresceu. De acordo com Rosangela Gebara, gerente
                        de projetos da Ampara Animal, ONG parceira da Cobasi, o
                        índice de abandono e de recolhimento de animais
                        aumentou, em média, 61% entre julho de 2020 até o
                        terceiro trimestre de 2021. [...] O abandono de animais
                        é crime, previsto na Lei de Crimes Ambientais (Lei
                        Federal n° 9.605 de 1998). [...]&quot;
                    </blockquote>
                    <figcaption className="italic font-bold">
                        Fonte:{" "}
                        <a
                            href="https://exame.com/bussola/abandono-de-animais-aumentou-cerca-de-60-durante-a-pandemia/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-cyan-600 font-normal hover:underline"
                        >
                            Exame
                        </a>
                    </figcaption>
                </figure>
                <p className="mt-4 indent-4">
                    Afim de melhorar o índice de doações e reduzir o número de
                    abandonos, a ONG DogCare criou um programa de concientização
                    e convida pessoas dispostas a se responsabilizar pela vida
                    desses animais. Se interessou? O cadastro é gratuito!
                    Precisamos somente do seu nome e número de telefone.
                </p>
            </div>
        </section>
    );
}
