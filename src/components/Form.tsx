import React, { useState } from "react";
import { PersonIcon } from "./svg/PersonIcon";
import { PhoneIcon } from "./svg/PhoneIcon";
import dogImage from "../assets/image-3.png";
import classNames from "classnames";

export function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    if (isSubmitted) console.log({ name, phoneNumber });

    return (
        <section id="form" className="my-24">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                }}
                className={classNames(
                    "flex flex-col items-center p-6 rounded-lg bg-white",
                    {
                        hidden: isSubmitted,
                    }
                )}
            >
                <h1 className="text-2xl font-bold mb-8">Candidatar-se</h1>
                <div className="flex flex-col w-80 mb-4">
                    <label htmlFor="name" className="font-medium">
                        Nome:
                    </label>
                    <div className="relative flex items-center ">
                        <div className="absolute pl-4">
                            <PersonIcon />
                        </div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Digite seu nome"
                            onChange={(e) => setName(e.target.value)}
                            autoComplete="none"
                            required
                            className="w-full p-4 pl-11 border border-[#a4a4a4] rounded-lg"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-80 mb-16">
                    <label htmlFor="phone" className="font-medium">
                        Número de telefone:
                    </label>
                    <div className="relative flex items-center ">
                        <div className="absolute pl-4">
                            <PhoneIcon />
                        </div>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="(00) 00000-0000"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            autoComplete="none"
                            required
                            className="w-full p-4 pl-11 border border-[#a4a4a4] rounded-lg"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="py-2 px-14 text-lg font-bold rounded-lg bg-red-500 text-white"
                >
                    ENVIAR
                </button>
            </form>

            <div className={classNames("flex flex-col items-center p-6 rounded-lg bg-white", {
                hidden: !isSubmitted,
            })}>
                <img src={dogImage} alt="Um cachorro" />
                <h1 className="mt-4 font-bold text-lg text-red-500">
                    Dados enviados com sucesso!
                </h1>
                <p className="w-3/4 mt-1 text-center text-sm">
                    Entraremos em contato assim que possível.
                </p>
            </div>
        </section>
    );
}
