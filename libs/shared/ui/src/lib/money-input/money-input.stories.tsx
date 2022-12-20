import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../.jest-test-results.json';
import { MoneyInput, SupportedCurrency } from './money-input';
const Story: ComponentMeta<typeof MoneyInput> = {
  component: MoneyInput,
  title: 'Components/MoneyInput',
  decorators: [withTests({ results })],
};
export default Story;

const Template: ComponentStory<typeof MoneyInput> = (args) => (
  <MoneyInput {...args} />
);

export const AllProps = Template.bind({});
AllProps.args = {
  currency: SupportedCurrency.EUR,
  label: 'Amount',
  value: 500_000,
  name: 'amount',
};
