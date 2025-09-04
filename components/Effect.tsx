import { motion } from "motion/react";

// variant
const effectAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseIndex = (index: number) => {
  const totalSteps = 9; // number of steps
  return totalSteps - index - 1;
};

const Effect = () => {
  return (
    <>
      {[...Array(9)].map((_, index: number) => (
        <motion.div
          key={index}
          variants={effectAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.7,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Effect;
