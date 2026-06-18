import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/theme.css";

/*
 * CarbonOS is dark-mode-first but ships a light theme. The toolbar "Theme" switch
 * (top of the canvas) toggles the `.dark` / `.light` class on <html>; the theme.css
 * tokens do the rest. The canvas background follows the active theme via --color-bg,
 * so the dedicated backgrounds addon is disabled to avoid painting over it.
 */
const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Radius"],
          "Components",
          ["Forms", "Overlays", "Data Display"],
        ],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: { dark: "dark", light: "light" },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
    (Story) => (
      <div className="min-h-screen bg-bg p-6 font-body text-text-primary antialiased">
        <Story />
      </div>
    ),
  ],
};

export default preview;
