"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

interface MeteorData {
  position: number;
  delay: number;
  duration: number;
}

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<MeteorData[]>([]);

  useEffect(() => {
    const meteorCount = number || 20;
    const generated = Array.from({ length: meteorCount }, (_, idx) => ({
      // Spread across 100% of container width
      position: (idx / meteorCount) * 100,
      delay: Math.random() * 5,
      duration: Math.floor(Math.random() * 5) + 5,
    }));
    setMeteors(generated);
  }, [number]);

  // Don't render anything on server, only render on client after useEffect runs
  if (meteors.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className,
          )}
          style={{
            top: "0",
            right: meteor.position + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
          }}
        />
      ))}
    </motion.div>
  );
};
