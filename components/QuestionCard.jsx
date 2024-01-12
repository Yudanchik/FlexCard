const React = require('react');

function QuestionCard (){
    return (
    <div className='container' style={{display:"flex", alignItems: "center", justifyContent: 'center', marginTop: "50px"}}>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">Вопрос</h5>
          <label htmlFor="exampleInputEmail1" className="form-label">
                    Ответ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    style={{ width: '500px', marginBottom: "20px" }}
                  />
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
    )
}
   
module.exports = QuestionCard