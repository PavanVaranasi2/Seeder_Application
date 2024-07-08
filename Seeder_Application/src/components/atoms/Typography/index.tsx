import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';

export interface TypoProps extends TypographyProps {
  variant: TypographyProps['variant'] | 'title' | 'heading2' | 'heading3';
  color?: string;
  children: React.ReactNode;
  id?: string;
}

const Typography: React.FC<TypoProps> = ({ variant, color, id, children }) => {
  return (
    <MuiTypography variant={variant} color={color} data-testid={id}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
