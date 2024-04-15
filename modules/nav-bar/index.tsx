import { navList } from "@/common-content";
import GlobalContext from "@/context/global-context/global-context";
import useMousePos from "@/hooks/use-mouse-pos";
import { navItemCss, navItemWrapperCss, navWrapperCss } from "@/modules/nav-bar/styles";
import { useCallback, useContext, useEffect, useRef } from "react";

export default function NavBar() {
  const { setState, stateValue } = useContext(GlobalContext);
  const containerRef = useMousePos();
  const sectionTopVals = useRef<number[]>([]);

  useEffect(() => {
    const scrollSections = Array.from(document.querySelectorAll(".scroll-section"));
    const topCalcTimeout = setTimeout(() => {
      for (const scrollSection of scrollSections) {
        sectionTopVals.current.push(scrollSection.getBoundingClientRect().top);
      }
    }, 100);
    topCalcTimeout;
    return () => clearTimeout(topCalcTimeout);
  });

  const onClickHandler = useCallback((index: number) => {
    return () => {
      window.scrollTo({
        behavior: "smooth",
        top: sectionTopVals.current[index]
      });
    };
  }, []);

  const navListMapper = (navItem: (typeof navList)[0], index: number) => {
    const { title } = navItem;
    return (
      <div key={`nav-item-${title}`} css={navItemWrapperCss(title.length)} onClick={onClickHandler(index)}>
        <div className="link-wrapper" css={navItemCss} onClick={() => setState((prevVal) => !prevVal)}>
          <span>{title}</span>
        </div>
      </div>
    );
  };
  return (
    <nav css={navWrapperCss} ref={containerRef} className={stateValue ? "nav-active" : ""}>
      {navList.map(navListMapper)}
    </nav>
  );
}
