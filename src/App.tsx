import { Container, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FortunePicker } from './components/FortunePicker';

const App = () => {
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
        <FortunePicker />
      </Box>
    </Container>
  );
};

export default App;
