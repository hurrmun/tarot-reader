import React from 'react';

import { Box, Button, HStack } from '@chakra-ui/react';

export interface FortunePickerProps {
  onClick: () => void;
  disabled: boolean;
  resetFn: () => void;
  showReset: boolean;
}

export const FortunePicker = ({
  onClick,
  disabled,
  resetFn,
  showReset,
}: FortunePickerProps) => {
  return (
    <HStack display='flex' justifyContent='center' marginTop={4} spacing={2}>
      <Button
        colorScheme='teal'
        variant='solid'
        onClick={onClick}
        disabled={disabled}
      >
        Generate Fortune
      </Button>
      {showReset && <Button colorScheme='red'>Reset</Button>}
    </HStack>
  );
};
