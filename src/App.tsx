import React, { useState } from 'react';

import { ChakraProvider, Container, Box, Text } from '@chakra-ui/react';

import { FortunePicker } from './components/FortunePicker';
import { Card, Deck } from './utils/deck';

const App = () => {
  const [deck, setDeck] = useState(new Deck());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  function generateFortune() {
    // alert('it will rain tomorrow');
    // setSelectedCards((prev) => [deck.drawCard(), ...prev]);
    const drawn = deck.drawCard();
    setSelectedCards((prev) => [drawn, ...prev]);

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
          <FortunePicker onClick={generateFortune} />
          <Box>
            <>
              {selectedCards.map((card) => {
                return <Text key={card.title}>{card.title}</Text>;
              })}
            </>
          </Box>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
