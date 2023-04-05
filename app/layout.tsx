import NavigationBar from "./components/commons/navigation/NavigationBar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import ClientOnly from "./components/ClientOnly";
import { Nunito } from "next/font/google";
import "./main.scss";

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal />
          <NavigationBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
