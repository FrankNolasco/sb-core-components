// .storybook/preview.ts
import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/HOC/ThemeProvider";

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
};

export default preview;
