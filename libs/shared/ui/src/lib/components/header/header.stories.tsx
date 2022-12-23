import { Calculate, Home } from '@mui/icons-material';
import { Box } from '@mui/system';
import { withTests } from '@storybook/addon-jest';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import results from '../../../../.jest-test-results.json';
import { SettingsMenu } from '../settings-menu';
import { Header } from './header';

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  decorators: [withTests({ results })],
  argTypes: {
    logo: {
      control: 'select',
      options: ['Calculate', 'Home', 'None'],
      defaultValue: 'Home',
      mapping: {
        Calculate: <Calculate />,
        Home: <Home />,
        None: undefined,
      },
    },
  },
};
export default Story;

const Template: ComponentStory<typeof Header> = (args, { globals }) => {
  // injects i18n for demo purposes
  const { locale, messages } = globals;
  const { translation } = messages[locale];
  return (
    <Header
      {...args}
      brandText={translation.brandText}
      pages={['products', 'pricing', 'contact'].map((x) => translation[x])}
    />
  );
};

export const AllProps = Template.bind({});
AllProps.args = {
  brandText: 'brandText',
  pages: ['products', 'pricing', 'contact'],
  headerRight: (
    <SettingsMenu
      avatarProps={{
        src: 'https://avatars.githubusercontent.com/u/5302071?v=4',
        alt: 'avatar1',
      }}
      items={[
        { text: 'profile', onClick: () => undefined },
        { text: 'account', onClick: () => undefined },
      ]}
    />
  ),
};

export const TwoSettingsMenus = Template.bind({});
TwoSettingsMenus.args = {
  headerRight: (
    <Box sx={{ display: 'flex' }}>
      <SettingsMenu
        sx={{ mr: 1 }}
        avatarProps={{
          src: 'https://avatars.githubusercontent.com/u/5302071?v=4',
          alt: 'avatar1',
        }}
        items={[
          { text: 'profile', onClick: () => undefined },
          { text: 'account', onClick: () => undefined },
        ]}
      />
      <SettingsMenu
        sx={{ ml: 1 }}
        avatarProps={{
          src: 'https://avatars.githubusercontent.com/u/5302072?v=4',
          alt: 'avatar1',
        }}
        items={[
          { text: 'profile', onClick: () => undefined },
          { text: 'account', onClick: () => undefined },
        ]}
      />
    </Box>
  ),
};

export const NoPages = Template.bind({});
NoPages.args = {
  headerRight: (
    <SettingsMenu
      avatarProps={{
        src: 'https://avatars.githubusercontent.com/u/5302071?v=4',
        alt: 'avatar1',
      }}
      items={[
        { text: 'profile', onClick: () => undefined },
        { text: 'account', onClick: () => undefined },
      ]}
    />
  ),
};

export const NoSettings = Template.bind({});
NoSettings.args = {};
