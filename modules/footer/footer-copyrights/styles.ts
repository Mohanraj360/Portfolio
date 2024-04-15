import { css } from "@emotion/react";

export const footerCopyrightsWrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(2 * var(--scrollbar-width));
  color: var(--color-text-gray);
  text-align: center;
  .poweredby-text {
    width: 75%;
    line-height: var(--line-height);
  }
`;
