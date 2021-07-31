import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Contained = Template.bind({});
Contained.args = {
  label: "Button",
  size: "medium",
  variant: "contained",
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: "Button",
  size: "medium",
  variant: "outlined",
};
