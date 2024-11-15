import { fetchAPI } from '..';

export const postGym = async (id: number) => {
  return await fetchAPI({
    method: 'POST',
    endpoint: '/trainers/gym',
    body: { id },
  });
};
