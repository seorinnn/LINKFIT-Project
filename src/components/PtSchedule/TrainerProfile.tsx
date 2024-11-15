import { Card, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { usePtDetail } from '@/hooks/usePtDetail';
import { RouterPath } from '@/routes/path';
import { UserPtDetail } from '@/types';

import { ChattingButton } from '../Chat/ChattingButton';
import {
  StyledCardBody,
  StyledDefaultText,
  StyledFlex,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  StyledReviewButton,
  Wrapper,
} from './TrainerProfile.styles';

export const TrainerProfile = () => {
  const navigate = useNavigate();
  const { ptDetail } = usePtDetail<UserPtDetail>();

  const navigateToReview = (trainerId: number) => {
    navigate(
      RouterPath.registerReview.replace(':trainerId', trainerId.toString())
    );
  };

  return (
    <Wrapper>
      {!ptDetail ? (
        <StyledDefaultText>
          아직 PT 매칭이 이루어지지 않았습니다.
        </StyledDefaultText>
      ) : (
        <Card>
          <StyledCardBody>
            <Flex>
              <StyledProfileImage src={ptDetail.profileImageUrl} alt='프로필' />
              <StyledFlex>
                <StyledNameText>{ptDetail.trainerName} 트레이너</StyledNameText>
                <StyledGymText>소속 : {ptDetail.gymName}</StyledGymText>
              </StyledFlex>
            </Flex>
            <Flex>
              <ChattingButton opponentId={ptDetail.trainerId} />
              <StyledReviewButton
                onClick={() => navigateToReview(ptDetail.trainerId)}
              >
                리뷰 작성
              </StyledReviewButton>
            </Flex>
          </StyledCardBody>
        </Card>
      )}
    </Wrapper>
  );
};
