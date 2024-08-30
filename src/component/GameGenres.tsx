import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getcroppepImageUl from "./Image-url";

interface Props {
  onSelected: (genre: Genre) => void;
  slectingGenre: Genre | null;
}

export default function GameGenres({ onSelected, slectingGenre }: Props) {
  const { data, isLoading, error } = useGenre();
  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading paddingY={2}>Genree</Heading>
    <List>
      {data.map((g) => (
        <ListItem key={g.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius="10px"
              objectFit="cover" 
              src={getcroppepImageUl(g.image_background)}
            />
            <Button 
              whiteSpace="normal"
              fontWeight={g.id === slectingGenre?.id ? "bold" : "normal"}
              fontSize="lg"
              textAlign="left"
              variant="link"
              onClick={() => onSelected(g)}
            >
              {g.name}
            </Button>{" "}
            {/* varent is for button looks like link not as useual */}
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
}
