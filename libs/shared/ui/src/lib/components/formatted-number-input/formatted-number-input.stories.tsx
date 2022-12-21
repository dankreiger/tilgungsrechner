import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../../.jest-test-results.json';
import {
  FormattedNumberInput,
  SupportedCurrency,
} from './formatted-number-input';
const Story: ComponentMeta<typeof FormattedNumberInput> = {
  component: FormattedNumberInput,
  title: 'Components/FormattedNumberInput',
  decorators: [withTests({ results })],
};
export default Story;

const Template: ComponentStory<typeof FormattedNumberInput> = (args) => (
  <FormattedNumberInput {...args} />
);

export const AllProps = Template.bind({});
AllProps.args = {
  currency: SupportedCurrency.EUR,
  label: 'Amount',
  value: 500_000,
  name: 'amount',
};
