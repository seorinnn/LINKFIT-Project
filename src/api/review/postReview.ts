import { Review } from '@/types';

import { fetchAPI } from '..';

export const postReview = async ({ content, score }: Review) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: `/reviews`,
    body: { content, score },
  });
};
