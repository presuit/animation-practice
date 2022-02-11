import { motion } from "framer-motion";
import LoremIpsum from "react-lorem-ipsum";

const data = Array.from(Array(100).keys());

interface IText {
  isEven: boolean;
}

const Text: React.FC<IText> = ({ isEven }) => {
  return (
    <motion.div
      className={`w-1/2 h-full text-center flex items-center font-medium md:text-lg text-sm ${
        isEven ? "bg-teal-400" : "bg-emerald-400"
      } rounded-2xl p-3 px-5 shadow-md`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true, margin: "0px 0px -30% 0px" }}
    >
      {<LoremIpsum p={1} avgWordsPerSentence={5} />}
    </motion.div>
  );
};

const OnViewportEnter = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-emerald-500 to-teal-500">
      <main className="container mx-auto px-10 py-20 md:px-20 flex flex-col items-center gap-[50vh] overflow-hidden">
        {data.map((d) => {
          const isEven = d % 2 === 0;
          return (
            <div className="w-full h-[50vh] flex gap-5">
              {!isEven && <Text isEven={isEven} />}
              <motion.section
                key={d}
                viewport={{ once: true, margin: "0px 0px -30% 0px" }}
                initial={{
                  opacity: 0,
                  x: isEven ? -100 : 100,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "spring" }}
                className={`w-1/2 h-full  bg-slate-200 text-slate-700 text-5xl font-semibold flex justify-center items-center shadow-md rounded-2xl ${
                  isEven ? "self-start" : "self-end"
                }`}
              >
                {d}
              </motion.section>
              {isEven && <Text isEven={isEven} />}
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default OnViewportEnter;
