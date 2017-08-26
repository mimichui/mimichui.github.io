var newItemCounter = 1;
var ourHeadline = document.getElementById("our-headline");
var ourList = document.querySelector("#our-list");
var ourButton = document.getElementById("our-button");
var listItems = document.querySelectorAll("#our-list li"); //didn't use at the end

ourList.addEventListener("click", activateItem);

function activateItem(e) {
  if(e.target.nodeName == "LI") {
  ourHeadline.innerHTML = e.target.innerHTML;
  for (i = 0; i < e.target.parentNode.children.length; i++) {
  e.target.parentNode.children[i].classList.remove("active"); //remove beige color
  }
  e.target.classList.add("active"); //add beige color
  }
}

ourButton.addEventListener("click", createNewItem);

function createNewItem(){
  ourList.innerHTML += "<li>Something new " + newItemCounter + "</li>";
  newItemCounter++; //+= means add new item after the last item
}