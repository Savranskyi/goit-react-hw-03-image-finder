import axios from 'axios';
import { Notify } from 'notiflix';
const API_KEY = '26909761-fdfaa7cc2eadbbc58c15a69c2';
const BASE_URL = 'https://pixabay.com/';

axios.defaults.baseURL = BASE_URL;

const apiParams = (searchVal, perPage, numbPage) => {
  return {
    params: {
      key: API_KEY,
      q: searchVal,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: perPage,
      page: numbPage,
    },
  };
};

export const serviceAPI = (currVal, perPage, numbPage) => {
  return axios
    .get('api/', apiParams(currVal, perPage, numbPage))
    .then(responce => {
      const maxPic = responce.data.totalHits;
      const respArr = responce.data.hits.map(
        ({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        })
      );
      return { respArr, maxPic };
    })
    .catch(err => console.log(err));
};
