import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FortunePicker } from './FortunePicker';
import { ChakraProvider } from '@chakra-ui/react';

export default {
  title: 'FortunePicker',
  component: FortunePicker,
} as ComponentMeta<typeof FortunePicker>;

export const Primary: ComponentStory<typeof FortunePicker> = () => (
  <ChakraProvider>
    <FortunePicker
      showReset={false}
      resetFn={() => alert('reset')}
      generateFortune={() => alert('test')}
      disabled={false}
    />
  </ChakraProvider>
);
