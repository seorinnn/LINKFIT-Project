import { useProfile } from '@/hooks/useProfile';
import { TrainerProfile } from '@/types';

import {
  StyledCard,
  StyledDefaultText,
  StyledGymText,
  StyledTitleText,
} from './TrainerCareer.styles';
export const TrainerGym = () => {
  const profile = useProfile<TrainerProfile>();

  return (
    <StyledCard>
      <StyledTitleText>&#128170; 내 소속</StyledTitleText>
      {!profile ? (
        <StyledDefaultText>등록된 소속이 없습니다.</StyledDefaultText>
      ) : (
        <StyledGymText textAlign='center'>{profile.gymName}</StyledGymText>
      )}
    </StyledCard>
  );
};
