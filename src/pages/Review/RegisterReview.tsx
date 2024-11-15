import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useReview } from '@/hooks/useReview';
import { RouterPath } from '@/routes/path';

import {
  StyledButton,
  StyledCountText,
  StyledFlex,
  StyledFormWrapper,
  StyledIcon,
  StyledTextarea,
  StyledTitleText,
  Wrapper,
} from './RegisterReview.styles';

export const RegisterReview = () => {
  const navigate = useNavigate();
  const { submitReview } = useReview();

  const [content, setContent] = useState('');
  const [score, setScore] = useState(3);

  const handleSubmit = async () => {
    if (content.length < 10) {
      alert('리뷰는 최소 10자 이상 작성해야 합니다.');
      return;
    }
    await submitReview({ content, score });
    navigate(RouterPath.home);
  };

  return (
    <Wrapper>
      <StyledTitleText>리뷰 작성하기</StyledTitleText>
      <StyledFormWrapper>
        <StyledFlex>
          {[...Array(5)].map((_, i) => (
            <StyledIcon key={i} onClick={() => setScore(i + 1)}>
              {i < score ? <FaStar /> : <FaRegStar />}
            </StyledIcon>
          ))}
        </StyledFlex>
        <StyledTextarea
          placeholder='리뷰를 작성해주세요'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <StyledCountText>{content.length} / 10자 이상</StyledCountText>
        <StyledButton onClick={handleSubmit}>제출하기</StyledButton>
      </StyledFormWrapper>
    </Wrapper>
  );
};
12;
