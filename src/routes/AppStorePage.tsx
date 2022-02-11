import { motion } from "framer-motion";
import { useState } from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import PageTitle from "../components/PageTitle";

const imgSrcs = [
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1643289228079-d5472b238d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "https://images.unsplash.com/photo-1643148636641-fc498af944c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1643289952392-4dab0a495947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1445&q=80",
  "https://images.unsplash.com/photo-1643302939031-bd19a64f480a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1643285803934-157d245e468c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1528361237150-8a9a7df33035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1617870314635-fc819547ec11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

export default function AppStorePage() {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen bg-black py-5 ">
      <PageTitle name="App Store View" />
      <div className="max-w-screen-lg w-full flex flex-wrap mx-auto px-10">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <div
              key={item}
              className="md:app-store-first:w-[60%] md:app-store-fourth:w-[60%] md:w-[40%] w-full h-96 p-3"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 1 } }}
                layoutId={item.toString()}
                layout
                onClick={() => {
                  setIndex(item);
                }}
                className="w-full h-full bg-black cursor-pointer rounded-2xl flex justify-center items-center text-slate-100 overflow-hidden"
              >
                <motion.img
                  layout
                  alt="dauwdw"
                  src={imgSrcs[index]}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
      {index && (
        <aside className="fixed top-0 left-0 w-full h-full">
          <div
            onClick={() => {
              setIndex(null);
            }}
            className="w-full h-full cursor-pointer bg-black bg-opacity-50"
          ></div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 right-0 bottom-0 m-auto max-w-screen-md md:w-full w-80 h-[70vh] bg-slate-200 rounded-2xl overflow-hidden flex flex-col gap-3"
          >
            <section className="flex justify-center items-center">
              <motion.img
                layoutId={index.toString()}
                alt="dwauiddadsczc"
                src={imgSrcs[index - 1]}
                className="w-full h-60 md:h-[40vh] object-cover object-center"
              />
            </section>
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col gap-5 items-center h-96 overflow-auto text-center p-5 pt-0 px-10"
            >
              <LoremIpsum p={5} />
            </motion.section>
          </motion.div>
        </aside>
      )}
    </div>
  );
}
