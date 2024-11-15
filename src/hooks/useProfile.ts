import { useEffect, useState } from 'react';

import {
  getTrainerProfile,
  getTrainerProfileForUser,
} from '@/api/profile/getTrainerProfile';
import { getUserProfile } from '@/api/profile/getUserProfile';
import { useAuth } from '@/hooks/useAuth';

export const useProfile = <T>(trainerId?: number) => {
  const { type } = useAuth();
  const [profile, setProfile] = useState<T | undefined>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (trainerId && type === 'user') {
          // 일반회원이 특정 트레이너의 프로필을 조회할 때
          const data = await getTrainerProfileForUser(trainerId);
          setProfile(data);
        } else if (type === 'user') {
          // 일반회원이 본인의 프로필을 조회할 때
          const data = await getUserProfile();
          setProfile(data);
        } else if (type === 'trainer') {
          // 트레이너가 본인의 프로필을 조회할 때
          const data = await getTrainerProfile();
          setProfile(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [type]);

  return profile;
};
