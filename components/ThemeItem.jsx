const React = require('react');

function ThemeItem() {
  return (
    <div class='card' style={{ width: '200px' }}>
      <img src='...' class='card-img-top' alt='...' />
      <div class='card-body'>
        <h5 class='card-title'>Card title</h5>
        <p class='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='#' class='btn btn-primary'>
          Выбрать
        </a>
      </div>
    </div>
  );
}

module.exports = ThemeItem;
