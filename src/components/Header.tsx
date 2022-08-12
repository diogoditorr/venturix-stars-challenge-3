import React from "react";
import AppLogo from "../assets/logo.svg";
import { NavItem } from "./NavItem";
import { BoneIcon } from "./svg/BoneIcon";
import { BuildingIcon } from "./svg/BuildingIcon";
import { ImagesIcon } from "./svg/ImagesIcon";

export function Header() {
    return (
        <header className="max-w-screen-2xl m-auto w-full flex items-center px-12 pt-8 gap-8">
            <img src={AppLogo} alt="Logo da ONG DogCare" className="pb-4" />
            <nav className="flex items-center gap-7">
                <NavItem href="#motivation">
                    <BoneIcon />
                    Motivação
                </NavItem>
                <NavItem href="#gallery">
                    <ImagesIcon />
                    Galeria
                </NavItem>
                <NavItem href="#contact">
                    <BuildingIcon />
                    Contato
                </NavItem>
            </nav>
        </header>
    );
}
