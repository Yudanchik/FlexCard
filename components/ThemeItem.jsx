const React = require('react');

function ThemeItem({ theme }) {
  return (
    <div
      className="container cart"
    
    >
      <div className="card" style={{ width: '200px' }}>
        <img src={theme.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{theme.title}</h5>
          <a href={`/questions/${theme.id}`} className="btn btn-primary">
            Выбрать
          </a>
        </div>
      </div>
    </div>
  );
}

module.exports = ThemeItem;
