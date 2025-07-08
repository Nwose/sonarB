import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "SonarB",
  description: "Innovating with purpose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
