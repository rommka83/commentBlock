import { nanoid } from '../node_modules/nanoid/nanoid.js';
import { renderComentsList } from './comments-list-render.js';
import { commentsArr } from './DB.js';

const form = document.getElementById('coment-form');

export const comentAdded = function () {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    creatObjComment();
  });
};

const creatObjComment = function () {
  const inputArr = Array.from(form.elements).slice(0, 3);

  let obj = {
    id: nanoid(),
    name: inputArr[1].value,
    date: dataCorection(inputArr[2].value),
    coment: inputArr[0].value,
  };
  console.log(obj);
  inputArr.map((el) => {
    el.blur();
    el.value = '';
  });
  commentsArr.push(obj);
  renderComentsList(commentsArr);
};

const dataCorection = function (str) {
  if (str === '' || new Date() - new Date(str) < 0) return new Date();
  return new Date(str);
};
