import React, { Component } from 'react';
import './style.scss';

class PlaceCreateForm extends Component {
  state = {
    placeList: [],
    params: {
      title: '',
      description: '',
      foto_url: '',
      price: '',
      city: '',
      address: '',
      category: '',
      rate: '',
    },
    errors: {
      title: '',
      description: '',
      foto_url: '',
      price: '',
      city: '',
      address: '',
      category: '',
      rate: '',
    },
    summaryMessage: '',
  };

  handleBlur = (e) => {
    const { name, value } = e.target;
    const validUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

    if (name === 'price' || name === 'rate') {
      if (isNaN(value)) {
        this.setState({
          errors: { ...this.state.errors, [name]: 'Wpisz liczbę' },
        });
        return false;
      }
    }

    if (name === 'foto_url') {
      if (!value.match(validUrl)) {
        this.setState({
          errors: { ...this.state.errors, [name]: 'Link jest niepoprawny' },
        });
        return false;
      }
    }

    if (value < 1) {
      this.setState({
        errors: { ...this.state.errors, [name]: 'Pole nie może być puste' },
      });
      return false;
    }

    this.setState({
      errors: { ...this.state.errors, [name]: '' },
      summaryMessage: '',
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      params: { ...this.state.params, [name]: value },
    });
  };

  isFormValid = () => {
    const { params, errors } = this.state;
    let formFilled, noErrors;
    formFilled = !Object.values(params).some((x) => x === '');
    noErrors = !Object.values(errors).some((x) => x !== '');
    return formFilled && noErrors;
  };

  addPlaceToList = () => {
    const newItem = this.state.params;
    this.setState({
      placeList: [...this.state.placeList, newItem],
      summaryMessage: 'Dane zostały poprawnie dodane',
    });
  };

  resetForm = () => {
    const params = { ...this.state.params };
    Object.keys(params).forEach(function (key) {
      params[key] = '';
    });
    this.setState({
      params,
    });

    setTimeout(
      () =>
        this.setState({
          summaryMessage: '',
        }),
      3000
    );
  };

  handleForm = (e) => {
    e.preventDefault();
    this.setState({
      summaryMessage: ' Uzupełnij wszystkie pola',
    });

    if (this.isFormValid()) {
      this.addPlaceToList();
      this.resetForm();
    }
  };

  render() {
    const { params, errors } = this.state;

    return (
      <div>
        <div className="PlaceCreateForm__header">
          <h2 className="PlaceCreateForm__header">Add new place</h2>
          <p className="PlaceCreateForm__header">
            Należy wypełnić wszystkie pola
          </p>
        </div>
        <form
          noValidate
          validate="false"
          onSubmit={this.handleForm}
          className="PlaceCreateForm">
          <label htmlFor="title" className="PlaceCreateForm__label">
            <input
              className="PlaceCreateForm__input"
              type="text"
              name="title"
              value={params.title}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz tytuł"
            />
            {errors.title.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.title}</span>
            )}
          </label>

          <label htmlFor="description" className="PlaceCreateForm__label">
            <input
              type="text"
              name="description"
              value={params.description}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Dodaj opis"
              className="PlaceCreateForm__input"
            />
            {errors.description.length > 0 && (
              <span className="PlaceCreateForm__error">
                {errors.description}
              </span>
            )}
          </label>

          <label htmlFor="foto_url" className="PlaceCreateForm__label">
            <input
              type="text"
              name="foto_url"
              value={params.foto_url}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Dodaj link do zdjęcia"
              className="PlaceCreateForm__input"
            />
            {errors.foto_url.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.foto_url}</span>
            )}
          </label>

          <label htmlFor="foto_price" className="PlaceCreateForm__label">
            <input
              type="text"
              name="price"
              value={params.price}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz cenę"
              className="PlaceCreateForm__input"
            />
            {errors.price.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.price}</span>
            )}
          </label>

          <label htmlFor="city" className="PlaceCreateForm__label">
            <input
              type="text"
              name="city"
              value={params.city}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz miasto"
              className="PlaceCreateForm__input"
            />
            {errors.city.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.city}</span>
            )}
          </label>

          <label htmlFor="address" className="PlaceCreateForm__label">
            <input
              type="text"
              name="address"
              value={params.address}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz adres"
              className="PlaceCreateForm__input"
            />
            {errors.address.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.address}</span>
            )}
          </label>

          <label htmlFor="category" className="PlaceCreateForm__label">
            <input
              type="text"
              name="category"
              value={params.category}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz kategorię"
              className="PlaceCreateForm__input"
            />
            {errors.category.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.category}</span>
            )}
          </label>

          <label htmlFor="rate" className="PlaceCreateForm__label">
            <input
              type="text"
              name="rate"
              value={params.rate}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz ocenę"
              className="PlaceCreateForm__input"
            />
            {errors.rate.length > 0 && (
              <span className="PlaceCreateForm__error">{errors.rate}</span>
            )}
          </label>

          <button type="submit">Dodaj</button>
        </form>
        {this.state.summaryMessage && <span>{this.state.summaryMessage}</span>}
      </div>
    );
  }
}

export default PlaceCreateForm;
