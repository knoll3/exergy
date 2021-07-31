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

export const decorators = [
  (Story) => (
    <ThemeProvider theme={darkTheme}>
      <Story />
    </ThemeProvider>
  ),
];
