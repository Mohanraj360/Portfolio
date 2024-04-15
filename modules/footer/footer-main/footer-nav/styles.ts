import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerNavCss = css`
  --grid-col: 3;
  display: grid;
  grid-template-columns: repeat(var(--grid-col), 1fr);
  gap: 4.5vw;
  width: 65%;
  ${mediaQuery.miniDesktop} {
    margin-top: var(--padding-mw);
    width: 100%;
  }
  ${mediaQuery.mobile} {
    --grid-col: 2;
  }
`;

export const gridItemsValCss = (row: string, col: string) => css`
  ${mediaQuery.desktop} {
    grid-column: ${col};
    grid-row: ${row};
  }
`;

export const footerNavLinkCss = css`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  text-decoration: none;
  gap: calc(2 * var(--scrollbar-width));
  color: inherit;
  .footer-nav-desc {
    color: var(--color-text-gray);
  }
  &:hover {
    .footer-nav-title {
      transform: translateY(-100%);
    }
  }
  ${mediaQuery.tablet} {
    .footer-nav-desc {
      display: none;
    }
  }
`;

export const footerNavTitleWrapperCss = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const footerNavTitleCss = css`
  position: relative;
  transition: transform 0.2s ease;
  &::before {
    position: absolute;
    top: 100%;
    left: 0;
    content: attr(data-span);
    height: 100%;
    width: 100%;
    color: var(--color-highlight);
  }
  ${mediaQuery.tablet} {
    position: static;
  }
`;
