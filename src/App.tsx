import React from 'react';

import { ChakraProvider, Container, Box, Text } from '@chakra-ui/react';

import { FortunePicker } from './components/FortunePicker';
import { Deck } from './utils/deck';

const App = () => {
  function generateFortune() {
    alert('it will rain tomorrow');
  }

  //* For testing
  const deck = new Deck();
  deck.drawCard();

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
        </Box>
      </Container>
    </ChakraProvider>
  );
};

export default App;
