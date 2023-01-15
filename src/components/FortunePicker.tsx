import React from 'react';

import { Box, Button } from '@chakra-ui/react';

export interface FortunePickerProps {
  onClick: () => void;
}

export const FortunePicker = ({ onClick }: FortunePickerProps) => {
  return (
    <Box display='flex' justifyContent='center' marginTop={4}>
      <Button colorScheme='teal' variant='solid' onClick={onClick}>
        Generate Fortune
      </Button>
    </Box>
  );
};
