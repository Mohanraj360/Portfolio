import { useEffect, useRef } from "react";

export default function useMousePos() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (innerHeight < 758) return;
    const linksWrapper = containerRef.current;
    const linksArray: HTMLAnchorElement[] = Array.from(linksWrapper?.querySelectorAll(".link-wrapper") ?? []);
    const mouseMoveHandler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const { x, y, currentTarget } = e;
      const { left, top, height, width } = (currentTarget as HTMLDivElement).getBoundingClientRect();
      const xPos = x - left;
      const yPos = y - top;
      const xPercentage = 100 - (20 + (xPos / width) * 60);
      const yPercentage = 100 - (20 + (yPos / height) * 60);
      if (currentTarget) {
        (currentTarget as HTMLDivElement).style.setProperty("transition", "ease");
        (currentTarget as HTMLDivElement).style.setProperty(
          "transform",
          `translate(-${xPercentage}%, -${yPercentage}%)`
        );
      }
    };
    const mouseLeaveHandler = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const { currentTarget } = e;
      (currentTarget as HTMLDivElement).style.setProperty("transition", "transform 0.3s ease");
      (currentTarget as HTMLDivElement).style.setProperty("transform", "translate(-50%, -50%)");
    };

    for (const link of linksArray) {
      link.addEventListener("mousemove", mouseMoveHandler);
      link.addEventListener("mouseleave", mouseLeaveHandler);
    }
    return () => {
      for (const link of linksArray) {
        link.removeEventListener("mousemove", mouseMoveHandler);
        link.removeEventListener("mouseleave", mouseLeaveHandler);
      }
    };
  }, []);
  return containerRef;
}
