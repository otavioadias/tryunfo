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
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    array: [],
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

  clearForm = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const attr1 = parseFloat(cardAttr1);
    const attr2 = parseFloat(cardAttr2);
    const attr3 = parseFloat(cardAttr3);

    const objectInformations = {
      cardName,
      cardDescription,
      attr1,
      attr2,
      attr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((previousState) => ({
      array: [...previousState.array, objectInformations],
    }));
    this.clearForm();
    if (objectInformations.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  }

  onDelete = (event, index) => {
    event.preventDefault();
    const { array, hasTrunfo } = this.state;
    array.splice(index, 1);
    this.setState({ array });
    if (hasTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const { array } = this.state;
    return (
      <div className="main-container">
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          { ...this.state }
          onInputChange={ this.onInputChange }
        />
        <section>
          { array.map((item, index) => (
            <>
              <Card
                key={ index }
                cardName={ item.cardName }
                cardDescription={ item.cardDescription }
                cardImage={ item.cardImage }
                cardAttr1={ item.attr1 }
                cardAttr2={ item.attr2 }
                cardAttr3={ item.attr3 }
                cardRare={ item.cardRare }
                cardTrunfo={ item.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ this.onDelete }
              >
                Excluir
              </button>
            </>
          ))}
        </section>
      </div>
    );
  }
}

export default App;
