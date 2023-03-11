import { renderComentsList } from './module/comments-list-render.js';
import { comentAdded } from './module/coment-added.js';
import { formValidation } from './module/form-validation.js';
import { commentsArr } from './module/DB.js';
import { comentDelet } from './module/delet-like-logics.js';

export let arrWork = commentsArr;

renderComentsList(arrWork);
comentAdded();
formValidation();
comentDelet();
