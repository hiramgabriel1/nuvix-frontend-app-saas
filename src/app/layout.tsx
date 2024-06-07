import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuvix Inventory",
  description:
    "Optimiza la gestión de tu inventario con Nuvix Inventory. Controla tus productos, reduce pérdidas y mejora la eficiencia de tu negocio con herramientas intuitivas y análisis en tiempo real. ¡Simplifica tu inventario hoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
