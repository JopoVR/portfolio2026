import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "João Rezende | Desenvolvedor Backend e Full Stack",
  description:
    "Portfólio de João Rezende, estudante de Ciência da Computação e desenvolvedor Backend e Full Stack.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
