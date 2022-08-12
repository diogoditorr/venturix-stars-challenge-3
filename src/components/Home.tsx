import React from "react";

export function Home() {
    return (
        <section className="max-w-screen-2xl min-h-[calc(100vh-6.625rem)] flex flex-col justify-between px-12 py-36">
            <div>
                <h1 className="font-medium text-2xl">
                    O abandono de animais é crime!
                </h1>
                <p className="w-[clamp(38rem,50%,60rem)] mt-3 text-3xl ">
                    Existem milhares desses bixinhos nas ruas que precisam ser
                    acolhidos e tratados. Além disso,{" "}
                    <strong className="text-red-500">
                        eles querem sobretudo alguém para amá-los
                    </strong>
                    . A DogCare está convocando pessoas interessadas em
                    adotá-los.{" "}
                    <strong className="text-red-500">Participe!</strong>
                </p>
            </div>
            <div className="flex items-center gap-4">
                <a
                    href="#gallery"
                    className="flex w-max px-4 py-3 rounded-2xl bg-gray-800 text-white text-xl font-bold"
                >
                    Galeria
                </a>
                <a
                    href="#form"
                    className="flex w-max px-4 py-3 rounded-2xl bg-red-500 text-white text-xl font-bold"
                >
                    Candidatar-se
                </a>
            </div>
        </section>
    );
}
