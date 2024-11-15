import { useNavigate } from 'react-router-dom';

import { TrainerMyPageProfile } from '@/components/MyPage/Profile/TrainerMyPageProfile';
import { TrainerCareer } from '@/components/MyPage/TrainerCareer';
import { TrainerGym } from '@/components/MyPage/TrainerGym';
import { RouterPath } from '@/routes/path';

import { StyledButton, Wrapper } from './TrainerMyPage.styles';

export const TrainerMyPage = () => {
  const navigate = useNavigate();

  const navigateToSelectGym = () => {
    navigate(RouterPath.selectGym);
  };

  const navigateToRegisterCareer = () => {
    navigate(RouterPath.registerCareer);
  };

  return (
    <Wrapper>
      <TrainerMyPageProfile />
      <StyledButton type='button' onClick={navigateToSelectGym}>
        헬스장 선택하기
      </StyledButton>
      <TrainerGym />
      <StyledButton type='button' onClick={navigateToRegisterCareer}>
        경력 등록하기
      </StyledButton>
      <TrainerCareer />
    </Wrapper>
  );
};
