function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    // get the text //
    let title = newToDoText.value;

    // create a new li //
    let newLi = document.createElement('li');

    //create a new input. checkbox in this case //
    let checkbox = document.createElement('input');

    // set the input's type to checkbox //
    checkbox.type = "checkbox";

    //create a delete button
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";

    // add event listener to delete deleteButton
    deleteButton.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);

    });



    // set the title //
    newLi.textContent = title;

    //attach the checkbox to the li and attach the delete button to the li //
    newLi.appendChild(checkbox);

    newLi.appendChild(deleteButton);

    //attach the li to the ul //
    toDoList.appendChild(newLi);

    //remove the text from the input, so the user doesn't have to delete what they previously entered //
    newToDoText.value = '';
  });
}


window.onload = function() {
  alert('The window has loaded!');
  onReady();
};
