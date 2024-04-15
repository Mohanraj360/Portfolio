import { css } from "@emotion/react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"]
});

export const globalStyles = css`
  :root {
    --font-default: ${inter.style.fontFamily};

    --font-size-main: 7rem;
    --font-size-large: 4rem;
    --font-size-mid: 3rem;
    --font-size-icon: 1.6rem;
    --font-size-mini: 0.75rem;
    --font-size-small: 1.4rem;

    --padding-small: 15px;
    --padding-mid: 25px;
    --padding-dw: 10vh;
    --padding-mw: 5vh;
    --bor-rad-large: 50px;
    --scrollbar-width: 5px;
    --line-height: 1.75rem;
    --gutter-padding: 5%;
    --mini-desktop-width: 1200px;
    --tablet-width: 758px;
    --mobile-width: 450px;
    --para-max-width: 900px;

    --z-lowest: -3;
    --z-low-b: -2;
    --z-low-a: -1;
    --z-mid: 0;
    --z-high: 1;
    --z-highest: 2;

    --color-bg: rgb(11, 11, 14);
    --color-highlight: hsl(30, 100%, 45.3%);
    --color-bg-black: rgb(0, 0, 0);
    --color-off-gray: hsl(0, 0%, 28.2%);
    --color-success: hsl(135, 85%, 55%);
    --color-text-default: #fefefe;
    --color-text-default-rgb-ver: 254, 254, 254;
    --color-text-gray: hsl(210, 9.5%, 58.8%);
    --color-text-gray-rgb-ver: 140, 150, 160;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-default);
  }
  #__next {
    color: var(--color-text-default);
    letter-spacing: 1px;
  }
  ::selection {
    color: var(--color-bg-black);
    background: var(--color-highlight);
  }
  body {
    background-color: var(--color-bg);
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-highlight);
      border-radius: var(--bor-rad-large);
    }
  }
  section,
  footer {
    background-color: var(--color-bg);
    z-index: var(--z-mid);
  }
  p {
    line-height: var(--line-height);
  }
`;
