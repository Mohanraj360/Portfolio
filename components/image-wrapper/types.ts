import { SerializedStyles } from "@emotion/react";

export interface ImageWrapperType {
  alt: string;
  src: string;
  link?: string;
  priority?: boolean;
  extraStyles?: SerializedStyles;
  title?: string;
}
