import React, { useState, useEffect } from 'react';

import {
  HStack,
  Text,
  Card as ChakraCard,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from '@chakra-ui/react';
import { Card } from '../utils/deck';

interface TableProps {
  selectedCards: Card[];
}

export const Table = ({ selectedCards }: TableProps) => {
  return (
    <HStack justifyContent='center' spacing={16} marginTop={16}>
      {selectedCards.map((card) => {
        return <SelectedCard card={card} />;
      })}
    </HStack>
  );
};

interface SelectedCardProps {
  card: Card;
}

const SelectedCard = ({ card }: SelectedCardProps) => {
  const [isReversed, setIsReversed] = useState(false);

  useEffect(() => {
    if (coinFlip()) {
      setIsReversed(true);
    }
  }, []);

  return (
    <ChakraCard key={card.title} width='100%'>
      <CardHeader paddingBottom={2}>
        <Heading size='md'>{card.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text>
          <Text as='b'>Arcana:</Text> {card.arcana}
        </Text>
        <Text>
          <Text as='b'>Orientation:</Text> {isReversed ? 'Reversed' : 'Upright'}
        </Text>
        <Text>
          <Text as='b'>Meaning:</Text>{' '}
          {isReversed ? card.description.reversed : card.description.upright}
        </Text>
      </CardBody>
    </ChakraCard>
  );
};

function coinFlip() {
  return Math.floor(Math.random() * 2);
}
