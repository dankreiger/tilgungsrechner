import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../../.jest-test-results.json';
import { Select } from './select';
const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
  decorators: [withTests({ results })],
};
export default Story;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const AllProps = Template.bind({});
AllProps.args = {
  placeholder: 'Select an option',
  menuItems: [
    {
      label: 'Option 1',
      value: 'option-1',
    },
    {
      label: 'Option 2',
      value: 'option-2',
    },
  ],
};
