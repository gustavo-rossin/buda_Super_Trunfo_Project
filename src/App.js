import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  handleInputChange() {
    return 'oi';
  }

  handleSaveButtonClick() {
    return 'tchau';
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          state={ this.state }
        />
      </div>
    );
  }
}

export default App;
