import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './App.css';
import mockArray from './mock/initial';

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
    filterByName: '',
    array: mockArray,
    dataArray: mockArray,
    rareFilter: 'todas',
    filterTrunfo: false,
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
    this.setState((previousState) => ({
      dataArray: [...previousState.array],
    }));
    this.clearForm();
    if (objectInformations.cardTrunfo === true) {
      this.setState({ hasTrunfo: true });
    }
  }

  onDelete = (event) => {
    event.preventDefault();
    const { hasTrunfo, dataArray } = this.state;
    console.log(event.target);
    dataArray.splice(event.target.value, 1);
    this.setState({ dataArray });
    if (hasTrunfo === true) {
      this.setState({ hasTrunfo: false });
    }
  }

  filterChange = (event) => {
    this.setState({ [event.target.id]: event.target.value }, this.validation);
    const { array, filterByName, filterTrunfo } = this.state;
    if (filterByName !== '') {
      const newArray = array.filter((a) => a.cardName.includes(filterByName));
      this.setState({ dataArray: newArray });
    }
    if (event.target.value === 'raro') {
      const newArray = array.filter((a) => a.cardRare === 'raro')
        .filter((b) => b.cardRare !== 'muito');
      this.setState({ dataArray: newArray });
    }
    if (event.target.value === 'muito raro') {
      const newArray = array.filter((a) => a.cardRare.includes('muito'));
      this.setState({ dataArray: newArray });
    }
    if (event.target.value === 'normal') {
      const newArray = array.filter((a) => a.cardRare.includes('normal'));
      this.setState({ dataArray: newArray });
    }
    if (event.target.value === ''
    || event.target.value === 'todas' || filterTrunfo === true) {
      this.setState({ dataArray: array });
    }
  }

  filterTrunfoChange = (event) => {
    const { array, filterTrunfo } = this.state;

    if (event.target.type === 'checkbox') {
      this.setState({ [event.target.id]: event.target.checked });
    }
    if (filterTrunfo === false) {
      const newArray = array.filter((a) => a.cardTrunfo === true);
      this.setState({ dataArray: newArray });
    }
    if (event.target.value === ''
    || filterTrunfo === true || event.target.value === 'todas') {
      this.setState({ dataArray: array });
    }
  }

  render() {
    const { dataArray } = this.state;
    return (
      <div className="mainContainer">
        <section className="mainForms">
          <Form
            { ...this.state }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <section className="visualizerCard">
            <Card
              { ...this.state }
              onInputChange={ this.onInputChange }
              className="cardReview"
            />
          </section>
        </section>
        <section className="cards">
          <section className="filter">
            <h1>Todas as cartas</h1>
            <Filter
              { ...this.state }
              filterChange={ this.filterChange }
              filterTrunfoChange={ this.filterTrunfoChange }
            />
          </section>
          <section className="allCards">
            { dataArray.map((item, index) => (
              <section
                className="card"
                key={ index }
              >
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
                  value={ index }
                >
                  Excluir
                </button>
              </section>
            ))}
          </section>
        </section>
      </div>
    );
  }
}

export default App;
