import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";

export default function Home() {
  const boxRef = useRef<HTMLDivElement>(null);
  const [boxCW, setBoxCW] = useState(0);
  const [boxCH, setBoxCH] = useState(0);

  useEffect(() => {
    if (boxRef.current) {
      setBoxCW(boxRef.current.clientWidth);
      setBoxCH(boxRef.current.clientHeight);
    }
  }, []);

  return (
    <div className="w-fulll h-screen bg-black flex justify-center items-center flex-col gap-10">
      <PageTitle name="Home" />
      <div
        ref={boxRef}
        className="max-w-screen-md w-full h-[50vh] bg-slate-300 rounded-2xl grid grid-cols-2 grid-rows-2 overflow-hidden"
      >
        <motion.section
          animate={{
            translateX: [0, boxCW / 2, boxCW / 2, 0, 0],
            translateY: [0, 0, boxCH / 2, boxCH / 2, 0],
            borderRadius: ["64px", "0px", "20px", "32px", "64px"],
            backgroundColor: [
              "#64748b",
              "#ef4444",
              "#3b82f6",
              "#8b5cf6",
              "#64748b",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 bg-slate-500 rounded-full place-self-center"
        ></motion.section>
      </div>
    </div>
  );
}
