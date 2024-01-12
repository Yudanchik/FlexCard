const React = require('react');
const Layout = require('./Layout');

function QuestionCard({ arrQuest, arrAnswer, Index }) {
  return (
    <Layout>
      <div
        className="container"
        style={{
          marginTop: '50px',
          marginLeft: '50px',
        }}
      >
        <div className="card quest">
          <div className="card-body">
            <h5 className="card-title title">{arrQuest[Index]}</h5>
            <form data-id={arrQuest[Index]} id="answer">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Ответ
              </label>
              <input
                name="answer"
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                style={{ width: '500px', marginBottom: '20px' }}
              />
              <a
                href={`/questions/2/questions/${+Index + 1}`}
                className="btn btn-primary btn-send"
              >
                Далее
              </a>
              <br />
              <br />
              <button type="submit" className="btn btn-primary btn-send">
                Проверить
              </button>
            </form>
            <h1 className="answer"></h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = QuestionCard;
