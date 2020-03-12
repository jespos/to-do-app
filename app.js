function onReady() {
  let toDos = []; //emtpy array of the to-dos that will be entered
  const addToDoForm = document.getElementById('addToDoForm'); // writing this lets us access the html FORM
  let id= 0;

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList'); //access the <ul>

    toDoList.textContent = ''; //each time we call the renderTheUI() function, it will add new li to the ul. So before the forEach() function, we need to set newLi to an empty string.

    toDos.forEach(function(toDo) { //forEach takes a function and applies it to each item in the array - in this case our array is toDo. This is how we render each to-do in the array as a li in the ul
      const newLi = document.createElement('li'); // create a new <li>
      const checkbox = document.createElement('input'); // create a new input
      checkbox.type = "checkbox"; //set the input's type to 'checkbox'

      const deleteButton = document.createElement('button');
      deleteButton.textContent = "Delete";

      deleteButton.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
        })
        renderTheUI();
      });

      checkbox.addEventListener('change', event => {
        checkedToDos = toDos.filter(function(item){
          return item.id == toDo.id;
        })
        let result = checkedToDos.complete = !checkedToDos.complete;
        return result;
      });


      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi); //add the new <li> to the <ul>
      newLi.appendChild(checkbox); //add the checkbox to the <li>
      newLi.appendChild(deleteButton); //add the delete button to the <li>


    });
  };

  function createNewToDo() { //creating a new to-do, changes the state. This function will update our array of to-dos
    const newToDoText = document.getElementById('newToDoText'); // this gets us the text (or 'title') of what the user types in
    if (!newToDoText.value) { return; }
    toDos.push( {                  //we are adding the todo to the array
      title: newToDoText.value,   // this gives us the text value of newToDoText
      complete: false,           // this means the box hasn't been checked b/c they just added it to the list
      id: id
    });

    id++;

    newToDoText.value = ''; // this clears the text input so the user can enter a new to-do

    renderTheUI(); // call renderTheUI() each time the state changes. So far, the only time the state changes is when we add a new to-do using the createNewToDo() function
  };




  addToDoForm.addEventListener('submit', event => { // adding an event listener to our form
    event.preventDefault(); // prevents the page from reloading after submitting your to do
    createNewToDo(); //calls the createNewToDo function we created above
  });

  renderTheUI(); //renders UI based on the current state. When the app first loads the state will be an empty input box and button


};


window.onload = function() {
  onReady();
};
