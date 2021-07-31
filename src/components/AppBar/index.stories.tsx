import React, { ComponentProps } from "react";

import { Story, Meta } from "@storybook/react";

import { AppBar } from "./index";

export default {
  title: "AppBar",
  component: AppBar,
} as Meta;

const Template: Story<ComponentProps<typeof AppBar>> = (args) => (
  <AppBar {...args} />
);

export const Main = Template.bind({});
Main.args = {};
