import { Container, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FortunePicker } from './components/FortunePicker';

const App = () => {
  function generateFortune() {
    alert('it will rain tomorrow');
  }

  return (
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
  );
};

export default App;
