import type { Meta, StoryObj } from '@storybook/react';

import { Gallery } from './Gallery';

type Story = StoryObj<typeof Gallery>;

export default { component: Gallery } as Meta<typeof Gallery>;

export const Default: Story = {};
