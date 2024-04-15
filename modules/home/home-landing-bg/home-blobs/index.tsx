import { blobOneCss, blobThreeCss, blobTwoCss } from "@/modules/home/home-landing-bg/home-blobs/styles";

export default function HomeBlobs() {
  return (
    <>
      <div css={blobOneCss} />
      <div css={blobTwoCss} />
      <div css={blobThreeCss} />
    </>
  );
}
