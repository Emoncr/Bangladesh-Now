
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";


const inter = Inter({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter"
})
export const metadata = {
  title: "Bangladesh Now",
  description: "Generated by create next app",
};







export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <NextTopLoader
          color="#F60D2B"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
        />
        {children}

      </body>
    </html >
  );
}
