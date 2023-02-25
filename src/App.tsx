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
import { Table } from './components/Table';

const App = () => {
  const [deck, setDeck] = useState(new Deck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showReset, setShowReset] = useState(false);

  function generateFortune() {
    const drawn: Card[] = [];
    for (let i = 0; i < 3; i++) {
      drawn.push(deck.drawCard());
    }
    setSelectedCards((prev) => [...drawn]);
    setButtonDisabled(true);
    setShowReset(true);

    console.log('selected', selectedCards);
    console.log('deck', deck);
  }

  function resetFortune() {
    setDeck(new Deck());
    setSelectedCards([]);
    setButtonDisabled(false);
    setShowReset(false);
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
            generateFortune={generateFortune}
            disabled={buttonDisabled}
            showReset={showReset}
            resetFn={resetFortune}
          />
          <Table selectedCards={selectedCards} />
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
