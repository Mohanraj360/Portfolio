import { css } from "@emotion/react";

export const messageStripCss = (rotate: string, zIndex: string, top: string, bg: boolean) => css`
  display: flex;
  height: var(--padding-mw);
  width: 120vw;
  transform: rotate(${rotate});
  z-index: ${zIndex};
  background-color: ${bg ? "var(--color-bg-black)" : ""};
  position: ${top ? "absolute" : "static"};
  top: ${top ? top : 0};
`;

export const messageStripTrackCss = (bg: boolean) => css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  animation: shift-left 80s linear infinite;
  gap: var(--bor-rad-large);
  padding-right: var(--bor-rad-large);
  background-color: ${bg ? "var(--color-bg-black)" : ""};

  @keyframes shift-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

export const messageInfoContainerCss = css`
  display: flex;
  align-items: center;
  gap: var(--bor-rad-large);
  height: 100%;
  width: fit-content;
  color: var(--color-text-gray);
`;

export const messageNameCss = css`
  color: var(--color-highlight);
  font-weight: 500;
`;

export const messageMsgCss = css`
  flex-shrink: 0;
`;
