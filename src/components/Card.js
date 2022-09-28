import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <>
        <div
          value={ cardName }
          data-testid="name-card"
        >
          Nome da carta
        </div>
        <br />
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <br />
        <div
          value={ cardDescription }
          data-testid="description-card"
        >
          Descrição da carta
        </div>
        <br />
        <div
          value={ cardAttr1 }
          data-testid="attr1-card"
        >
          12
        </div>
        <br />
        <div
          value={ cardAttr2 }
          data-testid="attr2-card"
        >
          34
        </div>
        <br />
        <div
          value={ cardAttr3 }
          data-testid="attr3-card"
        >
          56
        </div>
        <br />
        <div
          value={ cardRare }
          data-testid="rare-card"
        >
          raro
        </div>
        <br />

        { cardTrunfo ? <div data-testid="trunfo-card"> Super Trunfo </div> : <div />}

      </>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
