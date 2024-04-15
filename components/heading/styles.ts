import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const headingComponentWrapperCss = css`
  display: flex;
  flex-direction: column;
  font-size: var(--font-size-large);
  font-weight: 500;
  .socials-heading-text {
    &:nth-of-type(1) {
      color: var(--color-text-gray);
    }
  }
  ${mediaQuery.tablet} {
    --font-size-large: 2rem;
  }
`;

export const headingSpanWrapper = css`
  overflow: hidden;
`;

export const headingSpan = css`
  display: block;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;
