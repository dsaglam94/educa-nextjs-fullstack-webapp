import Image from "next/image";
import Link from "next/link";

const NavBanner = ({ title, page }) => {
  return (
    <section className="pt-[4.5rem] relative">
      <div className="relative w-full h-[120px] md:h-[150px]">
        <Image
          objectFit="cover"
          layout="fill"
          src="/assets/heading-bg.jpg"
          alt="navigation banner"
          priority
        />
      </div>
      <div className="text-center space-y-4 absolute top-1/2 left-1/2 -translate-x-1/2">
        <h1 className="font-bold text-3xl md:text-4xl">{title}</h1>
        <div className="space-x-2 text-[1rem] md:text-lg">
          <Link href="/">
            <a className="hover:text-green">Home</a>
          </Link>
          <span>|</span>
          <span className="font-bold text-green">{page}</span>
        </div>
      </div>
    </section>
  );
};

export default NavBanner;
