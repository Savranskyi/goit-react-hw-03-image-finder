import React from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import {
  Header,
  Input,
  Label,
  SearchForm,
  SubmitButton,
} from './Searchbar.styled';

export class Searchbar extends React.Component {
  static protoType = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    searchStr: '',
  };

  exportData = e => {
    e.preventDefault();
    if (this.state.searchStr.trim() === '') {
      Notify.failure('Please enter something in search field');
      return;
    }
    this.props.onSubmit(this.state);
    this.resetCurrInput();
  };
  updateCurrState = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  resetCurrInput = () => {
    this.setState({ searchStr: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.exportData}>
          <SubmitButton type="submit">
            <Label>Search</Label>
          </SubmitButton>

          <Input
            type="text"
            name="searchStr"
            value={this.state.searchStr}
            onChange={this.updateCurrState}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}
