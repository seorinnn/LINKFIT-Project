import { useState } from 'react';

import { getGym } from '@/api/gym/getGym';
import { postGym } from '@/api/gym/postGym';
import { Gym } from '@/types';

export const useGym = () => {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchGyms = async (keyword: string) => {
    try {
      const gymList = await getGym(keyword);
      setGyms(gymList);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Failed to search gyms:', error);
    }
  };

  const registerGym = async (gymId: number) => {
    try {
      await postGym(gymId);
      alert('헬스장이 성공적으로 등록되었습니다.');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to register gym:', error);
      alert('헬스장 등록에 실패했습니다.');
    }
  };

  const closeModal = () => setIsModalOpen(false);

  return { gyms, isModalOpen, searchGyms, registerGym, closeModal };
};
