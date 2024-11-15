import { Button, Flex, Text, Textarea } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitleText = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  margin-top: 28px;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  width: 100%;
`;

export const StyledIcon = styled.div`
  color: ${colors.mainColor};
  stroke: ${colors.mainColor};
  cursor: pointer;
  font-size: 28px;
`;

export const StyledFlex = styled(Flex)`
  margin-bottom: 20px;
`;

export const StyledTextarea = styled(Textarea)`
  width: 80%;
  height: 200px;
  resize: none;
  padding: 20px 30px 20px 30px;
  margin-bottom: 10px;
`;

export const StyledCountText = styled(Text)`
  font-size: 12px;
`;

export const StyledButton = styled(Button)`
  background-color: ${colors.mainColor};
  color: ${colors.white};
  &:hover {
    background-color: white;
    color: ${colors.mainColor};
    border: 1px solid ${colors.mainColor};
  }
  margin-top: 20px;
  width: 150px;
`;
