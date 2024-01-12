// console.log(123);
const form = document.querySelector('.addName');
// console.log(form);

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
    // console.log(data);
    if (data.message === 'успех') {
      window.location.assign('/home');
    }
  });
}
