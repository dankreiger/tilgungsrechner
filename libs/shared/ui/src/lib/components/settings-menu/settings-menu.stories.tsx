import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../../.jest-test-results.json';
import { SettingsMenu } from './settings-menu';

const Story: ComponentMeta<typeof SettingsMenu> = {
  component: SettingsMenu,
  title: 'Components/SettingsMenu',
  decorators: [withTests({ results })],
};

export default Story;

const Template: ComponentStory<typeof SettingsMenu> = (args) => {
  return <SettingsMenu {...args} />;
};

export const AllProps = Template.bind({});
AllProps.args = {
  avatarProps: {
    src: 'https://avatars.githubusercontent.com/u/5302071?v=4',
    alt: 'avatar1',
  },
  items: [
    { text: 'profile', onClick: () => undefined },
    { text: 'account', onClick: () => undefined },
  ],
};
