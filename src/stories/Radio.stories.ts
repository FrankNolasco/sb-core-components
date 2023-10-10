import type { Meta, StoryObj } from '@storybook/react';
import  { Radio } from 'components/atoms/Radio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/atoms/Radio',
  component: Radio,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioDefault: Story = {
    args: {
      name: "options",
      options: [
        { id:"id-1", value: "option1", name: "Opcion 1"},
        { id:"id-2", value: "option2", name: "Opcion 2"}
      ]
    },
  };
  