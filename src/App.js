import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </>
    );
  }
}

export default App;
