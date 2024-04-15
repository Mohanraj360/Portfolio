import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerWrapperCss = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-top: 1px solid var(--color-off-gray);
  padding: calc(2 * var(--padding-dw)) 0 var(--padding-dw) 0;
  ${mediaQuery.tablet} {
    padding: var(--padding-dw) 0 var(--padding-mid) 0;
  }
`;

export const footerBlobOneCss = css`
  --size: 300px;
  --blur: 100px;
  position: absolute;
  z-index: var(--z-low-b);
  filter: blur(var(--blur));
  transform: rotate(-135deg);
  top: 0;
  opacity: 0.8;
  left: -5%;
  background: conic-gradient(rgb(16, 178, 183) 60%, rgb(255, 159, 14) 40%);
  height: var(--size);
  aspect-ratio: 1;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
  ${mediaQuery.tablet} {
    --size: 150px;
    --blur: 50px;
  }
`;
