import type { Meta, StoryObj } from '@storybook/react';
import { HiEmojiHappy } from 'react-icons/hi';

import { Icon } from './Icon';

type Story = StoryObj<typeof Icon>;

export default { component: Icon } as Meta<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'Happy Icon',
    icon: HiEmojiHappy
  }
};
