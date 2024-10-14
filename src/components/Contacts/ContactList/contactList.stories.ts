import type { Meta, StoryObj } from '@storybook/vue3';
import contactList from './ContactList.vue';
import { userEvent, within, expect } from '@storybook/test';
const meta: Meta<typeof contactList> = {
    title: 'Contacts/ContactList',
    component: contactList,
    args: {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@example.com',
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
            },
            {
                id: 3,
                name: 'Alice Johnson',
                email: 'alice.johnson@example.com',
            }
        ],
        modelValue: []
    }
};

export default meta;

type Story = StoryObj<typeof contactList>;
export const Default: Story = {};

export const Filtering: Story = {
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const input = canvas.getByRole('textbox');
        await userEvent.type(input, 'john');
        await new Promise((resolve) => setTimeout(resolve, 500)); // wait for debounce
        const john = canvas.queryByText('John Doe');
        expect(john).toBeInTheDocument();
        const jane = canvas.queryByText('Jane Smith');
        expect(jane).not.toBeInTheDocument();
    }
};
