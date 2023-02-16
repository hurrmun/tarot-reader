import React from 'react';

import { HStack, Text } from '@chakra-ui/react';
import { Card } from '../utils/deck';

interface TableProps {
  selectedCards: Card[];
}

export const Table = ({ selectedCards }: TableProps) => {
  return (
    <HStack justifyContent='center' spacing={16} marginTop={16}>
      {selectedCards.map((card) => {
        return <Text key={card.title}>{card.title}</Text>;
      })}
    </HStack>
  );
};
