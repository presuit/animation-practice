import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/*
 todo
 1. 그리드 뷰 뷰포트에 들어오면 애니메이션 해서 보여주기
 2. intersection observer 사용해서 마지막 아이템이 뷰포트에 들어오면 다음 데이터 로드하기(무한 스크롤)
 3. 뷰포트에 들어오면 그때 lazy loading 하기  

*/

const dataOffset = 40;
const testDataLength = 600;

function GridView() {
  const [selected, setSelected] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const observer = useRef<IntersectionObserver>();
  const onclick = (index: number | null) => {
    setSelected(index);
  };

  const onObserverChanged = useCallback(
    (node: HTMLDivElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const maxIndex = Math.ceil(testDataLength / dataOffset);
          if (index + 1 !== maxIndex) {
            setIndex(index + 1);
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [index]
  );

  const onScrollIntoView = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      node.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-900">
      <div
        className={`w-full flex flex-wrap p-20 gap-10 justify-center items-start ${
          selected !== null && "pb-[50vh]"
        }`}
      >
        {Array.from(Array(testDataLength).keys())
          .slice(0, index * dataOffset + dataOffset)
          .map((item) => {
            const isLast = item === index * dataOffset + dataOffset - 1;

            return (
              <motion.section
                key={item}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                }}
                ref={isLast ? onObserverChanged : undefined}
                className="w-52 h-52 relative "
              >
                {selected === item && (
                  <motion.aside
                    ref={onScrollIntoView}
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ scale: 1.05 }}
                    className="absolute top-0 left-0 w-full h-full bg-slate-700 rounded-2xl"
                  ></motion.aside>
                )}
                <main
                  onClick={() => onclick(item)}
                  className="absolute top-0 left-0 w-full h-full rounded-2xl flex justify-center items-center cursor-pointer p-2 bg-slate-800  overflow-hidden"
                >
                  <img
                    src={`https://picsum.photos/200?random=${item + 1}`}
                    className="w-full h-full object-cover object-center rounded-2xl "
                  />
                </main>
              </motion.section>
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
              initial={{ opacity: 0, y: window.outerHeight }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: window.outerHeight }}
              key={"selectedModal"}
              className="absolute bottom-0 left-0 w-full h-[40vh] bg-indigo-200 rounded-tl-3xl rounded-tr-3xl flex justify-center items-center text-5xl text-indigo-900"
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
