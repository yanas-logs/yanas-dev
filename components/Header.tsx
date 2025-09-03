import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center ">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            yanas
            <span className="text-accentNeon hover:text-accentNeon-hover">
              .
            </span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="xl:flex items-center gap-8">
          <Navbar />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* desktop nav */}
        <div className="xl:flex"></div>
      </div>
    </header>
  );
};

export default Header;
