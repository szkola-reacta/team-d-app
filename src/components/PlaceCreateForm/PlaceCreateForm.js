import React, { Component } from 'react';
import './placeCreateForm.css';

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
        <h1>Place Create Form</h1>
        <p>Należy wypełnić wszystkie pola</p>
        <form
          noValidate
          validate="false"
          onSubmit={this.handleForm}
          className="placeCreateForm">
          <label htmlFor="title" className="placeCreateForm__label">
            <input
              className="placeCreateForm__input"
              type="text"
              name="title"
              value={params.title}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz tytuł"
            />
            {errors.title.length > 0 && (
              <span className="placeCreateForm__error">{errors.title}</span>
            )}
          </label>

          <label htmlFor="description" className="placeCreateForm__label">
            <input
              type="text"
              name="description"
              value={params.description}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Dodaj opis"
              className="placeCreateForm__input"
            />
            {errors.description.length > 0 && (
              <span className="placeCreateForm__error">
                {errors.description}
              </span>
            )}
          </label>

          <label htmlFor="foto_url" className="placeCreateForm__label">
            <input
              type="text"
              name="foto_url"
              value={params.foto_url}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Dodaj link do zdjęcia"
              className="placeCreateForm__input"
            />
            {errors.foto_url.length > 0 && (
              <span className="placeCreateForm__error">{errors.foto_url}</span>
            )}
          </label>

          <label htmlFor="foto_price" className="placeCreateForm__label">
            <input
              type="text"
              name="price"
              value={params.price}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz cenę"
              className="placeCreateForm__input"
            />
            {errors.price.length > 0 && (
              <span className="placeCreateForm__error">{errors.price}</span>
            )}
          </label>

          <label htmlFor="city" className="placeCreateForm__label">
            <input
              type="text"
              name="city"
              value={params.city}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz miasto"
              className="placeCreateForm__input"
            />
            {errors.city.length > 0 && (
              <span className="placeCreateForm__error">{errors.city}</span>
            )}
          </label>

          <label htmlFor="address" className="placeCreateForm__label">
            <input
              type="text"
              name="address"
              value={params.address}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz adres"
              className="placeCreateForm__input"
            />
            {errors.address.length > 0 && (
              <span className="placeCreateForm__error">{errors.address}</span>
            )}
          </label>

          <label htmlFor="category" className="placeCreateForm__label">
            <input
              type="text"
              name="category"
              value={params.category}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz kategorię"
              className="placeCreateForm__input"
            />
            {errors.category.length > 0 && (
              <span className="placeCreateForm__error">{errors.category}</span>
            )}
          </label>

          <label htmlFor="rate" className="placeCreateForm__label">
            <input
              type="text"
              name="rate"
              value={params.rate}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              placeholder="Wpisz ocenę"
              className="placeCreateForm__input"
            />
            {errors.rate.length > 0 && (
              <span className="placeCreateForm__error">{errors.rate}</span>
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
