//Retrieve the first box by using its id.
const firstBox = document.getElementById("shake"); 
//Add the classes shake, animated, and infinite to the first box.
firstBox.classList.add("shake", "animated", "infinite");
//Add the text "Shake" to the first box.
firstBox.textContent = "Shake";
//Retrieve the second box by using the class rattle.
const secondBox = document.querySelector(".rattle");
//Remove the class rattle from the second box.
secondBox.classList.remove("rattle");
//Add the class wobble to the second box.
secondBox.classList.add("wobble");
//Update the text of the second box to "Wobble".
secondBox.textContent = "rattle";
//Retrieve the third box (NOTE: You will not be able to use a class).
const thirdBox = document.querySelector(".container div:nth-child(3)");
//Add the class rollIn to the third box.
thirdBox.classList.add("rollIn");
//Add the text "Roll" to the third box.
thirdBox.textContent = "Roll";
//Retrieve the four box using the data-animation attribute.
const fourBox = document.querySelector("[data-animation]");
//Add a class to the four box with the same value as the data-animation attribute. Do NOT "hard code" the string.
const animation = document.querySelector('[data-animation]');
animation.classList.add(animation.dataset.animation);
animation.textContent = 'Animation';
//Retrieve the five box, then choose your own animation and make the box animate forever (See Animate.css).
const fiveBox = document.getElementById("choose");
fiveBox.classList.add("swing","animated","infinite");
fiveBox.textContent = "Swing";

//Once completed, submit the index.js file to Shake, Rattle and Roll assignment on Brightspace.
