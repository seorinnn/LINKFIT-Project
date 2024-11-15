import { AddIcon } from '@chakra-ui/icons';
import { Flex, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { usePtDetail } from '@/hooks/usePtDetail';
import { useSchedule } from '@/hooks/useSchedule';
import { TrainerPtDetail } from '@/types';

import {
  FlexWrapper,
  StyledAddButton,
  StyledButton,
  StyledCard,
  StyledCompleteText,
  StyledDefaultText,
  StyledInput,
} from './TrainerSchedule.styles';
import { TitleText, Wrapper } from './TrainerSchedule.styles';
import { StyledScheduleText } from './UserSchedule.styles';

export const TrainerSchedule = () => {
  const { handleUploadSchedule } = useSchedule();
  const { ptId } = useParams();
  const numberPtId = ptId ? parseInt(ptId, 10) : 0;

  const { ptDetail } = usePtDetail<TrainerPtDetail>(numberPtId);

  const [isAddingSchedule, setIsAddingSchedule] = useState(false);
  const [newScheduleDate, setNewScheduleDate] = useState('');

  const handleAddSchedule = async () => {
    if (!newScheduleDate) {
      alert('날짜를 입력해주세요.');
      return;
    }

    const startTime = new Date(newScheduleDate).toISOString();

    handleUploadSchedule(numberPtId, startTime);
  };

  if (!ptDetail) {
    return <Text>PT 일정 정보를 불러오는 중...</Text>;
  }

  return (
    <Wrapper>
      <Flex>
        <TitleText>PT 일정</TitleText>
        <StyledScheduleText>
          ( {ptDetail?.schedules.length} / {ptDetail?.totalCount} )
        </StyledScheduleText>
      </Flex>
      <FlexWrapper>
        {ptDetail?.schedules.length === 0 ? (
          <StyledDefaultText>등록된 PT 일정이 없습니다.</StyledDefaultText>
        ) : (
          ptDetail.schedules.map((schedule, index) => (
            <StyledCard key={index}>
              <Flex justifyContent='space-between'>
                <StyledScheduleText>
                  {new Date(schedule.date).toLocaleString('ko-KR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </StyledScheduleText>
                <StyledCompleteText>
                  {schedule.isCompleted ? '완료' : '미완료'}
                </StyledCompleteText>
              </Flex>
            </StyledCard>
          ))
        )}

        {isAddingSchedule && (
          <Flex m='0 auto'>
            <StyledInput
              type='datetime-local'
              value={newScheduleDate}
              onChange={(e) => setNewScheduleDate(e.target.value)}
              placeholder='일정 날짜와 시간을 선택하세요'
            />
            <StyledButton onClick={handleAddSchedule}>추가</StyledButton>
          </Flex>
        )}
        <StyledAddButton
          leftIcon={<Icon as={AddIcon} boxSize={3} />}
          onClick={() => setIsAddingSchedule(!isAddingSchedule)}
        >
          일정 추가
        </StyledAddButton>
      </FlexWrapper>
    </Wrapper>
  );
};
