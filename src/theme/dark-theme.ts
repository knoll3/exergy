import { Theme } from "types/Theme";

const unitSpace = 8;

export const darkTheme: Theme = {
  palette: {
    primary: "#4098ed",
    background: {
      primary: "#031f30",
      secondary: "#0e161b",
    },
    text: {
      primary: "#d3d4d4",
      secondary: "#b3b4b4",
      interactive: "#9cd4f7",
    },
    appBar: "#031f30",
    divider: "#4f6071",
  },
  spacing: (s: number) => `${s * unitSpace}px`,
  typography: {
    small: "10px",
    medium: "14px",
    large: "18px",
    title: "36px",
  },
  // Add new fonts here and to src/index.css
  fontFamily: "'Mukta', sans-serif",
};
