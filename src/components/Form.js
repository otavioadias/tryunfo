import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  // state = {
  //   cardName: '',
  //   cardDescription: '',
  //   cardAttr1: '',
  //   cardAttr2: '',
  //   cardAttr3: '',
  //   cardImage: '',
  //   cardRare: '',
  //   cardTrunfo: '',
  //   hasTrunfo: '',
  //   onInputChange: '',
  //   onSaveButtonClick: '',
  //   isSaveButtonDisabled: '',
  // };

  // onInputChange = (event) => {
  //   this.setState({ [event.target.id]: event.target.value });
  // }

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
      // hasTrunfo,
      onInputChange,
      onSaveButtonClick,
      isSaveButtonDisabled,
    } = this.props;

    return (
      <section>
        <form>
          <label htmlFor="cardName">
            Name:
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição:
            <input
              type="textarea"
              data-testid="description-input"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="Attr1">
            Attr01:
            <input
              type="number"
              data-testid="attr1-input"
              id="Attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="Attr2">
            Attr02:
            <input
              type="number"
              data-testid="attr2-input"
              id="Attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="Attr3">
            Attr03:
            <input
              type="number"
              data-testid="attr3-input"
              id="Attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem:
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardRare">
            Raridade:
            <select
              data-testid="rare-input"
              name="rare"
              placeholder="Raridade"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option id="normal" value="normal">
                Normal
              </option>
              <option id="rare" value="raro">
                Raro
              </option>
              <option id="very-rare" value="muito raro">
                Muito Raro
              </option>
            </select>
          </label>

          <label htmlFor="cardTrunfo">
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            onChange={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
