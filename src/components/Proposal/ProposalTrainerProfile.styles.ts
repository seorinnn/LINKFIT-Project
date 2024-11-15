import { SmallCloseIcon } from '@chakra-ui/icons';
import { Button, CardBody, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';

import { ChattingButton } from '../Chat/ChattingButton';

export const Wrapper = styled.div`
  margin: 10px 0 10px;
  width: 500px;
  cursor: pointer;
`;

export const StyledCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  width: 100%;
  position: relative;
`;

export const StyledProfileImage = styled(Image)`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 1px solid #eeeeee;
  border-radius: 100%;
`;

export const StyledNameText = styled(Text)`
  font-weight: 800;
  font-size: 20px;
`;

export const StyledProposalText = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.mainColor};
`;

export const StyledGymText = styled(Text)`
  font-size: 13px;
  color: gray;
  margin-top: 10px;
`;

export const StyledButtonWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  gap: 10px;
`;

export const StyledChatButton = styled(ChattingButton)`
  width: 120px;
  height: 62px;
`;

export const StyledReviewButton = styled(Button)`
  width: 120px;
  height: 32px;
  margin-top: 15px;
  font-size: 14px;
`;

export const StyledAcceptButton = styled(Button)`
  width: 250px;
  height: 32px;
  margin-top: 8px;
  font-size: 14px;
`;

export const StyledDeleteButton = styled(SmallCloseIcon)`
  position: absolute;
  width: 36px;
  height: 36px;
  top: 16px;
  right: 40px;
`;
