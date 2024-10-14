import type { Meta, StoryObj } from '@storybook/vue3';
import ContactPage from './ContactPage.vue';
const meta: Meta<typeof ContactPage> = {
    title: 'Contacts/ContactPage',
    component: ContactPage,
    args: {
        user: {
            name: 'John Doe',
            id: 1
        }
    },
    parameters: {
        mockData: [
            {
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET',
                status: 200,
                delay: 1000,
                response: [
                    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
                    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
                    { id: 3, name: 'John Smith', email: 'john.smith@example.com' },
                    { id: 4, name: 'Jane Smith', email: 'jane.smith@example.com' },
                ]
            }
        ]
    }
};

export default meta;

type Story = StoryObj<typeof ContactPage>;
export const Default: Story = {};

export const Error: Story = {
    parameters: {
        mockData: [
            {
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET',
                status: 500,
                response: { error: 'Internal Server Error' }

            }
        ]
    }
};

// export const Filtering: Story = {
//     play: async ({ args, canvasElement }) => {
//         const canvas = within(canvasElement);
//         const input = canvas.getByRole('textbox');
//         await userEvent.type(input, 'john');
//         await new Promise((resolve) => setTimeout(resolve, 500)); // wait for debounce
//         const john = canvas.queryByText('John Doe');
//         expect(john).toBeInTheDocument();
//         const jane = canvas.queryByText('Jane Smith');
//         expect(jane).not.toBeInTheDocument();
//     }
// };
