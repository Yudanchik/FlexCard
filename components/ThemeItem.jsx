const React = require('react');

function ThemeItem({ theme }) {
  return (
    <div
      className="container cart"
      style={{
        marginLeft: '100px',
      }}
    >
      <div className="card" style={{ width: '300px' }}>
        <img
          src={theme.img}
          class="card-img-top"
          alt="..."
          style={{ width: '300px' }}
        />
        <div className="card-body">
          <h5 className="card-title">{theme.title}</h5>
          <a
            href={`/questions/${theme.id}/questions/${0}`}
            className="btn btn-primary"
          >
            Выбрать
          </a>
        </div>
      </div>
    </div>
  );
}

module.exports = ThemeItem;
