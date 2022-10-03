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
        <p data-testid="name-card">{ cardName }</p>
        <br />
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <br />
        <p data-testid="description-card">{ cardDescription }</p>
        <br />
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <br />
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <br />
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <br />
        <p data-testid="rare-card">{ cardRare }</p>
        <br />
        { cardTrunfo ? <p data-testid="trunfo-card"> Super Trunfo </p> : <p />}
      </>

    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
