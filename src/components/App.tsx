import React from "react";
import { Gallery } from "./Gallery";
import { Motivation } from "./Motivation";
import { Home } from "./Home";
import { Header } from "./Header";
import { Form } from "./Form";
import Footer from "./Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            
            <main className="flex flex-col items-center">
                <Home />
                <Motivation />
                <Gallery />
                <Form />
            </main>

            <Footer />
            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
