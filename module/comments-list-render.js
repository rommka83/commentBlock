export const renderComentsList = function (arr) {
  const oldList = document.querySelector('.comment-list');
  oldList !== null && oldList.remove();
  const list = document.createElement('ul');
  list.classList.add('comment-list');
  const container = document.querySelector('.container');
  container.append(list);

  arr.sort((arrA, arrB) => {
    return new Date(arrA.date) < new Date(arrB.date) ? 1 : -1;
  });

  arr.map((el) => {
    return (list.innerHTML += `<li class="comment-item" key=${el.id}>
                    <div class="comment-head">
                        <span class="comment-name">${el.name}, </span>
                        <span class="comment-date">${displayDate(
                          el.date
                        )}, ${new Date(el.date)
      .toLocaleTimeString()
      .slice(0, 5)}</span>
                        <div class="item-controls">
                            <button class="controls-btn controls-btn-delet" data-controls="coment-delete">
                                <svg class="delet" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 284.011 284.011">
                                    <g>
                                        <g>
                                            <path d="M235.732,66.214l-28.006-13.301l1.452-3.057c6.354-13.379,0.639-29.434-12.74-35.789L172.316,2.611
                                                			c-6.48-3.079-13.771-3.447-20.532-1.042c-6.76,2.406-12.178,7.301-15.256,13.782l-1.452,3.057L107.07,5.106
                                                			c-14.653-6.958-32.239-0.698-39.2,13.955L60.7,34.155c-1.138,2.396-1.277,5.146-0.388,7.644c0.89,2.499,2.735,4.542,5.131,5.68
                                                			l74.218,35.25h-98.18c-2.797,0-5.465,1.171-7.358,3.229c-1.894,2.059-2.839,4.815-2.607,7.602l13.143,157.706
                                                			c1.53,18.362,17.162,32.745,35.588,32.745h73.54c18.425,0,34.057-14.383,35.587-32.745l11.618-139.408l28.205,13.396
                                                			c1.385,0.658,2.845,0.969,4.283,0.969c3.74,0,7.328-2.108,9.04-5.712l7.169-15.093C256.646,90.761,250.386,73.175,235.732,66.214z
                                                			 M154.594,23.931c0.786-1.655,2.17-2.905,3.896-3.521c1.729-0.614,3.59-0.521,5.245,0.267l24.121,11.455
                                                			c3.418,1.624,4.878,5.726,3.255,9.144l-1.452,3.057l-36.518-17.344L154.594,23.931z M169.441,249.604
                                                			c-0.673,8.077-7.55,14.405-15.655,14.405h-73.54c-8.106,0-14.983-6.328-15.656-14.405L52.35,102.728h129.332L169.441,249.604z
                                                			 M231.62,96.835l-2.878,6.06L83.057,33.701l2.879-6.061c2.229-4.695,7.863-6.698,12.554-4.469l128.661,61.108
                                                			C231.845,86.509,233.85,92.142,231.62,96.835z" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                            <button class="controls-btn controls-btn-like" data-controls="coment-like">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 80.87 71.75" class='like' fill=${
                                      el.like ? '#eb4b57' : '#87bb95'
                                    }>
                                    <path class="st0"
                                        d="M74.39,6.49c-8.65-8.65-22.67-8.65-31.31,0l-2.64,2.64L37.8,6.49c-8.65-8.65-22.67-8.65-31.31,0l0,0
                                                	c-8.65,8.65-8.65,22.67,0,31.31l2.64,2.64l31.31,31.31l31.31-31.31l2.64-2.64C83.03,29.15,83.03,15.13,74.39,6.49z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <p class="comment-text">${el.coment}</p>
                </li>`);
  });
};

const displayDate = function (str) {
  const yesterday = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() - 1
  ).toLocaleDateString();

  const today = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate()
  ).toLocaleDateString();

  switch (new Date(str).toLocaleDateString()) {
    case yesterday:
      return 'вчера';
    case today:
      return 'сегодня';
    default:
      return new Date(str).toLocaleDateString();
  }
};
