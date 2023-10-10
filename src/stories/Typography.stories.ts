import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '../components/atoms/Typography';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/atoms/Typography',
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

export const H1: Story = {
    args: {
      size: 'md',
      children: "Hola mundo",
      center: false,
      color: "red",
      fw: "900",
      variant: 'h1'
    },
  };
  

  export const H2: Story = {
    args: {
      size: 'md',
      children: "Hola mundo",
      center: false,
      color: "red",
      fw: "900",
      variant: 'h2'
    },
  };

  
export const H3: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    fw: "900",
    variant: 'h3'
  },
};


export const H4: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    fw: "900",
    variant: 'h4'
  },
};


export const H5: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    fw: "900",
    variant: 'h5'
  },
};


export const H6: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    fw: "900",
    variant: 'h6'
  },
};

export const Span: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    variant: 'span'
  },
};


export const Label: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    variant: 'label'
  },
};


export const P: Story = {
  args: {
      size: 'md',
      children: "Hola mundo",
    center: false,
    color: "red",
    variant: 'p'
  },
};