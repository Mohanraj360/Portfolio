import { footerBgWrapperCss, footerSvgOneCss, footerSvgTwoCss } from "@/modules/footer/footer-bg/styles";

export default function FooterBg() {
  return (
    <div css={footerBgWrapperCss}>
      <svg width="1688" height="1769" xmlns="http://www.w3.org/2000/svg" css={footerSvgOneCss}>
        <path
          d="M900.4 1490c-249.6 158.3-536.8 246-858.5 278L0 1741.8c40.8-9.7 71-2.2 234-40 163.2-37.8 290.4-74.5 427.2-163.5C864.7 1398.2 946 1193.2 717 852.7c-145.1-195.4-157-400.2-26.5-609.4C836.5 9.1 1181.2-78 1440.4 83.7c234 146.2 321.1 491 175 725.3-96 172.7-199.2 375.4-715 681z"
          stroke="rgba(99, 99, 99, 0.25)"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        ></path>
      </svg>
      <svg width="2145" height="2248" xmlns="http://www.w3.org/2000/svg" css={footerSvgTwoCss}>
        <path
          d="M1000.7 354.3C1317.8 153 1682.9 41.6 2091.7 1l53.3 33.3c-51.9 12.3-90.2 2.8-297.5 50.9-207.3 48-369 94.7-542.9 207.8-258.5 178.1-361.9 438.7-70.8 871.4 184.4 248.4 199.4 508.7 33.7 774.6-185.6 297.7-623.7 408.4-953 202.8C17 1956.1-93.7 1517.7 91.9 1220c122-219.6 253.3-477.2 908.8-865.7z"
          stroke="rgba(99, 99, 99, 0.25)"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  );
}
