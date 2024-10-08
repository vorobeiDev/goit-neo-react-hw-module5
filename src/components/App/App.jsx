import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useImageModal from '../../hooks/useImageModal.js';

import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import Loader from '../Loader/Loader.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

import { fetchImages } from '../../utils/api.js';

const App = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const {
    isModalOpen,
    selectedImage,
    openModal,
    closeModal,
  } = useImageModal();

  const submitHandler = async (value) => {
    setIsLoading(true);
    setIsError(false);

    setSearchValue(value);
    setCurrentPage(1);
    setTotalPage(1);

    try {
      const response = await fetchImages(value)
      setImages(response.results);
      setTotalPage(response.total_pages);
    } catch (e) {
      setIsError(true);
      toast.error(e.message);
    }
    finally {
      setIsLoading(false);
    }
  };

  const loadMoreHandler = async () => {
    setIsLoading(true);
    setIsError(false);

    setCurrentPage((prevState) => prevState + 1);
    try {
      const response = await fetchImages(searchValue, currentPage + 1);
      setImages((prevValues) => [...prevValues, ...response.results]);
      setTotalPage(response.total_pages);
    } catch (e) {
      setIsError(true);
      toast.error(e.message);
    }
    finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <SearchBar onSubmit={submitHandler} />
      <ImageGallery images={images} onClick={openModal} />
      {isLoading && <Loader />}
      {/*<Loader />*/}
      {images.length > 0 && currentPage < totalPage && <LoadMoreBtn onClick={loadMoreHandler} />}
      {isError && <ErrorMessage />}
      <ImageModal
        image={selectedImage}
        onClose={closeModal}
        isModalOpen={isModalOpen}
      />
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
