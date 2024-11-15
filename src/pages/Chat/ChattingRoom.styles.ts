import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Z_INDEX from '@/styles/z-index';

export const FOOTER_HEIGHT = '54px';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 85vh;
  padding-bottom: ${FOOTER_HEIGHT};
  overflow-y: auto;
  z-index: ${Z_INDEX.header - 1};
`;

export const InputWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${Z_INDEX.footer};
  width: 100%;
  height: ${FOOTER_HEIGHT};
  padding: 0 16px;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px 0 10px 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  margin: 0 8px 40px 0;
`;

export const StyledSendImage = styled(Image)`
  cursor: pointer;
  width: 30px;
  margin-bottom: 40px;
`;
