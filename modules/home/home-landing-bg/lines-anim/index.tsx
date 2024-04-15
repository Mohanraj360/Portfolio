import {
  leftLinesCss,
  leftLinesWrapperCss,
  rightLinesCss,
  rightLinesWrapperCss
} from "@/modules/home/home-landing-bg/lines-anim/styles";

export default function LinesAnim() {
  const leftLinesMapper = (_: unknown, index: number) => {
    return <span key={`line-${index}`} css={leftLinesCss(index + 1)}></span>;
  };
  const rightLinesMapper = (_: unknown, index: number) => {
    return <span key={`line-${index}`} css={rightLinesCss(index + 1)}></span>;
  };
  return (
    <>
      <div css={leftLinesWrapperCss}>{Array(10).fill({}).map(leftLinesMapper)}</div>
      <div css={rightLinesWrapperCss}>{Array(10).fill({}).map(rightLinesMapper)}</div>
    </>
  );
}
