import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2x1">{game.name}</Heading>
        {/* {game.parent_platforms.map((parent_platform) => (
          <Text key={parent_platform.platform.id}>{parent_platform.platform.name}</Text>
        ))} */}
        <PlatformIconsList platforms={game.parent_platforms.map((p) => p.platform)}></PlatformIconsList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
