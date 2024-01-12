const React = require('react');
const Layout = require('./Layout');
function MainPage() {
  return (
    <Layout>
      <div
        className="container"
        style={{
          marginTop: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <form className="addName" method="post" action="#">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Имя игрока
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              style={{ width: '500px' }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
