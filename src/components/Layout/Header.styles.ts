import { ChatIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Z_INDEX from '@/styles/z-index';

export const HEADER_HEIGHT = '54px';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: ${Z_INDEX.header};
  width: 100%;
  max-width: 100vw;
  height: ${HEADER_HEIGHT};
  padding: 0 16px;
  background: #eee;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 16px;
`;

export const StyledChatIcon = styled(ChatIcon)`
  margin-right: 10px;
`;

export const Logo = styled.img`
  height: 30px;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  margin: 0 5px;
  text-decoration: none;
  color: black;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
`;
