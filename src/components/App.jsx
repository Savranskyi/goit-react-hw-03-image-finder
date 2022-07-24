import React from 'react';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

import { serviceAPI } from '../service/serviceAPI';

import { Section } from './App.styled';

const PER_PAGE = 12;
const START_PAGE = 1;

export class App extends React.Component {
  state = {
    searchVal: '',
    imgArr: [],
    isLoading: false,
    showModalImg: false,
    page: START_PAGE,
    largeImg: '',
  };

  perPage = PER_PAGE;
  maxPage = START_PAGE;

  componentDidUpdate(prevProps, prevState) {
    const prevVal = prevState.searchVal;
    const currVal = this.state.searchVal;

    if (prevVal !== currVal) {
      this.searchAPI(currVal, this.perPage, START_PAGE);
    }
    if (prevVal === currVal && this.state.page > prevState.page) {
      this.searchAPI(currVal, this.state.perPage, this.state.page);
    }
  }
  consoleLogState = (f_currState, f_prevState) => {
    Object.keys(f_currState).forEach(key => {
      console.log(
        `${key}: curr{${f_currState[key]}} - prev{${f_prevState[key]}}`
      );
    });
  };
  searchAPI = (currVal, perPage = this.perPage, numbPage = this.state.page) => {
    this.setState({ isLoading: true });
    const searchRes = serviceAPI(currVal, perPage, numbPage);
    searchRes
      .then(value => {
        if (numbPage > 1) {
          this.setState(prevState => {
            const newArr = [...prevState.imgArr, ...value.respArr];
            this.maxPage = Math.floor(value.maxPic / perPage);
            return { imgArr: newArr };
          });
        } else {
          this.setState({ imgArr: value.respArr });
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };
  getDataExtForm = data => {
    this.setState({ searchVal: data.searchStr });
  };
  imgOnClick = e => {
    const imgId = e.target.id;
    const findImg = this.state.imgArr.find(({ id }) => id === Number(imgId));
    this.setState({ largeImg: findImg.largeImageURL, showModalImg: true });
  };
  btnOnClick = () => {
    const nextPage = this.state.page + 1;
    this.setState({ page: nextPage });
  };
  closeModal = () => {
    this.setState({ showModalImg: false });
  };
  render() {
    const { imgArr, showModalImg, largeImg } = this.state;
    const imgArrlen = imgArr.length !== 'undefined ' ? imgArr.length : 0;
    return (
      <Section>
        <Searchbar onSubmit={this.getDataExtForm} />
        {imgArr.length !== 0 && (
          <ImageGallery imgArr={imgArr} onClick={this.imgOnClick} />
        )}
        {this.state.isLoading && <Loader />}
        {imgArrlen > 0 && this.state.page <= this.maxPage && (
          <Button text={'Load more'} onClick={this.btnOnClick} />
        )}
        {showModalImg && (
          <Modal onClose={this.closeModal}>
            <img src={largeImg} alt="Фото" />
          </Modal>
        )}
      </Section>
    );
  }
}
