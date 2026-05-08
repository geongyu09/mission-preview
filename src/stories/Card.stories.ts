import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "../components/common/shared/ui/Card";

const meta = {
  title: "Card",
  component: Card,
  parameters: {},
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardNumber: 1234567812345678,
    validityPeriod: {
      month: 12,
      year: 34,
    },
  },
};

export const Secondary: Story = {
  args: {
    cardNumber: 1234567812345678,
    validityPeriod: {
      month: 12,
      year: 34,
    },
  },
};
