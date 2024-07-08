import React from 'react';
import { Box, styled, useTheme } from '@mui/material';
import Icon from '../../atoms/Icon';
import Avatar from '../../atoms/Avatar';
import Typography from '../../atoms/Typography';
import CustomButton from '../../atoms/Button';
import IconPath from '../../../utils/Constants';

export interface HeaderCardProps {
  greeting: boolean;
  heading?: string;
  content?: string;
  handleClick?: () => void;
  profileAvatar?: string;
  iconSrc?: string;
  currentHour?: number;
}

const StyledHeaderBox = styled(Box)(({ theme }: { theme: any }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1060px',
  height: '71px',
  [theme.breakpoints.down('sm')]: {
    height: '15vh',
  },
}));

const ContentBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

const ProfileBox = styled(Box)(() => ({
  width: '56px',
  height: '32px',
}));

const StyledButton = styled(CustomButton)(() => ({
  padding: 0,
  margin: 0,
}));

const StyledAvatar = {
  borderRadius: '12px',
  width: '32px',
  height: '32px',
};

const ProfileInnerBox = styled(Box)(() => ({
  display: 'flex',
  gap: '8px',
}));

const StyledIcon = styled(Icon)({
  width: '16px',
  height: '16px',
});

const HeaderCard: React.FC<HeaderCardProps> = ({
  greeting,
  heading,
  content,
  handleClick,
  profileAvatar = IconPath.avatarImg,
  iconSrc = IconPath.arrowDropDownIcon,
  currentHour = new Date().getHours(),
}) => {
  const theme = useTheme();

  const checkTime = currentHour < 18 ? 'Good afternoon' : 'Good evening';
  const greetingMessage = currentHour < 12 ? 'Good morning' : checkTime;

  const formattedDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <StyledHeaderBox>
      <ContentBox>
        <Box>
          <Typography variant="title" color={theme.palette.text.highEmphasis}>
            {greeting ? greetingMessage : heading}
          </Typography>
          <Typography variant="heading2" component="span">
            {greeting && ' ✋'}
          </Typography>
        </Box>
        <Box>
          <Typography variant="heading3" color={theme.palette.text.lowEmphasis}>
            {greeting ? formattedDate : content}
          </Typography>
        </Box>
      </ContentBox>
      <ProfileBox>
        <StyledButton onClick={handleClick}>
          <ProfileInnerBox>
            <Avatar
              variant="rounded"
              src={profileAvatar}
              alt="Avatar Icon"
              style={StyledAvatar}
            />
            <Icon src={iconSrc} alt="Arrow Drop Down Icon" />
          </ProfileInnerBox>
        </StyledButton>
      </ProfileBox>
    </StyledHeaderBox>
  );
};

export default HeaderCard;
