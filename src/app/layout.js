import NavBar from "@/layouts/Nav";
import "./globals.css";
import Footer from "@/layouts/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
