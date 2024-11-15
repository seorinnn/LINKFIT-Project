import { Card } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import ReviewsImage from '@/assets/invitation.png';
import { RouterPath } from '@/routes/path';

import {
  StyledCardBody,
  StyledImage,
  StyledText,
  Wrapper,
} from './ReceivedOffers.styles';

export const Reviews = () => {
  const navigate = useNavigate();

  const handleReviewClick = () => {
    navigate(RouterPath.review);
  };

  return (
    <Wrapper onClick={handleReviewClick}>
      <Card height='125px'>
        <StyledCardBody>
          <StyledText>리뷰 보기</StyledText>
          <StyledImage src={ReviewsImage} alt='리뷰 보기' />
        </StyledCardBody>
      </Card>
    </Wrapper>
  );
};
