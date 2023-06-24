import Footer from "./Footer";
import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen px-1 sm:px-4 bg-gray-50">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
