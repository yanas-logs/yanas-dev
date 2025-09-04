"use client";

import { AnimatePresence } from "motion/react"; // ✅ import motion juga
import { usePathname } from "next/navigation";

import Effect from "./Effect";

const TransitionEffect = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed bg-primary top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Effect/>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default TransitionEffect;
