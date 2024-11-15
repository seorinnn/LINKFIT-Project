import { useEffect, useState } from 'react';

import { getMyReview, getReview } from '@/api/review/getReview';
import { postReview } from '@/api/review/postReview';
import { Review, ReviewResponse } from '@/types';

export const useReview = (trainerId?: number) => {
  const [reviews, setReviews] = useState<ReviewResponse[]>([]);

  const fetchReviews = async (id: number) => {
    try {
      const data = await getReview(id);
      setReviews(data);
    } catch (error) {
      console.error('리뷰 조회 실패:', error);
      alert('리뷰 조회에 실패했습니다.');
    }
  };

  const fetchMyReviews = async () => {
    try {
      const data = await getMyReview();
      setReviews(data);
    } catch (error) {
      console.error('본인 리뷰 조회 실패:', error);
      alert('리뷰 조회에 실패했습니다.');
    }
  };

  const submitReview = async (reviewData: Review) => {
    try {
      await postReview(reviewData);
      alert('리뷰 작성이 완료되었습니다.');
    } catch (error) {
      console.error('리뷰 작성 실패:', error);
      alert('리뷰 작성은 PT가 완료된 후 가능합니다.');
    }
  };

  useEffect(() => {
    if (trainerId) {
      fetchReviews(trainerId);
    }
  }, [trainerId]);

  return { reviews, fetchReviews, fetchMyReviews, submitReview };
};
