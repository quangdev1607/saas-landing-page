"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TColumn = (props: {
  className?: string;
  t: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
        duration: props.duration || 10,
      }}
      className={"flex flex-col gap-6 pb-6"}
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <Fragment>
          {props.t.map((t) => (
            <div className="card">
              <span>{t.text}</span>
              <div className="mt-5 flex items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  src={t.imageSrc}
                  alt={t.name}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="font-medium leading-5 tracking-tight">
                    {t.name}
                  </span>
                  <span className="leading-5 tracking-tight">{t.username}</span>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="flex justify-center">
          <span className="btn btn-secondary">Testimonials</span>
        </div>
        <div className="section-heading">
          <h2 className="text-gradient mt-5">What our users say</h2>
          <p className="text-normal mt-5 text-center">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="mt-10 flex max-h-[738px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TColumn t={firstColumn} duration={15} />
          <TColumn t={secondColumn} className="hidden md:block" duration={19} />
          <TColumn t={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
