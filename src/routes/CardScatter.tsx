import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInterval } from "../lib/useInterval";

const data = Array.from(Array(20).keys());
const reversedData = data.slice().reverse();
const INTERVAL_TIME = 250;

export default function CardScatter() {
  const [lid, setLid] = useState(0);
  const [intervalTime, setIntervalTime] = useState<number | null>(
    INTERVAL_TIME
  );
  useInterval(() => {
    setLid((prev) => prev + 1);
  }, intervalTime);

  useEffect(() => {
    if (lid >= data.length) {
      setIntervalTime(null);
    }
  }, [lid]);

  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-start relative">
      <aside className="absolute top-0 left-0">
        <span className="text-2xl text-white">{lid}</span>
      </aside>
      <main className={`flex flex-wrap py-5 justify-center items-start`}>
        {data.map((i, _) =>
          i + 1 <= lid ? (
            <motion.div
              layoutId={i + 1 + ""}
              className="w-80 h-80 p-5"
              key={i + 1}
            >
              <div
                onClick={() => {
                  alert(i + 1);
                }}
                className="w-full h-full bg-slate-800 rounded-2xl flex justify-center items-center text-2xl text-white font-semibold cursor-pointer"
              >
                {i + 1}
              </div>
            </motion.div>
          ) : null
        )}
      </main>
      {lid === data.length ? null : (
        <aside className="w-full h-screen fixed top-0 left-0">
          {reversedData.map((i, _) => (
            <motion.div
              layoutId={i + 1 + ""}
              className="w-80 h-80 p-5 absolute top-0 left-0 right-0 bottom-0 m-auto"
              key={i + 1}
            >
              <div className="w-full h-full bg-slate-700 rounded-2xl flex justify-center items-center text-2xl font-semibold text-white">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </aside>
      )}
    </div>
  );
}
