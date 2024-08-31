"use client";

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar/Navbar";
import Sidebar from "./(components)/Sidebar/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

// connecting redux with next js
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  // grab the sidebar collapse bar
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <div
      className={`${
        isDarkMode ? "dark" : "light"
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={` flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // wrapping entire application with store provider
    // hence redux store will provide same states for all the pages
    // next send different HTML for every single URL
    //  redux will persist and save them like in react
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
