import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        children: {
            control: false;
            description: string;
        };
        theme: {
            control: "text";
            default: string;
            description: string;
        };
        canCopy: {
            default: boolean;
            description: string;
        };
        className: {
            control: false;
            description: string;
        };
    };
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
