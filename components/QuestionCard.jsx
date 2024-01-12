const React = require('react');

function QuestionCard({ arrQuest, answer }) {
  return (
    <div
      className="container"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50px',
      }}
    >
      <div className="card quest">
        <div className="card-body">
          <h5 className="card-title title">{arrQuest[0]}</h5>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Ответ
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            style={{ width: '500px', marginBottom: '20px' }}
          />
          <button type="submit" className="btn btn-primary btn-send">
            Go somewhere
          </button>
        </div>
      </div>
    </div>
  );
}

module.exports = QuestionCard;
