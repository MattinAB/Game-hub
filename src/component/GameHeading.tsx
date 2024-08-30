import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  genre: GameQuery;
}

export default function GameHeading({ genre }: Props) {
  // platform  genres  Games
  return (
    <Heading as="h1" marginY={2}>
      {`${genre.platform?.name || ""} ${genre.genre?.name || ""} Games`}
    </Heading>
  );
}
