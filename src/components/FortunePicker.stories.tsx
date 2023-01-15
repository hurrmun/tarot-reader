import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FortunePicker } from './FortunePicker';

export default {
  title: 'FortunePicker',
  component: FortunePicker,
} as ComponentMeta<typeof FortunePicker>;

export const Primary = () => <FortunePicker onClick={() => alert('test')} />;
