import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../components/atoms/Button';
import { Typography } from 'components/atoms/Typography';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/atoms/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: "default",
        icon: [
          React.createElement('span', {children: '🚀'}),
        ],
        children: [
            React.createElement(Typography, {children: 'Hola'}),
        ],
    },
  };
  
  
export const Primary: Story = {
  args: {
      type: "primary",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};

export const Link: Story = {
  args: {
      type: "link",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};

export const Ghost: Story = {
  args: {
      type: "ghost",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};


export const Danger: Story = {
  args: {
      type: "danger",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};

export const Warn: Story = {
  args: {
      type: "warn",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};


export const Success: Story = {
  args: {
      type: "success",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};

export const Dark: Story = {
  args: {
      type: "dark",
      icon: [
        React.createElement('span', {children: '🚀'}),
      ],
      children: [
          React.createElement(Typography, {children: 'Hola'}),
      ],
  },
};
