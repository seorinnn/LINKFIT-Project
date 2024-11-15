import { Box, Card, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { usePt } from '@/hooks/usePt';
import { RouterPath } from '@/routes/path';
import { UserProposalResponse } from '@/types';

import {
  StyledAcceptButton,
  StyledButtonWrapper,
  StyledCardBody,
  StyledChatButton,
  StyledDeleteButton,
  StyledGymText,
  StyledNameText,
  StyledProfileImage,
  StyledProposalText,
  StyledReviewButton,
  Wrapper,
} from './ProposalTrainerProfile.styles';
export const ProposalTrainerProfile = ({
  proposal,
}: {
  proposal: UserProposalResponse;
}) => {
  const navigate = useNavigate();
  const navigateToTrainerDetail = (trainerId: number) => {
    navigate(
      RouterPath.trainerDetail.replace(':trainerId', trainerId.toString())
    );
  };

  const navigateToReview = (trainerId: number) => {
    navigate(RouterPath.review.replace(':trainerId', trainerId.toString()));
  };

  const { handleAcceptPt, handleDeletePt } = usePt();
  return (
    <Wrapper onClick={() => navigateToTrainerDetail(proposal.trainerId)}>
      <Card>
        <StyledCardBody>
          <Flex align='center'>
            <StyledProfileImage
              src={proposal.trainerProfileImageUrl}
              alt='프로필'
            />
            <Box>
              <StyledNameText>{proposal.trainerName} 트레이너</StyledNameText>
              <StyledProposalText>
                {proposal.totalCount}회 {proposal.price}원
              </StyledProposalText>
              <StyledGymText>{proposal.gymName}</StyledGymText>
            </Box>
          </Flex>

          <StyledButtonWrapper>
            <StyledReviewButton
              onClick={(e) => {
                e.stopPropagation();
                navigateToReview(proposal.trainerId);
              }}
            >
              리뷰 보기
            </StyledReviewButton>
            <StyledChatButton
              width='120px'
              height='32px'
              opponentId={proposal.trainerId}
            />
          </StyledButtonWrapper>
          <StyledAcceptButton
            onClick={(e) => {
              e.stopPropagation();
              handleAcceptPt(proposal.ptId);
            }}
          >
            수락하기
          </StyledAcceptButton>
          <StyledDeleteButton
            onClick={(e) => {
              e.stopPropagation();
              handleDeletePt(proposal.ptId);
            }}
          />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
