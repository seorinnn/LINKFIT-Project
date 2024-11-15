import { Button, ListItem, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  gap: 15px;
`;

export const StyledTitleText = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0 20px;
`;

export const StyledListItem = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const StyledSearchButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  margin-left: 10px;

  &:hover {
    background-color: #ff467e;
  }
`;

export const StyledSelectButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  height: 30px;
  margin-left: 10px;

  &:hover {
    background-color: #ff467e;
  }
`;
