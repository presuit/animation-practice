import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function GridView() {
  const [selected, setSelected] = useState<number | null>(null);
  const onclick = (index: number | null) => {
    setSelected(index);
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-indigo-700 to-indigo-800 ">
      <div
        className={`w-full flex flex-wrap p-20 gap-10 justify-center items-start ${
          selected !== null && "pb-[50vh]"
        }`}
      >
        {Array.from(Array(12 * 10).keys()).map((item) => {
          return (
            <section key={item} className="w-32 h-32 relative">
              {selected === item && (
                <motion.aside
                  initial={{ opacity: 0, scale: 2 }}
                  animate={{ opacity: 1, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ scale: 1.05 }}
                  className="absolute top-0 left-0 w-full h-full bg-indigo-600 rounded-2xl"
                ></motion.aside>
              )}
              <motion.main
                onClick={() => onclick(item)}
                className="absolute top-0 left-0 w-full h-full bg-indigo-900 rounded-3xl flex justify-center items-center cursor-pointer text-indigo-200 overflow-hidden p-2"
              >
                <img
                  src={`https://picsum.photos/200?random=${item + 1}`}
                  className="w-full h-full object-cover object-center rounded-3xl"
                />
              </motion.main>
            </section>
          );
        })}
      </div>
      <AnimatePresence>
        {selected !== null ? (
          <div className="fixed top-0 left-0 w-full h-full ">
            <aside
              onClick={() => onclick(null)}
              className="w-full h-full cursor-pointer"
            ></aside>
            <motion.nav
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: 100 }}
              key={"selectedModal"}
              className="absolute bottom-0 left-0 w-full h-[40vh] bg-indigo-300 rounded-tl-3xl rounded-tr-3xl flex justify-center items-center text-5xl text-indigo-900"
            >
              Current Selected: {selected}
            </motion.nav>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default GridView;
