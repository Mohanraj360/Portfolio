import { imageContainerCss } from "@/components/image-wrapper/styles";
import { ImageWrapperType } from "@/components/image-wrapper/types";
import Image from "next/image";
import Link from "next/link";

export default function ImageWrapper(props: ImageWrapperType) {
  const { alt, src, priority = false, extraStyles, link, title } = props;
  return link ? (
    <Link css={[imageContainerCss, extraStyles]} href={link} title={title}>
      <Image alt={alt} src={src} fill sizes="100%" priority={priority} draggable={false} />
    </Link>
  ) : (
    <div css={[imageContainerCss, extraStyles]} title={title}>
      <Image alt={alt} src={src} fill sizes="100%" priority={priority} draggable={false} />
    </div>
  );
}
