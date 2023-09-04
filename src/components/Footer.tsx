import Link from "next/link";
import React from "react";
import Layout from "./layout";

const Footer = () => {
  return (
    <footer className="w-full font-medium flex item-center justify-between border-t-2 border-solid text-lg">
      <Layout className="py-8 flex items-center justify-center">
        <span>{new Date().getFullYear()} © David Fernando Talavera</span>
      </Layout>
    </footer>
  );
};

export default Footer;
