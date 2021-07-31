import React from "react";
import { useStyles } from "./styles";

interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: "small" | "medium" | "large";
  variant: "outlined" | "contained";
}

export const Button: React.FC<ButtonProps> = ({
  label = "Button",
  onClick,
  size = "medium",
  variant = "contained",
}) => {
  const classes = useStyles();

  const classNames = [classes.button];
  classNames.push(classes[variant]);
  classNames.push(classes[size]);

  return (
    <button onClick={onClick} className={classNames.join(" ")}>
      {label}
    </button>
  );
};
