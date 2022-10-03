import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardDescription: '',
      cardRare: '',
      hasTrunfo: false,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardDescription,
      cardRare,
      cardTrunfo,
      cardList,
    } = this.state;

    const newCard = {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardDescription,
      cardRare,
      cardTrunfo };
    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newCard],
      cardName: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardDescription: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: newCard.cardTrunfo,
      isSaveButtonDisabled: true,
    }), () => console.log(cardList));
  };

  handleDisableBtn = () => {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardDescription,
      cardRare,
    } = this.state;

    const minValues = 0;
    const maxValues = 90;
    const sumValues = 210;
    const card = cardName.length > minValues;
    const description = cardDescription.length > minValues;
    const image = cardImage.length > minValues;
    const rarity = cardRare.length > minValues;
    const attr1 = Number(cardAttr1) >= minValues && Number(cardAttr1) <= maxValues;
    const attr2 = Number(cardAttr2) >= minValues && Number(cardAttr2) <= maxValues;
    const attr3 = Number(cardAttr3) >= minValues && Number(cardAttr3) <= maxValues;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= sumValues;

    const res = card && description && image && rarity && attr1 && attr2 && attr3 && sum;

    this.setState({ isSaveButtonDisabled: !res });
  };

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    // console.log(target);
    this.setState({
      [target.name]: value,
    }, () => this.handleDisableBtn());
  };

  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardDescription,
      cardRare,
      hasTrunfo,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardRare={ cardRare }
          hasTrunfo={ hasTrunfo }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.handleChange }
        />
        <Card
          cardName={ cardName }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.handleChange }
        />
      </>
    );
  }
}

export default App;
