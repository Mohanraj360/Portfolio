import Heading from "@/components/heading";
import { aboutHeadingCss } from "@/modules/home/home-about/styles";
import { skillsHeadingText } from "@/modules/home/home-skills/content";
import SkillsCarousal from "@/modules/home/home-skills/skills-carousal";
import { homeSkillsWrapperCss, skillBlobOneCss, skillBlobTwoCss } from "@/modules/home/home-skills/styles";

export default function HomeSkills() {
  return (
    <section css={homeSkillsWrapperCss} className="scroll-section">
      <Heading text={skillsHeadingText} extraStyles={aboutHeadingCss} />
      <div css={skillBlobOneCss}></div>
      <div css={skillBlobTwoCss}></div>
      <SkillsCarousal />
    </section>
  );
}
