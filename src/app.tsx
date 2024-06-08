import "./global.css";

import { Toaster } from "@/components/ui/sonner";

import { RouterProvider } from "react-router-dom";

import { QueryClientProvider } from "@tanstack/react-query";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { queryClient } from "./lib/react-query";

import { ThemeProvider } from "./components/theme/theme-provider";

import { router } from "./routes";
export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}
