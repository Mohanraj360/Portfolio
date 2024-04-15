import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const footerMainWrapperCss = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 var(--gutter-padding);
  margin-bottom: var(--padding-dw);
  ${mediaQuery.miniDesktop} {
    flex-direction: column;
    padding-left: var(--gutter-padding);
    align-items: flex-start;
    width: 100%;
    margin-bottom: var(--padding-mid);
  }
`;
