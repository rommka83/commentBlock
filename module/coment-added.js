const form = document.getElementById('coment-form');

export const comentAdded = function () {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sample = /^[а-яё0-9,.?!]{3,15}$/i;

    console.log(sample.test('ыы1ЯЯ!!'));
  });
};
