import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface IAcordianData {
  id: number;
  imgSrc: string;
}

interface IAcordian {
  data: IAcordianData[];
}

function Acordian({ data }: IAcordian) {
  const [index, setIndex] = useState(data[0].id);
  const handleClick = (index: number) => {
    setIndex(index);
  };
  return (
    <div
      className={`w-full h-full flex items-center justify-start rounded-2xl overflow-hidden`}
    >
      <AnimatePresence initial={false}>
        {data.map((acordian) => {
          if (acordian.id === index) {
            return (
              <motion.div
                key={acordian.id}
                animate={{ width: "100%" }}
                transition={{ type: "tween", duration: 0.5 }}
                onClick={() => handleClick(acordian.id)}
                className={`h-full flex justify-center items-center relative`}
              >
                <img
                  alt={acordian.id.toString()}
                  src={acordian.imgSrc}
                  className="w-full h-full object-cover object-center opacity-50"
                />
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ type: "spring", delay: 0.5, duration: 2 }}
                  className="absolute z-10 top-0 left-0 right-0 bottom-0 m-auto w-2/3 h-2/3 bg-slate-200 rounded-2xl flex justify-center items-center"
                >
                  <h1 className="text-5xl font-semibold">{acordian.id}</h1>
                </motion.div>
              </motion.div>
            );
          } else {
            return (
              <motion.div
                key={acordian.id}
                animate={{ width: "10%" }}
                transition={{ type: "tween", duration: 0.5 }}
                onClick={() => handleClick(acordian.id)}
                className={`w-[10%] h-full cursor-pointer`}
              >
                <img
                  alt={acordian.id.toString()}
                  src={acordian.imgSrc}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            );
          }
        })}
      </AnimatePresence>
    </div>
  );
}

export default Acordian;
