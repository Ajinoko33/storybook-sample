import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Button } from './Button';

const meta = {
  title: 'Antd/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  render: function Render(props) {
    const [{ color, variant }, updateArgs] = useArgs();
    if (variant === undefined && color !== undefined) {
      updateArgs({ variant: 'outlined' });
    }
    return <Button {...props}>Button</Button>;
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sandbox: Story = {};
