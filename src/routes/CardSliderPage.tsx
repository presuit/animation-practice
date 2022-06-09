import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PageTitle from "../components/PageTitle";

const data = Array.from(Array(10).keys());

const CardSliderPage = () => {
  const [index, setIndex] = useState(0);
  const cardAnimation = useAnimation();
  const cardContainer = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(
    x,
    [-document.body.clientWidth / 2, 0, document.body.clientWidth / 2],
    ["-15deg", "0deg", "15deg"],
    {
      clamp: true,
    }
  );
  const backgroundColor = useTransform(
    x,
    [-document.body.clientWidth / 2, 0, document.body.clientWidth / 2],
    ["#2dd4bf", "#e2e8f0", "#34d399"],
    { clamp: true }
  );

  const onDragEnd = async () => {
    if (cardContainer.current) {
      const containerWidth = cardContainer.current.clientWidth;
      const constraint = Math.floor(containerWidth / 2);

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
  };

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
  }, [x]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, type: "tween" } }}
      ref={cardContainer}
      className="w-full min-h-screen bg-gradient-to-r from-teal-500 to-emerald-500 overflow-hidden relative "
    >
      <PageTitle name="Card Slider" />
      <section className="max-w-screen-md md:w-full w-[90%]  aspect-square bg-slate-200 rounded-2xl absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center shadow-md">
        <h1 className="text-7xl font-semibold text-slate-700">
          {data[index + 1 === data.length ? 0 : index + 1]}
        </h1>
      </section>
      <motion.section
        style={{ x, rotateZ, backgroundColor }}
        drag="x"
        animate={cardAnimation}
        dragSnapToOrigin
        onDragEnd={onDragEnd}
        className="max-w-screen-md md:w-full w-[90%]  aspect-square bg-slate-200 rounded-2xl absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center items-center shadow-md cursor-pointer"
      >
        <h1 className="text-7xl font-semibold text-slate-700">{data[index]}</h1>
      </motion.section>
    </motion.div>
  );
};

export default CardSliderPage;
