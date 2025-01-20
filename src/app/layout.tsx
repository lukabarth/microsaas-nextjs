import "./globals.css";

export const metadata = {
  title: "Minha Aplicação",
  description: "Bem-vindo à minha aplicação!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
