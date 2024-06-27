import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CustomCircularProgress from '.';

// folder structure in storybook interface
export default {
  title: 'Components/CustomCircularProgress',
  component: CustomCircularProgress,
  argTypes: {
    value: {
      control: 'number',
      description: 'Current value of the progress, from 0 to 100',
    },
    size: {
      control: 'number',
      description: 'Diameter of the circle',
    },
    strokeWidth: {
      control: 'number',
      description: 'Width of the stroke',
    },
  },
};

// defining theme
const theme = createTheme({
  palette: {
    background: {
      default: '#000', // Set the background color for the container
    },
    primary: {
      main: '#A0D7E7', // Set a primary color used in the progress circle
    },
  },
});

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <CustomCircularProgress {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: 50,
  size: 100,
  strokeWidth: 4,
};

export const Empty = Template.bind({});
Empty.args = {
  value: 0,
  size: 100,
  strokeWidth: 4,
};

export const Full = Template.bind({});
Full.args = {
  value: 95,
  size: 100,
  strokeWidth: 4,
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  value: 75,
  size: 150,
  strokeWidth: 8,
};

