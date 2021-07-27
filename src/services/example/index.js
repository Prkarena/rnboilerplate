import handleError from '../utils/handleError';
import fetchAxios from '../index';

export default async userId => {
  if (!userId) {
    return handleError({message: 'User ID is required'});
  }
  const response = await fetchAxios.get(`users/${userId}`);
  return response.data;
};
