import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridChild } from '../components/skeleton/Grid';
import { Typography } from 'components/atoms/Typography';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/skeleton/Grid',
  component: Grid,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RowSpaceBetween: Story = {
    args: {
        gap: '20px',
        cols: 3,
        children: [
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 1"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 2"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 3"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 4"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 5"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 6"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 7"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 8"})}),
            React.createElement(GridChild, {children: React.createElement(Typography,{children: "Area 9"})}),
        ],
    },
  };
  