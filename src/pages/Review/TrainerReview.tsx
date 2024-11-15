import { Flex, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth'; // useAuth 훅을 가져옴
import { useReview } from '@/hooks/useReview';

import { StyledIcon } from './RegisterReview.styles';
import {
  StyledCard,
  StyledCardBody,
  StyledDateText,
  StyledText,
  StyledTitleText,
  Wrapper,
} from './TrainerReview.styles';

export const TrainerReview = () => {
  const { trainerId } = useParams<{ trainerId: string }>();
  const { reviews, fetchMyReviews, fetchReviews } = useReview(
    trainerId ? Number(trainerId) : undefined
  );
  const { type } = useAuth();

  useEffect(() => {
    if (type === 'trainer') {
      fetchMyReviews();
    } else if (type === 'user' && trainerId) {
      fetchReviews(Number(trainerId));
    }
  }, [type, trainerId, fetchMyReviews, fetchReviews]);

  return (
    <Wrapper>
      <StyledTitleText>지난 회원님들의 리뷰</StyledTitleText>

      {reviews.length > 0 ? (
        <VStack>
          {reviews.map((review, index) => (
            <StyledCard key={index}>
              <StyledCardBody>
                <Flex>
                  {[...Array(5)].map((_, i) => (
                    <StyledIcon
                      as={i < review.score ? FaStar : FaRegStar}
                      key={i}
                    />
                  ))}
                  <StyledDateText>
                    {new Date(review.createDate).toLocaleDateString()}
                  </StyledDateText>
                </Flex>
                <StyledText>{review.content}</StyledText>
              </StyledCardBody>
            </StyledCard>
          ))}
        </VStack>
      ) : (
        <Text>아직 작성된 리뷰가 없습니다.</Text>
      )}
    </Wrapper>
  );
};
