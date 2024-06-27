import React from 'react';
import { Box, Typography, CircularProgress, styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface Props {
  value: number; // Current value of the progress, from 0 to 100
  size: number; // Diameter of the circle
  strokeWidth: number; // Width of the stroke
}

// Styled components using theme and props
const ProgressContainer = styled(Box)(
  ({ theme, size }: { theme: any; size: number }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: size,
    height: size,
    backgroundColor: theme.palette.background.default, // Use the default background color from theme
  })
);

const BackgroundCircle = styled(CircularProgress)(
  ({
    theme,
    size,
    thickness,
  }: {
    theme: any;
    size: number;
    thickness: number;
  }) => ({
    color: '#3A3A3D', // Use grey color from theme
    position: 'absolute',
    zIndex: 1,
    width: size,
    height: size,
    strokeWidth: thickness,
  })
);

const ProgressCircle = styled(CircularProgress)(
  ({
    theme,
    size,
    thickness,
  }: {
    theme: any;
    size: number;
    thickness: number;
  }) => ({
    color: '#A0D7E7', // Use primary color from theme
    position: 'absolute',
    zIndex: 2,
    transform: 'rotate(-90deg)', // Rotate to adjust the start position
    width: size,
    height: size,
    strokeWidth: thickness,
  })
);

const StyledTypography = styled(Typography)(({ theme }: { theme: any }) => ({
  position: 'absolute',
  fontSize: '14px',
  fontWeight: 600,
  color: '#A0D7E7', // Use light primary color from theme
  fontFamily: 'Gilroy, sans-serif',
  zIndex: 3,
}));

const CustomCircularProgress: React.FC<Props> = ({
  value,
  size,
  strokeWidth,
}) => {
  const theme = useTheme();
  return (
    <ProgressContainer theme={theme} size={size}>
      <BackgroundCircle
        theme={theme}
        variant="determinate"
        value={100}
        size={size}
        thickness={strokeWidth}
      />
      <ProgressCircle
        theme={theme}
        variant="determinate"
        value={((value + 5) / 100) * 100}
        size={size}
        thickness={strokeWidth}
      />
      <StyledTypography theme={theme}>
        {`${Math.round(value)}%`}
      </StyledTypography>
    </ProgressContainer>
  );
};

export default CustomCircularProgress;
