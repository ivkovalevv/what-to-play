import type { Metadata } from "next";
import "./styles/globals.scss";
import { ReduxProvider } from "./providers/redux-provider";

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
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
