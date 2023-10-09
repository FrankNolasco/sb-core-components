import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/Typography/Typography';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'example/Typography',
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    variant: {control: "select"}
  }
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowSpaceBetween: Story = {
    args: {
      children: "Hola mundo",
      center: false,
      color: "red",
      fw: "900",
      variant: 'h1'
    },
  };
  