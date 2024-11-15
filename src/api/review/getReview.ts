import { fetchAPI } from '..';

export const getReview = async (trainerId: number) => {
  return await fetchAPI({
    method: 'GET',
    endpoint: `/reviews/${trainerId}`,
  });
};

export const getMyReview = async () => {
  return await fetchAPI({
    method: 'GET',
    endpoint: '/reviews/trainer',
  });
};
