import React from 'react';
import styled from '@emotion/styled';
import Icon from '../../atoms/Icon';
import { Box, Card as MUICard } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import Typography from '../../atoms/Typography';
import CustomButton from '../../atoms/Button';

export interface CongratsCardProps {
  iconSrc?: string;
  heading?: string;
  body?: string | React.ReactNode;
  buttonLabel?: string;
}

const MainCard = styled(Box)<{ theme: Theme }>(({ theme }) => ({
  width: '100%',
  maxWidth: '700px',
  height: 'auto',
  position: 'relative',
  borderRadius: '12px',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    width: '700px',
    height: '259px',
  },
}));

const HeadingBox = styled(Box)<{ theme: Theme }>(({ theme }) => ({
  height: 'auto',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    height: '58px',
    width: '265px',
  },
}));

const InnerCard = styled(MUICard)<{ theme: Theme }>(({ theme }) => ({
  width: '90%',
  height: 'auto',
  position: 'absolute',
  border: '0px',
  top: '16px',
  left: '16px',
  backgroundColor: theme.palette.primary.purple[500],
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '20px',
  boxShadow: 'none',
  [theme.breakpoints.up('sm')]: {
    width: '277px',
    height: '193px',
    top: '32px',
    left: '32px',
  },
}));

export const StyledSpan = styled.span({
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '22.4px',
});

const StyledCustomButton = styled(CustomButton)<{ theme: Theme }>(
  ({ theme }) => ({
    width: '100%',
    height: 'auto',
    gap: '8px',
    borderRadius: '12px',
    border: '1px solid',
    borderColor: theme.palette.primary.white[500],
    opacity: 1,
    '&:hover': {
      backgroundColor: 'inherit',
      border: '1px solid',
    },
    [theme.breakpoints.up('sm')]: {
      width: '163px',
      height: '59px',
    },
  })
);

const CongratsCard: React.FC<CongratsCardProps> = ({
  iconSrc,
  heading,
  body,
  buttonLabel,
}) => {
  const theme = useTheme();
  return (
    <MainCard theme={theme}>
      <Icon src={iconSrc} alt="Congrats Image" />
      <InnerCard theme={theme}>
        <HeadingBox theme={theme}>
          <Typography variant="heading2">{heading}</Typography>
        </HeadingBox>
        <Typography variant="body1">{body}</Typography>
        <StyledCustomButton variant="contained" theme={theme}>
          {buttonLabel}
        </StyledCustomButton>
      </InnerCard>
    </MainCard>
  );
};

export default CongratsCard;
