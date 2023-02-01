import React from 'react';

import { Box, Button } from '@chakra-ui/react';

export interface FortunePickerProps {
  onClick: () => void;
  disabled: boolean;
}

export const FortunePicker = ({ onClick, disabled }: FortunePickerProps) => {
  return (
    <Box display='flex' justifyContent='center' marginTop={4}>
      <Button
        colorScheme='teal'
        variant='solid'
        onClick={onClick}
        disabled={disabled}
      >
        Generate Fortune
      </Button>
    </Box>
  );
};
