import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import "./globals.css";
export const metadata: Metadata = {
  title:"Ajay | AIML Engineer",
  description : "Personal developer portfolio and technical case studies.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar/>
          <main className="flex-1">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}