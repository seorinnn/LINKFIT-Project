import { Card, CardBody, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitleText = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0 28px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

export const StyledCardBody = styled(CardBody)`
  min-width: 300px;
  width: 500px;
`;

export const StyledIcon = styled.div`
  color: ${colors.mainColor};
  stroke: ${colors.mainColor};
  font-size: 28px;
`;

export const StyledDateText = styled(Text)`
  margin: 9px 0px 0px 10px;
  font-size: 13px;
`;

export const StyledText = styled(Text)`
  margin-top: 20px;
`;
