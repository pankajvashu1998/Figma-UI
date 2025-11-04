// app/layout.js
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import TopBar from "@/components/Topbar";

export const metadata = {
  title: "Figma Dashboard",
  description: "Figma Dashboard Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F5F5F5] text-[#1A1A1A] font-sans relative">
        {/* Main Content */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
