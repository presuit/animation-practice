import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const data = Array.from(Array(10).keys());

const CardSliderPage = () => {
  const [index, setIndex] = useState(0);
  const cardContainer = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const cardAnimation = useAnimation();
  const rotateZ = useTransform(
    x,
    [-document.body.clientWidth / 2, 0, document.body.clientWidth / 2],
    ["-15deg", "0deg", "15deg"],
    {
      clamp: true,
    }
  );

  useEffect(() => {
    x.onChange(() => {
      if (cardContainer.current) {
        const containerWidth = cardContainer.current.clientWidth;
        if (x.get() >= containerWidth || x.get() <= -containerWidth) {
          x.set(0);
        }
      }
    });

    return () => {
      x.destroy();
    };
  }, []);

  return (
    <div
      ref={cardContainer}
      className="w-full min-h-screen bg-slate-200 p-5 overflow-hidden relative"
    >
      <section className="max-w-screen-md w-full h-[70vh] bg-gradient-to-b from-slate-300 to-slate-400 rounded-2xl absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center shadow">
        <h1 className="text-7xl font-semibold">
          {data[index + 1 === data.length ? 0 : index + 1]}
        </h1>
      </section>
      <motion.section
        style={{ x, rotateZ }}
        drag="x"
        animate={cardAnimation}
        dragSnapToOrigin
        onDragEnd={async () => {
          if (cardContainer.current) {
            const containerWidth = cardContainer.current.clientWidth;
            const constraint = Math.floor(containerWidth * 0.5);

            console.log(containerWidth, constraint);

            if (x.get() >= constraint) {
              await cardAnimation.start({
                x: containerWidth,
                transition: { type: "tween" },
              });
              setIndex((prev) => (prev + 1 === data.length ? 0 : prev + 1));
            } else if (x.get() <= -constraint) {
              await cardAnimation.start({
                x: -containerWidth,
                transition: { type: "tween" },
              });
              setIndex((prev) => (prev + 1 === data.length ? 0 : prev + 1));
            }
          }
        }}
        className="max-w-screen-md w-full h-[70vh] bg-gradient-to-b from-slate-300 to-slate-400 rounded-2xl absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center shadow cursor-pointer"
      >
        <h1 className="text-7xl font-semibold">{data[index]}</h1>
      </motion.section>
    </div>
  );
};

export default CardSliderPage;
