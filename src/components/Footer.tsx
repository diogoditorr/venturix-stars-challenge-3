import React from "react";
import AppLogo from "../assets/logo.svg";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between py-8 px-12 text-white bg-gray-800">
            <img src={AppLogo} alt="Logo da ONG DogCare" className="pb-4" />

            <div id="contact" className="flex flex-col">
                <h2 className="mb-3 border-b border-[#a4a4a4] font-bold text-lg">
                    Contato
                </h2>
                <address>
                    <p className="font-bold">
                        Telefone:{" "}
                        <a
                            href="tel:+9933444567"
                            className="font-normal hover:underline"
                        >
                            (99) 3344-4567
                        </a>
                    </p>
                    <p className="font-bold">
                        Email:{" "}
                        <a
                            href="mailto:dogcare@ong.com.br"
                            className="font-normal hover:underline"
                        >
                            dogcare@ong.com.br
                        </a>
                    </p>
                    <p className="font-bold">
                        WhatsApp:{" "}
                        <a
                            href="tel:+99988123345"
                            className="font-normal hover:underline"
                        >
                            (99) 9881233-45
                        </a>
                    </p>
                </address>
            </div>

            <a href="#" className="text-lg hover:underline">
                Políticas de privacidade
            </a>
        </footer>
    );
}
