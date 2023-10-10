import type { Meta, StoryObj } from '@storybook/react';
import Radio, { RadioGroup } from 'components/atoms/Radio';
import React from 'react';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/atoms/Radio',
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioDefault: Story = {
    args: {
        children: [
            React.createElement(Radio, {value: 1,children:"Option 1"}),
            React.createElement(Radio, {value: 2, children:"Option 2"})
        ]
    },
  };
  