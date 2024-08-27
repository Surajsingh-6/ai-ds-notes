import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Head from "next/head"; // Import the Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "AI&DS NOTES",
    description: "AIDS NOTES for SEM 3",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
                <meta name="google-adsense-account" content="ca-pub-7439049367478453" />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
            </Head>
            <body className={inter.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
