import type { Meta, StoryObj } from '@storybook/vue3';
import contact from './Contact.vue';
const meta: Meta<typeof contact> = {
    title: 'Contacts/Contact',
    component: contact,
    tags: ['autodocs'],
    args: {
        contact: {
            id: 1,
            name: 'John Doe',
            email: ''
        }
    }
};

export default meta;

type Story = StoryObj<typeof contact>;
export const Default: Story = {};