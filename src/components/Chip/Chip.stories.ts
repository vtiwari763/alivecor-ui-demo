import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip";

const meta = {
  title: "Chips",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
   
  },
  args: { },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
   label: "New Items",
   avatar: "12",
  },
};

export const Abnormal: Story = {
  args: {
   label: "New Items",
   avatar: "12",
   type:"abnormal"
  },
};

export const NeedAttention: Story = {
  args: {
   label: "New Items",
   avatar: "12",
   type:"needAttention"
  },
};

export const Severe: Story = {
  args: {
   label: "New Items",
   avatar: "12",
   type:"severe"
  },
};


export const Crisis: Story = {
  args: {
   label: "New Items",
   avatar: "12",
   type:"crisis"
  },
};