import HomeAbout from "@/modules/home/home-about";
import HomeLandingBg from "@/modules/home/home-landing-bg";
import HomeResume from "./home-resume/HomeResume";
import HomeSkills from "@/modules/home/home-skills";
import HomeWorks from "@/modules/home/home-works";


export default function HomePageModule() {
  return (
    <div css={{ paddingTop: "100vh" }}>
      <HomeLandingBg />
      <HomeWorks />
      <div css={{ overflowX: "hidden" }}>
        <HomeAbout />
        <HomeSkills />
        <HomeResume />
      </div>
    </div>
  );
}
