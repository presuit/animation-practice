import { useEffect, useRef } from "react";

export function useInterval(callback: any, delay: number | null) {
  const cbref = useRef<any | null>(null);
  useEffect(() => {
    cbref.current = callback;
  }, [cbref, callback]);

  useEffect(() => {
    function tick() {
      cbref.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
