"use client";

import Image from "next/image";
import NextLink from "next/link";
import Layout from "./layout";
import { motion } from "framer-motion";

interface CardGalleryProps {
  id: string;
  slug: string;
  image: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
  title: string;
  year: string;
  tags: Array<{
    slug: string;
    title: string;
  }>;
  date: string;
}

const MotionLayout = motion(Layout);

const CardGallery = (props: CardGalleryProps) => {
  return (
    <Layout className="flex items-center justify-center ">
      {/* Main picture frame */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        key={props.id}
        className="z-20  rounded-lg overflow-hidden shadow-lg"
      >
        <NextLink href={`/${props.slug}/`}>
          <div className="relative max-w-max cursor-pointer">
            <div className="relative flex">
              <Image
                src={props.image.url}
                alt={props.image.fileName}
                width={props.image.width}
                height={props.image.height}
                layout="responsive"
              />
            </div>

            <div className="absolute bottom-0 h-full w-full">
              <div className="z-20 grid h-full grid-flow-row items-end  p-4">
                <div>
                  <h2 className="text-xl font-extrabold uppercase ">
                    {props.title}
                  </h2>
                  <div>
                    <p className="flex font-semibold uppercase">
                      {props.year} -{" "}
                      {props.tags.map((tag, index) => (
                        <span
                          key={tag.slug}
                          className={index === 0 ? "" : "ml-1"}
                        >
                          {tag.title}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NextLink>
      </motion.div>
    </Layout>
  );
};

export default CardGallery;
