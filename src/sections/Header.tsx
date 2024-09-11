import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-x-3 bg-black py-3 text-sm text-white">
        <p className="hidden text-sm font-normal text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <ArrowRight className="inline-flex size-4 items-center justify-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container flex items-center justify-between">
          <Image src={Logo} alt="logo" width={40} height={40} />
          <MenuIcon className="size-5 md:hidden" />
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-base font-normal text-black/60" href="#">
              About
            </a>
            <a className="text-base font-normal text-black/60" href="#">
              Features
            </a>
            <a className="text-base font-normal text-black/60" href="#">
              Customers
            </a>
            <a className="text-base font-normal text-black/60" href="#">
              Updates
            </a>
            <a className="text-base font-normal text-black/60" href="#">
              Help
            </a>
            <button className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-base font-medium tracking-tight text-white">
              Get started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
