import React from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full p-4 bg-[#F0F5F9]">
      {/* Main Wrapper */}
      <div className="flex flex-grow flex-col bg-transparent max-w-full">
        {/* Page Content */}
        <div className="max-w-full !px-[10px] !mx-[10px]">
          {/* Page Route */}
          <div className="min-h-[calc(100vh-170px)] py-3">
            {children}
          </div>
          {/* End Page */}
        </div>
      </div>
    </div>
  );
};

export default Layout;