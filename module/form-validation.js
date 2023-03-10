const form = document.getElementById('coment-form');
const inpName = document.querySelector('.form__inp[data-name="name"]');
const area = document.querySelector('.form__inp[data-name="area"]');
const btn = document.querySelector('.form__btn');
const sample = /^[а-яё0-9,.?!]{3,15}$/i;
let testName = false;
let testArea = false;

export const formValidation = function () {
  inpName.addEventListener('blur', () => {
    if (!sample.test(inpName.value)) {
      errorCreat(inpName);
    } else {
      testName = true;
      testName && testArea && btn.removeAttribute('disabled');
    }
  });

  area.addEventListener('blur', () => {
    if (!sample.test(area.value)) {
      errorCreat(area);
    } else {
      testArea = true;
      testName && testArea && btn.removeAttribute('disabled');
    }
  });

  inpName.addEventListener('keydown', () => {
    errorDelet('имя');
  });

  area.addEventListener('keydown', () => {
    errorDelet('коментарий');
  });
};

const errorCreat = function (elem) {
  const err = document.createElement('span');
  err.classList.add('err');
  err.style.top = elem.getBoundingClientRect().y - 40 + 'px';
  err.style.left = 20 + 'px';
  err.textContent = `${
    elem === inpName ? 'имя должно' : 'коментарий должен'
  }  содержать  3-15 русских букв и цифр!`;
  form.append(err);
  testName = false;
  testArea = false;
  btn.setAttribute('disabled', 'disabled');
};

const errorDelet = function (str) {
  const errText = document.querySelectorAll('.err');
  if (errText !== null) {
    errText.forEach((el) => {
      el.textContent.includes(str) && el.remove();
    });
  }
};
