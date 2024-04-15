import { css } from "@emotion/react";

const rotateKeyframes = css`
  animation: rotate-name 15s linear infinite;
  @keyframes rotate-name {
    0% {
      transform: translate(-50%, -50%) scale(0.425) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(0.425) rotateZ(360deg);
    }
  }
`;

export const nameSvg = css`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transition: scale 0.3s ease-in-out;
  &:hover {
    animation-play-state: paused;
  }
  ${rotateKeyframes}
`;
