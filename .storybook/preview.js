import { ThemeProvider } from "react-jss";
import { darkTheme } from "theme/dark-theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "exergy-primary",
    values: [
      {
        name: "exergy-primary",
        value: "#031f30",
      },
      {
        name: "exergy-secondary",
        value: "#0e161b",
      },
    ],
  },
};

// Apply the font family in a container around the Story component
export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <div style={{ fontFamily: darkTheme.fontFamily }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
