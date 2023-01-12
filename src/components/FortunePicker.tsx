import { Box, Button } from '@chakra-ui/react';
import React from 'react';

export const FortunePicker = () => {
  return (
    <Box display='flex' justifyContent='center' marginTop={4}>
      <Button colorScheme='teal' variant='solid'>
        Generate Fortune
      </Button>
    </Box>
  );
};
