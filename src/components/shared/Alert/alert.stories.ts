import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from './Alert.vue';
const meta: Meta<typeof Alert> = {
    title: 'Shared/Alert',
    component: Alert,
    args: {
        message: 'This is an alert message',
        type: 'info'
    }
};

export default meta;

type Story = StoryObj<typeof Alert>;
export const Default: Story = {};
export const Error: Story = {
    args: {
        type: 'error',
        message: 'This is an error message'
    }
};

export const Warning: Story = {
    args: {
        type: 'warning',
        message: 'This is a warning message'
    }
};

export const Success: Story = {
    args: {
        type: 'success',
        message: 'This is a success message'
    }
};

