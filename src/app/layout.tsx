import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.scss";
import { ReduxProvider } from "../providers/redux-provider";
import Header from "../components/Header/Header";
import Head from "next/head";

const notoSansFont = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "What To Play",
  description: "A web application for video game lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/antd@5/dist/reset.css" />
      </Head>
      <body className={notoSansFont.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
