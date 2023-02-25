import React from 'react';

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
        return (
          <ChakraCard key={card.title} width='100%'>
            <CardHeader paddingBottom={2}>
              <Heading size='md'>{card.title}</Heading>
            </CardHeader>
            <CardBody>
              <Text>Arcana: {card.arcana}</Text>
              <Text>{card.description.upright}</Text>
            </CardBody>
          </ChakraCard>
        );
      })}
    </HStack>
  );
};
