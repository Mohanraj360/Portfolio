import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const worksIntroWrapperCss = css`
  display: flex;
  flex-direction: column;
  width: calc(0.5 * var(--tablet-width));
  margin-left: var(--gutter-padding);
  gap: var(--padding-mid);
  height: 100%;
  flex-shrink: 0;
  position: relative;
  ${mediaQuery.mobile} {
    width: 100%;
    margin: 0;
    padding: 0 var(--gutter-padding);
  }
`;

export const workIntroBlobCss = css`
  --size: 250px;
  --blur: 100px;
  position: absolute;
  z-index: var(--z-low-b);
  filter: blur(var(--blur));
  transform: rotate(-135deg);
  top: 20%;
  opacity: 0.4;
  left: -50%;
  background: conic-gradient(rgb(243, 250, 209) 60%, rgb(255, 14, 175) 40%);
  height: var(--size);
  aspect-ratio: 1;
  ${mediaQuery.miniDesktop} {
    --size: 150px;
    --blur: 60px;
    z-index: var(--z-mid);
    left: -20%;
    top: 30%;
  }
`;
