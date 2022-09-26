import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            id="name"
            name="name"
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            data-testid="description-input"
            type="textarea"
            id="description"
            name="description"
          />
        </label>
        <label htmlFor="attr1">
          Attribute 1 - Strength:
          <input
            data-testid="attr1-input"
            type="number"
            id="attr1"
            name="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Attribute 2 - Ranged:
          <input
            data-testid="attr2-input"
            type="number"
            id="attr2"
            name="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Attribute 3 - Magic:
          <input
            data-testid="attr3-input"
            type="number"
            id="attr3"
            name="attr3"
          />
        </label>
        <label htmlFor="image">
          Image:
          <input
            data-testid="image-input"
            type="text"
            id="image"
            name="image"
          />
        </label>
        <label htmlFor="select">
          Rarity:
          <select
            data-testid="rare-input"
            type="select"
            id="select"
            name="select"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label htmlFor="supertrunfo">
          Super Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            id="supertrunfo"
            name="supertrunfo"
          />
        </label>
        <label htmlFor="save">
          Salvar
          <input
            data-testid="save-button"
            type="button"
            id="save"
            name="save"
          />
        </label>
      </>
    );
  }
}

export default Form;
