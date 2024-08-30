import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  const color = score < 70 ? "gold" : score > 70 ? "green" : "";
  return (
    <Badge colorScheme={color} borderRadius="10px">
      {score}
    </Badge>
  );
}
