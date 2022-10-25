import Footer from "./Footer";
import React from "react";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
