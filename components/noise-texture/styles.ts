import { css } from "@emotion/react";

export const noiseWrapperCss = css`
  background: url("/images/noise.png");
  background-repeat: repeat;
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  z-index: var(--z-low-a);
`;
