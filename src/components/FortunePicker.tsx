import React from 'react';

import { Box, Button, HStack } from '@chakra-ui/react';

export interface FortunePickerProps {
  generateFortune: () => void;
  disabled: boolean;
  resetFn: () => void;
  showReset: boolean;
}

export const FortunePicker = ({
  generateFortune,
  disabled,
  resetFn,
  showReset,
}: FortunePickerProps) => {
  return (
    <HStack display='flex' justifyContent='center' marginTop={4} spacing={2}>
      <Button
        colorScheme='teal'
        variant='solid'
        onClick={generateFortune}
        disabled={disabled}
      >
        Generate Fortune
      </Button>
      {showReset && (
        <Button colorScheme='red' onClick={resetFn}>
          Reset
        </Button>
      )}
    </HStack>
  );
};
