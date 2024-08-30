import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GameGenres from "./component/GameGenres";
import { useState } from "react";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGame";
import SortSelector from "./component/SortSelector";
import GameHeading from "./component/GameHeading";

export interface GameQuery {
  genre: Genre;
  platform: Platform;
  sortOrder: string;
  searchText: string;

}

function App() {
  // here we use query object for binding the  vaious useState in one useState ....
  const [isQuery, setIsQuery] = useState<GameQuery>({} as GameQuery);

  // const [isSelected, setIsSelected] = useState<Genre | null>(null);
  // const [isSelectePlatform, setIsSectedPlatform] = useState<Platform | null>(
  //   null
  // );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main "`,
      }}
      templateColumns={{
        // Thats for fix the sizes of layout space of each base : for mobile and small screen and  lg:large screen like pc and laptop
        base: "1fr",
        lg: "200px 1fr", // for tow colum  "nav nav:thats the second colum "
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setIsQuery({ ...isQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX="5px">
          <GameGenres
            slectingGenre={isQuery.genre}
            onSelected={(genre) => setIsQuery({ ...isQuery, genre })}
          />
          {/* the slectingGenre is to bold the fontSize wehn its selected  => its take the selected id of genre and comparied with orignal genre in GameGenre module  */}
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box marginLeft={2}>
          <GameHeading genre={isQuery} />
          <Flex marginBottom={3} >
            <Box marginRight={2}>
              <PlatformSelector
                selectePlatform={isQuery.platform}
                onSelectPlatform={(platform) =>
                  setIsQuery({ ...isQuery, platform })
                }
              />
            </Box>
            <SortSelector
              onSelectOrder={(sortOrder) =>
                setIsQuery({ ...isQuery, sortOrder })
              }
              sortOrder={isQuery.sortOrder}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={isQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
