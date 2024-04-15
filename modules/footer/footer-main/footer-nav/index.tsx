import { navList } from "@/common-content";
import {
  footerNavCss,
  footerNavLinkCss,
  footerNavTitleCss,
  footerNavTitleWrapperCss,
  gridItemsValCss
} from "@/modules/footer/footer-main/footer-nav/styles";
import { useCallback, useEffect, useRef } from "react";

export default function FooterNav() {
  const sectionTopVals = useRef<number[]>([]);

  useEffect(() => {
    if (innerHeight < 758) return;
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
  const footerNavMapper = (navItem: (typeof navList)[0], index: number) => {
    const { desc, title, grid } = navItem;
    return (
      <div
        onClick={onClickHandler(index)}
        key={`footer-nav-item-${title}`}
        css={[footerNavLinkCss, gridItemsValCss(grid.rowVal, grid.colVal)]}
      >
        <div css={footerNavTitleWrapperCss}>
          <span className="footer-nav-title" data-span={title} css={footerNavTitleCss}>
            {title}
          </span>
        </div>
        <p className="footer-nav-desc">{desc}</p>
      </div>
    );
  };
  return (
    <nav css={footerNavCss}>
      {navList.filter((thing: (typeof navList)[0]) => thing.title != "Contact").map(footerNavMapper)}
    </nav>
  );
}
