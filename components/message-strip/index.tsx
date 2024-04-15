import {
  messageInfoContainerCss,
  messageMsgCss,
  messageNameCss,
  messageStripCss,
  messageStripTrackCss
} from "@/components/message-strip/styles";
import { MessageStripProps } from "@/components/message-strip/types";

export default function MessageStrip(props: MessageStripProps) {
  const { rotate, zIndex, top = "", textOne, textTwo, bg = true } = props;
  const messageMapper = (_: unknown, index: number) => {
    return (
      <div key={index} css={messageInfoContainerCss}>
        <span css={messageNameCss}>{textOne}</span>
        <span css={messageMsgCss}>{textTwo}</span>
      </div>
    );
  };
  return (
    <div css={messageStripCss(rotate, zIndex, top, bg)}>
      <div css={messageStripTrackCss(bg)}>{Array(10).fill({}).map(messageMapper)}</div>
      <div css={messageStripTrackCss(bg)}>{Array(10).fill({}).map(messageMapper)}</div>
    </div>
  );
}
