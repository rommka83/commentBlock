import { arrWork } from '../main.js';
import { renderComentsList } from './comments-list-render.js';

export const comentDelet = function () {
  document.addEventListener('click', (e) => {
    if (e.target.dataset.controls === 'coment-delete') {
      let id = e.target.closest('li').getAttribute('key');
      arrWork.map((el, i) => {
        el.id == id && arrWork.splice(i, 1);
      });
      renderComentsList(arrWork);
    }
  });
};

export const comentLike = function () {
  document.addEventListener('click', (e) => {
    if (e.target.dataset.controls === 'coment-like') {
      let id = e.target.closest('li').getAttribute('key');
      arrWork.map((el) => {
        if (el.id == id) return (el.like = !el.like);
      });
      renderComentsList(arrWork);
    }
  });
};
