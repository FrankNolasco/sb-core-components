// .storybook/preview.ts
import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/HOC/ThemeProvider";
import { theme } from "../src/Theme";

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [withThemeProvider],
};

export default preview;
