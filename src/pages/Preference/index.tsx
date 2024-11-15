import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterInbodyButton } from '@/components/Common/RegisterInbodyButton';
import { usePreference } from '@/hooks/usePreference';
import { RouterPath } from '@/routes/path';
import { Preference } from '@/types';

import {
  FormWrapper,
  InbodyTextWrapper,
  StyledInbodyAdditionalText,
  StyledInbodyText,
  StyledTitleText,
  TitleWrapper,
  Wrapper,
} from './index.styles';

export const PreferencePage = () => {
  const navigate = useNavigate();
  const { handleUploadPreference } = usePreference();

  const [preference, setPreference] = useState<Preference>({
    sportsId: 0,
    gender: '',
    range: null,
    goal: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPreference((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;

    setPreference((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (preference.range === null || preference.range <= 0) {
      alert('거리는 1 이상의 양수로 입력해주세요.');
      return;
    }

    await handleUploadPreference(preference);
    navigate(RouterPath.home);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <StyledTitleText>
          회원님에게 딱 맞는 트레이너와 연결해 드릴게요.
        </StyledTitleText>
      </TitleWrapper>
      <InbodyTextWrapper>
        <StyledInbodyText>
          아직 인바디 이미지를 등록하지 않았거나, 새롭게 등록하고 싶다면?
        </StyledInbodyText>
        <StyledInbodyAdditionalText>
          인바디 이미지를 등록하지 않으면 PT 매칭이 불가능해요!
        </StyledInbodyAdditionalText>
      </InbodyTextWrapper>
      <RegisterInbodyButton />
      <Divider />

      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id='sportsId' isRequired>
            <FormLabel>어떤 운동을 원하시나요?</FormLabel>
            <Select
              placeholder='운동 종류를 선택해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={preference.sportsId}
              onChange={handleSelectChange}
            >
              <option value='1'>헬스 PT</option>
            </Select>
          </FormControl>

          <FormControl id='range' isRequired>
            <FormLabel>선호하는 최대 거리를 알려주세요. 단위: Km</FormLabel>
            <Input
              type='number'
              placeholder='거리를 숫자로 입력해주세요. ex) 50'
              focusBorderColor='#FF1658'
              mb='10px'
              value={preference.range ?? ''}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id='goal' isRequired>
            <FormLabel>목표를 알려주세요.</FormLabel>
            <Input
              type='text'
              placeholder='목표를 입력해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={preference.goal}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id='gender' isRequired>
            <FormLabel>선호하는 트레이너의 성별을 알려주세요.</FormLabel>
            <Select
              placeholder='성별을 선택해주세요'
              focusBorderColor='#FF1658'
              mb='10px'
              value={preference.gender}
              onChange={handleSelectChange}
            >
              <option value='MALE'>남성</option>
              <option value='FEMALE'>여성</option>
            </Select>
          </FormControl>

          <Button
            bg='#FF1658'
            color='#F5F5F5'
            _hover={{ bg: '#FF467E' }}
            size='md'
            mt='24px'
            type='submit'
          >
            매칭 신청
          </Button>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};
