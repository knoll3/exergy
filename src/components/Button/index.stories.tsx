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

export const FirstStory = Template.bind({});
FirstStory.args = {
  label: "Button",
  size: "medium",
  variant: "contained",
};
