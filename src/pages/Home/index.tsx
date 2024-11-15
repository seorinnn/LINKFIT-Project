import { Image } from '@chakra-ui/react';

import HomeImage from '@/assets/Home.png';
import { useAuth } from '@/hooks/useAuth';

import { TrainerHomePage } from './TrainerHome';
import { UserHomePage } from './UserHome';
import { Wrapper } from './UserHome.styles';

export const HomePage = () => {
  const { isAuthenticated, type } = useAuth();

  const renderHomeScreen = () => {
    switch (type) {
      case 'user':
        return <UserHomePage />;
      case 'trainer':
        return <TrainerHomePage />;
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        renderHomeScreen()
      ) : (
        <Wrapper>
          <Image src={HomeImage} alt='홈' />
        </Wrapper>
      )}
    </div>
  );
};
