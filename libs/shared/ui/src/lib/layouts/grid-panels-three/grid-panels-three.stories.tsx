import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../../.jest-test-results.json';
import { GridPanelsThree } from './grid-panels-three';
const Story: ComponentMeta<typeof GridPanelsThree> = {
  component: GridPanelsThree,
  title: 'Layouts/GridPanelsThree',
  decorators: [withTests({ results })],
};
export default Story;

const Template: ComponentStory<typeof GridPanelsThree> = (args) => (
  <GridPanelsThree {...args} />
);

export const AllProps = Template.bind({});
AllProps.args = {
  one: {
    content: 'Panel 1',
    gridCols: { xs: 12, md: 8, lg: 9 },
  },
  two: {
    content: 'Panel 2',
    gridCols: { xs: 12, md: 4, lg: 3 },
  },
  three: {
    content: 'Panel 3',
    gridCols: { xs: 12 },
  },
};
