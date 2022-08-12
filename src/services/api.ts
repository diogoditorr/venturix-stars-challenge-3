import { QueryKey } from "@tanstack/react-query";
import axios from "axios";

const client = axios.create({
    baseURL: 'https://dog.ceo/api/',
});

export const api = {
    async getAllBreeds() {
        const response = await client.get('breeds/list/all');
        return response.data;
    },
    async getByBreed({ queryKey }: { queryKey: QueryKey }) {
        const [_key, breedName] = queryKey;
        const response = await client.get(`breed/${breedName}/images/random/3`);
        return response.data
    }
}