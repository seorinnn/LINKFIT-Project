import { Flex, Text } from '@chakra-ui/react';

import { usePtDetail } from '@/hooks/usePtDetail';
import { useSchedule } from '@/hooks/useSchedule';
import { UserPtDetail } from '@/types';

import {
  FlexWrapper,
  StyledCard,
  StyledCompleteButton,
  StyledCompleteText,
  StyledDefaultText,
  StyledFlex,
  StyledScheduleText,
  TitleText,
  Wrapper,
} from './UserSchedule.styles';

export const UserSchedule = () => {
  const { ptDetail } = usePtDetail<UserPtDetail>();
  const { handleCompleteSchedule } = useSchedule();

  return (
    <Wrapper>
      <Flex>
        <TitleText>PT 일정</TitleText>
        <StyledScheduleText>
          ( {ptDetail?.schedules.length} / {ptDetail?.totalCount} )
        </StyledScheduleText>
      </Flex>
      <FlexWrapper>
        {!ptDetail ? (
          <StyledDefaultText>PT 매칭을 기다려주세요!</StyledDefaultText>
        ) : ptDetail.schedules.length === 0 ? (
          <StyledDefaultText>등록된 PT 일정이 없습니다.</StyledDefaultText>
        ) : (
          ptDetail.schedules.map((schedule, index) => (
            <StyledCard key={index}>
              <StyledFlex>
                <Text minWidth='100px'>
                  {new Date(schedule.date).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </Text>
                <Flex alignItems='center'>
                  {schedule.isCompleted ? (
                    <StyledCompleteText>완료</StyledCompleteText>
                  ) : (
                    <StyledCompleteButton
                      onClick={() =>
                        handleCompleteSchedule(schedule.scheduleId)
                      }
                    >
                      완료
                    </StyledCompleteButton>
                  )}
                </Flex>
              </StyledFlex>
            </StyledCard>
          ))
        )}
      </FlexWrapper>
    </Wrapper>
  );
};
