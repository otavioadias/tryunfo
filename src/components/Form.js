import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <form>
          <label htmlFor="name">
            Name:
            <input type="text" data-testid="name-input" id="name" />
          </label>

          <label htmlFor="description">
            Descrição:
            <input
              type="textarea"
              data-testid="description-input"
              id="description"
            />
          </label>

          <label htmlFor="attr1">
            Attr01:
            <input type="number" data-testid="attr1-input" id="attr1" />
          </label>

          <label htmlFor="attr2">
            Attr02:
            <input type="number" data-testid="attr2-input" id="attr2" />
          </label>

          <label htmlFor="attr3">
            Attr03:
            <input type="number" data-testid="attr3-input" id="attr3" />
          </label>

          <label htmlFor="image">
            Imagem:
            <input type="text" data-testid="image-input" id="image" />
          </label>

          <label htmlFor="rare">
            Raridade:
            <select data-testid="rare-input" name="rare" placeholder="Raridade">
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

          <label htmlFor="super">
            <input type="checkbox" data-testid="trunfo-input" />
            Super Trybe Trunfo
          </label>

          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
