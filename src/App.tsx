import React, { useState } from 'react';

import {
  ChakraProvider,
  Container,
  Box,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';

import { FortunePicker } from './components/FortunePicker';
import { Card, Deck } from './utils/deck';

const App = () => {
  const [deck, setDeck] = useState(new Deck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function generateFortune() {
    const drawn: Card[] = [];
    for (let i = 0; i < 3; i++) {
      drawn.push(deck.drawCard());
    }
    setSelectedCards((prev) => [...drawn]);
    setButtonDisabled(true);

    console.log('selected', selectedCards);
    console.log('deck', deck);
  }

  return (
    <ChakraProvider>
      <Container maxW='7xl' marginTop={4}>
        <Box>
          <Text
            fontSize={{ base: '3xl', lg: '5xl' }}
            textAlign='center'
            fontWeight='bold'
          >
            Tarot App
          </Text>
          <FortunePicker
            onClick={generateFortune}
            disabled={buttonDisabled}
            showReset={true}
            resetFn={() => ''}
          />
          <Box>
            <HStack justifyContent='center' spacing={16} marginTop={16}>
              {selectedCards.map((card) => {
                return <Text key={card.title}>{card.title}</Text>;
              })}
            </HStack>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
