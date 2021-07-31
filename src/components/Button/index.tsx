import React from "react";
import { useStyles } from "./styles";

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, size }) => {
  const classes = useStyles();
  // return <button className={classes.button}>{label}</button>;
  return (
    <div className={classes.button}>
      The quick brown fox jumped over the lazy dog
    </div>
  );
};
