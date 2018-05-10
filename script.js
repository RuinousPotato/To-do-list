var button = document.getElementById("enter");
var input =	document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var xButtons = document.querySelectorAll("button.deleteBtn");

function inputLength() {
	return input.value.length;
}

function addToggle() {
	this.classList.toggle("done");
}

function deleteClick() {
	var li = this.parentNode;
	li.classList.add("hide");
	this.classList.add("hide");
}

function addDeleteListeners(){
	for(var i = 0; i < xButtons.length; i++){
		xButtons[i].addEventListener("click", deleteClick);
	}
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.addEventListener("click", addToggle);
	input.value = "";

	var xBtn = document.createElement("button");
	xBtn.classList.add("deleteBtn");
	xBtn.appendChild(document.createTextNode("X"));
	xBtn.addEventListener("click", deleteClick);
	li.appendChild(xBtn);
}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13){
		createListElement();
	}
}

function addToggleDoneListeners() {
	for(var i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("click", addToggle);
	}
}


button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress",addListAfterKeypress);

addToggleDoneListeners();
addDeleteListeners();
