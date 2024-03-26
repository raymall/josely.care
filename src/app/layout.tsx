import type { Metadata } from "next"
import "../styles/globals.scss"
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Asesora de Seguros - Josely Méndez Catano",
  description: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
