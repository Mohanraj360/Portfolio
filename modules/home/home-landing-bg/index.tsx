import NoiseTexture from "@/components/noise-texture";
import HomeBlob from "@/modules/home/home-landing-bg/home-blobs";
import LinesAnim from "@/modules/home/home-landing-bg/lines-anim";
import { homeComponentsContainerCss, homeLandingWrapperCss } from "@/modules/home/home-landing-bg/styles";
import HomeMain from "@/modules/home/home-landing-bg/home-main";
import HomeParticles from "@/modules/home/home-landing-bg/home-canvas";

export default function HomeLandingBg() {
  return (
    <section css={homeLandingWrapperCss}>
      <div css={homeComponentsContainerCss}>
        <HomeParticles />
        <NoiseTexture />
        <HomeBlob />
        <LinesAnim />
        <HomeMain />
      </div>
    </section>
  );
}
