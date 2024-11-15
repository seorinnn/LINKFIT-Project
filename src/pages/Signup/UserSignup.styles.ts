import { Button, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px auto;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledAddressText = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  margin: 10px 0 12px;
`;

export const StyledFileButton = styled(Button)`
  background-color: #4f4f4f;
  color: ${colors.white};
  &:hover {
    background-color: ${colors.black};
  }
  margin-bottom: 20px;
`;
