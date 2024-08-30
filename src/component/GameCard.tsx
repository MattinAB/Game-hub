import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGame";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getcroppepImageUl from "./Image-url";
import Emoji from "./Emoji";

interface Props {
  game: Games;
 
}

export default function GameCard({ game }: Props) {
  return (
    <Card>
      <Image src={getcroppepImageUl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={2}>
          <PlatformIconsList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name} <Emoji  rating= {game.rating_top}/></Heading>
      </CardBody>
    </Card>
  );
}
