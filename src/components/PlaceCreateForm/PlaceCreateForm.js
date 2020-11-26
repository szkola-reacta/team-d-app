import React, { Component } from "react";

class PlaceCreateForm extends Component {
  state = {
    fields: {
      title: "",
      description: "",
    },
    errors: {},
  };

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      fields: {
        [name]: e.target.value,
      },
    });
  };

  handleSubmit = (e) => e.preventDefault();

  render() {
    return (
      <div>
        <h1>Place Create Form</h1>
        <form
          novalidate
          validate="false"
          onSubmit={this.handleSubmit}
          className="PlaceCreatForm"
        >
          <input
            type="text"
            name="title"
            value={this.state.fields.title}
            onChange={this.handleChange}
            placeholder="Wpisz tytuł"
            className="PlaceCreatForm__input"
          />
          <span className="PlaceCreatForm__error">error</span>

          <input
            type="text"
            name="description"
            value={this.state.fields.decription}
            onChange={this.handleChange}
            placeholder="Dodaj opis"
            className="PlaceCreatForm__input"
          />
          <span className="PlaceCreatForm__error">error</span>
          <button type="submit">Dodaj</button>
        </form>
      </div>
    );
  }
}

export default PlaceCreateForm;
