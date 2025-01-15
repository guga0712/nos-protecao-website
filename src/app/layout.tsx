// app/layout.tsx
import { Providers } from "./providers";

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
