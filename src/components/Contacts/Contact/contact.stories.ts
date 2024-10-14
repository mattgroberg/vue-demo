import type { Meta, StoryObj } from '@storybook/vue3';
import contact from './Contact.vue';
const meta: Meta<typeof contact> = {
    title: 'Contacts/Contact',
    component: contact,
    args: {
        modelValue: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com'
        }
    }
};

export default meta;

type Story = StoryObj<typeof contact>;
export const Default: Story = {};
export const Editing: Story = {
    args: {
        editing: true
    }
};