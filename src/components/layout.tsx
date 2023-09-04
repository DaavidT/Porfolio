import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-32  ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
