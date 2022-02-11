import { useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageTitle from "../components/PageTitle";

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
    <div className="w-full min-h-screen bg-slate-100">
      <PageTitle name="Grid View" />
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
                className="md:w-52 md:h-52 w-80 h-80 relative "
              >
                {selected === item && (
                  <motion.aside
                    ref={onScrollIntoView}
                    initial={{ opacity: 0, scale: 2 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    style={{ scale: 1.05 }}
                    className="absolute top-0 left-0 w-full h-full bg-indigo-500"
                  ></motion.aside>
                )}
                <main
                  style={{
                    backgroundImage: `url(https://picsum.photos/200?random=${
                      item + 1
                    })`,
                  }}
                  onClick={() => onclick(item)}
                  className="absolute top-0 left-0 w-full h-full  flex justify-center items-center cursor-pointer overflow-hidden bg-cover bg-center"
                ></main>
              </motion.section>
            );
          })}
      </div>
      <AnimatePresence>
        {selected !== null ? (
          <div className="fixed top-0 left-0 w-full h-full z-20">
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
              className="fixed bottom-0 left-0 w-full h-[40vh] bg-gradient-to-b from-slate-200 to-slate-400 rounded-tl-3xl rounded-tr-3xl flex justify-center items-center text-5xl text-slate-700 p-10 "
            >
              <span className="text-center font-semibold">{selected}</span>
            </motion.nav>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default GridView;
