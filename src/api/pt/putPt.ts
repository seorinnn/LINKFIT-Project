import { fetchAPI } from '..';

export const putPt = async (ptId: number) => {
  return await fetchAPI({
    method: 'PUT',
    endpoint: `/pt/${ptId}`,
  });
};
