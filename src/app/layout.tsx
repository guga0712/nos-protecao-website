// app/layout.tsx
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nós Proteção | Segurança e Qualidade para Sua Carga",
  description:
    "A Nós Proteção oferece as melhores soluções para embalar, proteger e transportar sua carga com segurança. Filmes Stretch, Lonas Plásticas, Madeirites e muito mais! Proteja seus produtos com qualidade e resistência.",
  keywords: [
    "proteção de carga",
    "embalagem de carga",
    "filme stretch",
    "lonas plásticas",
    "madeirites",
    "segurança no transporte",
    "embalagens resistentes",
    "logística segura",
  ],
  authors: [{ name: "Nós Proteção" }],
  robots: "index, follow",
  openGraph: {
    title: "Nós Proteção | Segurança e Qualidade para Sua Carga",
    description:
      "Embalagens e proteções de carga com máxima resistência e durabilidade. Confira nossa linha completa de Filmes Stretch, Lonas Plásticas, Madeirites e muito mais!",
    url: "http://nosprotecaodecarga.com.br/",
    siteName: "Nós Proteção",
    images: [
      {
        url: "http://nosprotecaodecarga.com.br/logo-orange.jpg",
        width: 500,
        height: 500,
        alt: "Proteção de carga com segurança e resistência",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Nós Proteção</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
