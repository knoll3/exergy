export interface Theme {
  palette: {
    primary: string;
    background: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      interactive: string;
    };
    appBar: string;
    divider: string;
  };
  spacing: (s: number) => string;
  typography: {
    small: string;
    medium: string;
    large: string;
    title: string;
  };
  fontFamily: string;
}
