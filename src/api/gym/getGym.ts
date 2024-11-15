import { fetchAPI } from '..';

export const getGym = async (keyword: string) => {
  const endpoint = `/gyms/search?keyword=${encodeURIComponent(keyword)}`;
  return await fetchAPI({
    method: 'GET',
    endpoint,
  });
};
