import {
  Button,
  Flex,
  Input,
  List,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGym } from '@/hooks/useGym';
import { RouterPath } from '@/routes/path';

import {
  StyledListItem,
  StyledSearchButton,
  StyledSelectButton,
  StyledTitleText,
  Wrapper,
} from './SelectGym.styles';

export const SelectGym = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const { gyms, isModalOpen, searchGyms, registerGym, closeModal } = useGym();

  const handleSearch = () => {
    if (keyword.trim() !== '') {
      searchGyms(keyword);
    }
  };

  const handleSelectGym = (gymId: number) => {
    registerGym(gymId);
    navigate(RouterPath.mypage);
  };

  return (
    <Wrapper>
      <StyledTitleText>트레이너님의 헬스장을 입력해주세요!</StyledTitleText>
      <Flex>
        <Input
          type='text'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='헬스장 이름을 입력하세요.'
        />
        <StyledSearchButton onClick={handleSearch}>검색</StyledSearchButton>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent maxWidth='450px'>
          <ModalHeader>검색 결과</ModalHeader>
          <ModalBody>
            <List spacing={3}>
              {gyms.map((gym) => (
                <StyledListItem key={gym.id}>
                  {gym.name}
                  <StyledSelectButton onClick={() => handleSelectGym(gym.id)}>
                    선택
                  </StyledSelectButton>
                </StyledListItem>
              ))}
            </List>
          </ModalBody>
          <ModalFooter>
            <Button onClick={closeModal} colorScheme='gray'>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};
