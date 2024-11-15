import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

interface StyledChatButtonProps {
  width?: string;
  height?: string;
}

export const StyledChatButton = styled(Button)<StyledChatButtonProps>`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  font-size: 14px;
  margin-top: 15px;

  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '26px'};

  &:hover {
    background-color: #ff467e;
  }
`;
