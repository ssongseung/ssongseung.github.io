import React from 'react';
import { Outlet } from "react-router-dom";
import { useBreakpoint } from "../hooks/useBreakpoint";
import Footer from './Footer';
import Nav from './Nav';
import Background from './Background';

const Layout = () => {
  const isPC = useBreakpoint(768); 
  
  return (
    <div className="relative w-full h-full text-white overflow-hidden md:h-screen min-h-screen">
      <Background />
      <div className="flex flex-col h-full md:flex-row min-h-[inherit] md:items-center">
        <Nav />
        <main className="flex-1 w-full h-full overflow-hidden md:h-[80%]">
          <section className="relative w-full h-full">
            <Outlet />
          </section>
        </main>
        {!isPC && <Footer />}
      </div>
    </div>
  );
};

export default Layout;