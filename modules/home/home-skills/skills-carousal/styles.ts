import { blobCss } from "@/modules/home/home-landing-bg/home-blobs/styles";
import { mediaQuery } from "@/styles/media-queries";
import { css } from "@emotion/react";

export const skillBlobTwoCss = css`
  ${blobCss};
  top: -25%;
  opacity: 0.6;
  right: -5%;
  background: conic-gradient(rgb(255, 255, 255) 60%, rgb(249, 180, 42) 40%);
  height: 250px;
  border-radius: 29% 71% 70% 30% / 22% 41% 59% 78%;
  user-select: none;
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const skillsTitleCss = css`
  position: absolute;
  color: var(--color-text-gray);
  font-size: var(--font-size-mid);
  left: 50%;
  bottom: 15vw;
  transform: translate(-50%, 50%);
  z-index: 10;
  transition: opacity 0.5s ease;
  overflow: hidden;
  span {
    display: block;
    transition: all 0.3s ease;
    transform: translateY(100%);
  }
  &.active {
    span {
      transition: all 0.3s ease 0.15s;
      transform: translateY(0%);
    }
  }
  ${mediaQuery.tablet} {
    font-size: var(--font-size-icon);
    bottom: calc(1.75 * var(--bor-rad-large));
  }
`;

export const skillBallCss = css`
  border-radius: 50%;
  width: 15vw;
  aspect-ratio: 1;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  background: linear-gradient(123deg, #ffffff 15%, #09b467 60%);
  transition: transform 0.3s ease;
  box-shadow: inset -10px -25px 75px 0 hsla(89, 100%, 45.3%, 0.5), inset 0 0 5px 0 rgba(0, 255, 191, 0.6);
  &::before {
    position: absolute;
    width: 120%;
    content: "";
    left: 50%;
    top: 50%;
    height: 120%;
    border-radius: 100%;
    filter: blur(8rem);
    background: linear-gradient(180deg, rgba(0, 194, 255, 0), #09b467);
    transform: translate(-50%, -80%);
  }
  &::after {
    position: absolute;
    content: "";
    width: 120%;
    left: 50%;
    top: 50%;
    filter: blur(8rem);
    height: 100%;
    background: linear-gradient(180deg, rgba(24, 75, 255, 0), rgba(0, 255, 191, 0.6));
    transform: translate(-50%, -50%);
  }
  ${mediaQuery.tablet} {
    width: 25vw;
    &::after,
    &::before {
      filter: blur(2rem);
    }
  }
`;

export const skillsCarousalWrapperCss = css`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  ${mediaQuery.tablet} {
    height: 50vh;
  }
`;

export const skillsCarousalContainerCss = css`
  position: relative;
  height: 75vw;
  aspect-ratio: 1;
  border-radius: 50%;
  top: 50%;
  cursor: grab;
  transition: transform 1s ease;
  ${mediaQuery.tablet} {
    margin-top: var(--padding-dw);
    height: 150vw;
  }
`;

export const skillItemWrapperCss = (index: number, total: number) => css`
  --val: ${(360 * index) / total}deg;
  height: 100%;
  width: 12.5vw;
  border-radius: 10px;
  position: absolute;
  transform-origin: center;
  transform: translate(-50%, -50%) rotate(var(--val));
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  ${mediaQuery.tablet} {
    width: 25vw;
  }
`;

export const skillItemContainerCss = css`
  width: 100%;
  aspect-ratio: 1;
  background-color: var(--color-text-default);
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 2rem;
`;

export const skillsImgCss = css`
  height: 60%;
  aspect-ratio: 1;
  overflow: hidden;
  img {
    object-fit: cover;
  }
`;
