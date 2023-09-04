"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const AnimatedLogo = () => {
  return (
    <Link href="/">
      <MotionImage
        className="rounded-full"
        src="/assets/images/Logo.png"
        width={50}
        height={50}
        alt="Logo"
        whileHover={{
          scale: 1.5,
        }}
      />
    </Link>
  );
};

export default AnimatedLogo;
