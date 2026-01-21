import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.scss";
import { ReduxProvider } from "../providers/redux-provider";
import Header from "../components/Header/Header";
import AuthInitializer from "../components/AuthInitializer/AuthInitializer";
import Footer from "components/components/Footer/Footer";

const notoSansFont = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What To Play",
  description: "A web application for video game lovers",
  icons: {
    icon: "/assets/images/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansFont.className}>
        <ReduxProvider>
          <AuthInitializer/>
          <Header />
          {children}
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
