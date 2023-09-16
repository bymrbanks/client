import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

type BudgetProviderProps = {
  children: React.ReactNode;
};

const Layout: React.FC<BudgetProviderProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
