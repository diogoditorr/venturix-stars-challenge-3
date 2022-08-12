import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import feedImage from "../assets/feed.png";
import { api } from "../services/api";
import { MagnifyingGlassIcon } from "./svg/MagnifyingGlassIcon";

type BreedsQueryData = {
    message: {
        [key: string]: Array<string> | null;
    };
    status: string;
};

type BreedImagesQueryData = {
    message: string[];
    status: string;
};

type BreedList = {
    value: string;
    text: string;
}[];

export function Gallery() {
    const [breedName, setBreedName] = useState("");
    const selectElementRef = useRef<HTMLSelectElement>(null);
    const [breedList, setBreedList] = useState<BreedList>([]);

    const breedsQuery = useQuery<BreedsQueryData>(
        ["breeds"],
        api.getAllBreeds,
        {
            refetchOnWindowFocus: false,
        }
    );
    const breedImagesQuery = useQuery<BreedImagesQueryData>(
        ["breed", breedName],
        api.getByBreed,
        {
            enabled: !!breedName,
            refetchOnWindowFocus: false,
        }
    );

    useEffect(() => {
        if (breedsQuery.isSuccess) {
            const { message } = breedsQuery.data;
            const newBreedList: BreedList = [];
            Object.keys(message).forEach((key) => {
                let breedValue = "";
                let breedText = "";

                breedValue += key;
                breedText += key;

                const subBreeds = message[key] as Array<string>;

                if (subBreeds.length > 0) {
                    breedValue += "/" + subBreeds[0];
                    breedText += " " + subBreeds[0];
                }

                newBreedList.push({
                    value: breedValue,
                    text:
                        breedText.charAt(0).toUpperCase() + breedText.slice(1),
                });
            });
            setBreedList(newBreedList);
            setBreedName(newBreedList[0].value);
        }
    }, [breedsQuery.isSuccess]);

    function handleOnSearch() {
        setBreedName(selectElementRef.current?.value || "");
    }

    return (
        <section
            id="gallery"
            className="flex flex-col items-center mt-24 rounded-lg bg-white "
        >
            <h1 className="flex items-center gap-3 mb-3 mt-[2rem]">
                <img src={feedImage} alt="Ração de cachorro" />
                <span className="text-[2rem] font-bold">Galeria</span>
            </h1>
            <p>
                Selecione a raça e clique em pesquisar para visualizar alguns
                deles.
            </p>
            <div className="flex items-center gap-12 my-12 px-6">
                {breedImagesQuery.isFetching || breedImagesQuery.isLoading
                    ? Array.from({ length: 3 }).map((_, i) => (
                          <div
                              key={i}
                              className="w-72 h-72 border border-[#bbbbbb] rounded-[2.5rem]"
                          ></div>
                      ))
                    : breedImagesQuery.data?.message.map((imageURL, i) => (
                          <div
                              key={i}
                              className="flex items-center justify-center overflow-hidden w-72 h-72 border border-[#bbbbbb] rounded-[2.5rem]"
                          >
                              <img src={imageURL} className="h-full object-contain" />
                          </div>
                      ))}
            </div>

            <div className="flex mb-10 gap-2">
                <select name="races" id="races" ref={selectElementRef}>
                    {breedList.map((breed) => (
                        <option key={breed.value} value={breed.value}>
                            {breed.text}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleOnSearch}
                    className="flex items-center px-4 py-3 rounded-lg gap-3 bg-gray-800"
                >
                    <MagnifyingGlassIcon />
                    <span className="font-bold text-white">Pesquisar</span>
                </button>
            </div>
        </section>
    );
}
