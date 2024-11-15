import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { deletePt } from '@/api/pt/deletePt';
import { getLinkedClients } from '@/api/pt/getLinkedClients';
import { putPt } from '@/api/pt/putPt';
import { RouterPath } from '@/routes/path';
import { LinkedClients } from '@/types';

export const usePt = () => {
  const navigate = useNavigate();
  const [linkedClients, setLinkedClients] = useState<LinkedClients[]>([]);

  const fetchLinkedClients = async () => {
    try {
      const data = await getLinkedClients();
      setLinkedClients(data);
    } catch (error) {
      console.error(
        'PT 매칭 성사 회원 데이터를 가져오는데 실패했습니다.',
        error
      );
    }
  };

  const handleAcceptPt = async (ptId: number) => {
    try {
      await putPt(ptId);
      alert('PT 수락이 완료되었습니다.');
      navigate(RouterPath.userPtSchedule);
    } catch (error) {
      console.error('PT 수락 처리 실패:', error);
      alert('PT 수락 처리에 실패했습니다.');
    }
  };

  const handleDeletePt = async (ptId: number) => {
    try {
      await deletePt(ptId);
      alert('PT 거절이 완료되었습니다.');
      window.location.reload();
    } catch (error) {
      console.error('PT 거절 처리 실패:', error);
      alert('PT 거절 처리에 실패했습니다.');
    }
  };

  useEffect(() => {
    fetchLinkedClients();
  }, []);

  return { linkedClients, handleAcceptPt, handleDeletePt };
};
