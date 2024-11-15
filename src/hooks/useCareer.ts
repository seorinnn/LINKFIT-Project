import { useEffect, useState } from 'react';

import { getCareer, getTrainerCareer } from '@/api/career/getCareer';
import { postCareer } from '@/api/career/postCareer';
import { Career, CareerResponse } from '@/types';

export const useCareer = (trainerId?: number) => {
  const [careers, setCareers] = useState<CareerResponse[]>([]);

  const handleUploadCareer = async (careers: Career[]) => {
    try {
      await postCareer(careers);
      alert('경력이 성공적으로 업로드되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('경력 업로드 실패:', error);
      alert('경력 업로드에 실패했습니다.');
    }
  };

  const fetchCareer = async () => {
    try {
      // trainerID가 있으면 일반회원이 다른 트레이너 경력을 조회하는 경우,
      // trainerID가 없으면 트레이너가 본인 경력을 조회하는 경우
      const data = trainerId
        ? await getTrainerCareer(trainerId)
        : await getCareer();
      setCareers(data);
    } catch (error) {
      console.error('경력 데이터를 가져오는데 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, [trainerId]);

  return { careers, handleUploadCareer };
};
