import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { action } from '@storybook/addon-actions';
import HeaderCard from '.';
import theme from '../../../theme';
import IconPath from '../../../utils/Constants';

const Template = (args) => <HeaderCard {...args} />;

export default {
  title: 'Molecules/HeaderCard',
  component: HeaderCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const GreetingHeader = Template.bind({});
GreetingHeader.args = {
  greeting: true,
  handleClick: action('Clicked on Profile Card!'),
  profileAvatar: IconPath.avatarImg,
  iconSrc: IconPath.arrowDropDownIcon,
};

export const NonGreetingHeader = Template.bind({});
NonGreetingHeader.args = {
  greeting: false,
  heading: 'Cash accleration',
  content: 'Place to create new cash kicks to run your business',
  handleClick: action('Clicked on Profile Card!'),
  profileAvatar: IconPath.avatarImg,
  iconSrc: IconPath.arrowDropDownIcon,
};

export const CustomGreeting = Template.bind({});
CustomGreeting.args = {
  greeting: false,
  heading: 'Hello, User!',
  content: 'Welcome back, your last visit was very productive.',
  handleClick: action('Custom greeting clicked!'),
  profileAvatar: IconPath.avatarImg,
  iconSrc: IconPath.arrowDropDownIcon,
};

export const CustomProfileImg = Template.bind({});
CustomProfileImg.args = {
  greeting: true,
  profileAvatar: '',
  iconSrc: IconPath.arrowDropDownIcon,
  handleClick: action('Clicked!!!'),
};
