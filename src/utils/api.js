import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  }
});

export const getTrendingMovies = async () => {
  const { data } = await axiosInstance.get('/trending/movie/week');
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axiosInstance.get('/search/movie', {
    params: {
      query
    }
  });
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}`);
  return data;
}

export const getMovieCast = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/credits`);
  return data.cast;
}

export const getMovieReviews = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return data.results;
}