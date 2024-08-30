import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkelten from "./GameCardSkelten";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

//  here using Props from expoprting  GameQuery  as object
interface Props {
  gameQuery: GameQuery;
}

// interface Props {
//   selectingGenre : Genre | null ,
//   selectedPlatform: Platform | null
// }

export default function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeltons = [1, 2, 3, 4, 5, 6];


  if (error) return <Text>{error}</Text>;

  
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeltons.map((skelton) => (
          <GameCardContainer key={skelton}>
            {" "}
            {/* the skelten need just the key for rendering */}
            <GameCardSkelten />
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
}
