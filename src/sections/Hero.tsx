"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] pb-20 pt-8 md:pb-10 md:pt-5"
    >
      <div className="container">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="btn btn-secondary">Version 2.0 is here</div>
            <h1 className="text-gradient mt-6 text-left text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="text-normal mt-6 text-[22px]">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="mt-[30px] flex items-center gap-1">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                <span>Learn more</span>
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <motion.img
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              src={cogImage.src}
              alt="cog image"
              className="h-full md:absolute md:left-6 md:w-auto md:max-w-none lg:left-0"
            />
            <motion.img
              src={cylinderImage.src}
              style={{
                translateY: translateY,
              }}
              alt="cylinder"
              width={220}
              height={220}
              className="-left-32 -top-8 hidden md:absolute md:block"
            />
            <motion.img
              src={noodleImage.src}
              style={{
                translateY: translateY,
                rotate: 30,
              }}
              alt="noodle"
              width={220}
              className="absolute left-[448px] top-[524px] hidden rotate-45 lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
