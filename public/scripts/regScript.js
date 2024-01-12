console.log(123);
const form = document.querySelector('.addName');
console.log(form);
const forma = document.querySelector('#answer');
console.log(forma);
if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { name } = event.target;
    const result = await fetch('/', {
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: name.value,
      }),
    });
    const data = await result.json();

    if (data.message === 'успех') {
      window.location.assign('/home');
    }
  });
}

if (forma) {
  forma.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const { answer } = e.target;
    const res = await fetch('/answers', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer.value,
        id,
      }),
    });
    const data = await res.json();
    // нам тут менять цвет кнопки

    document.querySelector('.answer').innerHTML = `Ваш ответ: ${data.message}. 
    Правильный ответ: ${data.answer}`;
  });
}
