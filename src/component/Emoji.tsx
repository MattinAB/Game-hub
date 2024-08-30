import meh from "../assets/meh.webp";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}


const emojiMap: { [key: number]: ImageProps } = {
  3: { src: meh, alt: "meh", boxSize: "35px" },
  4: { src: thumbsUp, alt: "recomended", boxSize: "35px" },
  5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
};

export default function Emoji({ rating }: Props) {
  return <Image {...emojiMap[rating]} paddingTop={2}/>;
}
