import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  params: {
    'client_id': import.meta.env.VITE_API_KEY,
  },
});

export const fetchImages = async (query, page = 1) => {
  const response = await axiosInstance.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    }
  });
  return response.data;
};
