"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 md:py-24">
      <div className="relative mx-auto max-w-2xl">
        <div className="container">
          <h2 className="text-gradient">Sign up for free today</h2>
          <p className="text-normal mt-5 text-center">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            style={{
              translateY,
            }}
            src={starImage.src}
            alt="star image"
            width={360}
            height={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            style={{
              translateY,
            }}
            src={springImage.src}
            alt="srping image"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="mt-10 flex items-center justify-center gap-2">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-secondary gap-1">
            Learn more{" "}
            <span>
              <ArrowRight className="size-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
