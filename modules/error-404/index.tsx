import LinkCtaBtn from "@/components/link-cta-btn";
import MessageStrip from "@/components/message-strip";
import NoiseTexture from "@/components/noise-texture";
import { errorCta, errorMsg, errorName } from "@/modules/error-404/content";
import { error404WrapperCss } from "@/modules/error-404/styles";
import HomeBlobs from "@/modules/home/home-landing-bg/home-blobs";
import Link from "next/link";

export default function Error404Module() {
  return (
    <section css={error404WrapperCss}>
      <HomeBlobs />
      <NoiseTexture />
      <MessageStrip rotate="-30deg" zIndex="-1" top="20%" textOne={errorName} textTwo={errorMsg} />
      <MessageStrip rotate="10deg" zIndex="0" top="70%" textOne={errorName} textTwo={errorMsg} />
      <LinkCtaBtn link="/" text={errorCta} target={false} />
    </section>
  );
}
