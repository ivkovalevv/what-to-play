import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../styles/globals.scss";
import { ReduxProvider } from "../providers/redux-provider";
import Header from "../components/Header/Header";

const notoSansFont = Noto_Sans({subsets: ['latin']});

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
      <head>
        <link rel="stylesheet" href="https://unpkg.com/antd@5/dist/reset.css" />
      </head>
      <body className={notoSansFont.className}>
        <ReduxProvider>
          <Header/>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
