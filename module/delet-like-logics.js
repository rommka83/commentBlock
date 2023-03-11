import { arrWork } from '../main.js';
import { renderComentsList } from './comments-list-render.js';

export const comentDelet = function () {
  document.addEventListener('click', (e) => {
    if (e.target.dataset.controls === 'coment-delete') {
      let id = e.target.closest('li').getAttribute('key');
      arrWork.map(function (el, i) {
        if (el.id == id) arrWork.splice(i, 1);
      });
      renderComentsList(arrWork);
    }
  });
};
