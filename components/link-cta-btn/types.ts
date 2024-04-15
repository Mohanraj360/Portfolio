import { SerializedStyles } from "@emotion/react";

export interface LinkCtaBtnProps {
  text: string;
  link: string;
  target?: boolean;
  extraStyles?: SerializedStyles;
}
