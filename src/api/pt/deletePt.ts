import { fetchAPI } from '..';

export const deletePt = async (ptId: number) => {
  return await fetchAPI({
    method: 'DELETE',
    endpoint: `/pt/${ptId}/user`,
  });
};
