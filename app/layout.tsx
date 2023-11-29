import type { Metadata } from "next";
import { Inter } from "next/font/google";
import RecoilProvider from "./_recoil/RecoilProvider";
import AuthProvider from "./auth/Provider";
import Header from "./components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Instagram clone NextJS",
  description: "This app created by Next14",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <AuthProvider>
          <RecoilProvider>
            <Header />
            <main>{children}</main>
          </RecoilProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
