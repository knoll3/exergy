import { Theme } from "types/Theme";

const unitSpace = 8;

export const darkTheme: Theme = {
    palette: {
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
        small: "12px",
        medium: "18px",
        large: "24px",
        title: "36px",
    },
};
