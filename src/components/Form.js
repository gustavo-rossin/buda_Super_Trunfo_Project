import PropTypes from 'prop-types';
import React from 'react';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardDescription,
      cardRare,
      cardTrunfo,
      onSaveButtonClick,
      onInputChange,
      isSaveButtonDisabled,
    } = this.props;
    return (
      <>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="cardName"
            placeholder="card name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="textarea"
            id="description"
            name="cardDescription"
            placeholder="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr1">
          Attribute 1 - Strength:
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            name="cardAttr1"
            placeholder="Strength"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr2">
          Attribute 2 - Ranged:
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            name="cardAttr2"
            placeholder="Ranged"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="attr3">
          Attribute 3 - Magic:
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            name="cardAttr3"
            placeholder="Magic"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="image">
          Image:
          <input
            data-testid="image-input"
            type="text"
            id="image"
            name="cardImage"
            placeholder="img URL"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <label htmlFor="select">
          Rarity:
          <select
            data-testid="rare-input"
            type="select"
            id="select"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="supertrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="supertrunfo"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>
        <br />
        <button
          type="button"
          data-testid="save-button"
          id="save"
          name="save"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
};

export default Form;
