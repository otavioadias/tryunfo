import React from 'react';
import PropTypes from 'prop-types';
import '../css/card.css';

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

    const attr1 = Number(cardAttr1);
    const attr2 = Number(cardAttr2);
    const attr3 = Number(cardAttr3);

    return (
      <div className="border">
        <section className="card-review">
          <div className="card-name">
            <p className="rare" data-testid="rare-card">
              <h1 className="value-attr">
                { cardRare }
              </h1>
            </p>
            <p><h1 data-testid="name-card">{ cardName }</h1></p>
          </div>
          <div className="card-image">
            <img
              className="image"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
            {cardTrunfo === true && (
              <p data-testid="trunfo-card" className="trunfo">
                <h3>
                  Super Trunfo
                </h3>
              </p>
            )}
          </div>
          <div className="card-description">
            <p data-testid="description-card">{ cardDescription }</p>
          </div>
          <div className="attr1">
            Força:
            <p data-testid="attr1-card">
              <h3 className="value-attr">
                { attr1 >= 0 && cardAttr1 }
              </h3>
            </p>
          </div>
          <div className="attr2">
            Agilidade:
            <p data-testid="attr2-card">
              <h3 className="value-attr">
                { attr2 >= 0 && cardAttr2 }
              </h3>
            </p>
          </div>
          <div className="attr3">
            Defesa:
            <p data-testid="attr3-card">
              <h3 className="value-attr">
                { attr3 >= 0 && cardAttr3 }
              </h3>
            </p>
          </div>
        </section>
      </div>
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
