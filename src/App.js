import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: '',
    isSaveButtonDisabled: true,
  };

  validation = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const totalValueAttr = 210;
    const maxValueAttr = 90;
    const minValueAttr = 0;
    const attr1 = parseFloat(cardAttr1);
    const attr2 = parseFloat(cardAttr2);
    const attr3 = parseFloat(cardAttr3);

    if (cardName.length > minValueAttr
      && cardDescription.length > minValueAttr
      && attr1 >= minValueAttr
      && attr1 <= maxValueAttr
      && attr2 >= minValueAttr
      && attr2 <= maxValueAttr
      && attr3 >= minValueAttr
      && attr3 <= maxValueAttr
      && cardImage.length > minValueAttr
      && ((attr1 + attr2 + attr3) <= totalValueAttr)
    ) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    this.setState({ isSaveButtonDisabled: true });
  }

  onInputChange = (event) => {
    if (event.target.type === 'checkbox') {
      return this.setState({ [event.target.id]: event.target.checked });
    }
    this.setState({ [event.target.id]: event.target.value }, this.validation);
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
      </div>
    );
  }
}

export default App;
