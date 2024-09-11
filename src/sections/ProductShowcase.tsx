"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const showCaseRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: showCaseRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <span className="btn btn-secondary">Boost your productivity</span>
          </div>
          <h2 className="text-gradient my-5">
            A more effective way to track progress
          </h2>
          <p className="text-normal text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="product image" className="mt-5" />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={pyramidImage.src}
            alt="pyramid image"
            width={262}
            height={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <motion.img
            style={{
              translateY: translateY,
            }}
            src={tubeImage.src}
            width={248}
            height={248}
            alt="tube image "
            className="absolute -left-36 bottom-24 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
