import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerCreditsWrapperCss = css`
  margin: var(--padding-mw) 0 var(--padding-mid) 0;
  display: flex;
  gap: var(--scrollbar-width);
  ${mediaQuery.mobile} {
    flex-direction: column;
    text-align: center;
  }
`;

export const creditCss = css`
  text-decoration: none;
  color: var(--color-highlight);
  &:hover {
    text-underline-offset: var(--scrollbar-width);
    text-decoration: underline;
  }
`;
