import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useProposal } from '@/hooks/useProposal';
import { RouterPath } from '@/routes/path';
import { Proposal } from '@/types';

import {
  FormWrapper,
  StyledButton,
  StyledTitleText,
  TitleWrapper,
  Wrapper,
} from './ProposalPage.styles';

export const ProposalPage = () => {
  const navigate = useNavigate();

  const { userId } = useParams();
  const numberUserId = userId ? parseInt(userId, 10) : 0;

  const { handleUploadProposal } = useProposal();

  const [proposalData, setProposalData] = useState<Proposal>({
    userId: numberUserId,
    totalCount: 0,
    price: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProposalData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (proposalData.totalCount <= 0 || proposalData.price <= 0) {
      alert('PT 횟수와 가격은 양수만 입력 가능합니다.');
      return;
    }

    await handleUploadProposal(proposalData);
    navigate(RouterPath.sentProposal);
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <StyledTitleText>회원님에게 PT를 제안해보세요!</StyledTitleText>
      </TitleWrapper>

      <form onSubmit={handleFormSubmit}>
        <FormWrapper>
          <FormControl id='totalCount' isRequired>
            <FormLabel>제안하실 PT 횟수를 입력해주세요. ex) 5</FormLabel>
            <Input
              type='number'
              placeholder='숫자를 입력해주세요.'
              focusBorderColor='#FF1658'
              mb='10px'
              value={proposalData.totalCount}
              onChange={handleInputChange}
            />
          </FormControl>

          <FormControl id='price' isRequired>
            <FormLabel>제안하실 PT 가격을 입력해주세요. ex) 100000</FormLabel>
            <Input
              type='number'
              placeholder='숫자를 입력해주세요.'
              focusBorderColor='#FF1658'
              mb='10px'
              value={proposalData.price}
              onChange={handleInputChange}
            />
          </FormControl>

          <StyledButton type='submit'>PT 제안하기</StyledButton>
        </FormWrapper>
      </form>
    </Wrapper>
  );
};
