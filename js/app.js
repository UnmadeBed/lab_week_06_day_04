document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');



  const handleFormSubmit = function(event) {
    event.preventDefault();
    // debugger;
    const resultParagraph = document.createElement('li');
    resultParagraph.textContent = `${event.target.title.value},
    ${event.target.author.value},
    ${event.target.category.value};`

    const list = document.querySelector('ul');
    list.appendChild(resultParagraph);
    form.reset();

  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteAll = function (){
    event.preventDefault();
    resultButton = document.createElement('input');

  }

  const coolButton = document.createElement('button');
  document.querySelector('new-item-form');
  coolButton.textContent = "delete all!";
  coolButton.setAttribute('id', 'delete-all');
  const body = document.querySelector('body');
  body.appendChild(coolButton);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);



})

// const newListItem1 = document.createElement('li');
