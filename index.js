//function to count the number of remaining task at any particular time
function countTask() {
  let mylist = document.getElementsByTagName("li");
  var tot = document.querySelector("[data-task]");
  let count = 0;
  for (var i = 0; i < mylist.length; i++) {
    if (mylist[i].className === "unchecked") {
      count++;
    }
  }

  let taskString = count <= 1 ? "task" : "tasks";
  tot.innerText = `${count} ${taskString} remaining`;
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.className === "unchecked") {
      ev.target.className = "checked";
    } else {
      ev.target.className = "unchecked";
    }
    countTask();
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newTask() {
  var mylist = document.getElementsByTagName("LI");
  var li = document.createElement("li");
  li.className = "unchecked"; // pending task
  var inputValue = document.getElementById("myInput").value;
  var txt = document.createTextNode(inputValue);
  li.appendChild(txt);
  if (inputValue === "") {
    alert("Please enter a task to do");
  } else {
    document.getElementById("todos").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var removeTask = document.createElement("SPAN");
  var text = document.createTextNode("\u00D7");
  removeTask.className = "delete";
  removeTask.appendChild(text);
  li.appendChild(removeTask);

  //to delete a particular task
  removeTask.onclick = function (e) {
    var dom = this;
    var p_dom = this.parentNode;
    console.log(p_dom);
    var parent_node = p_dom.parentNode;
    parent_node.removeChild(p_dom);
    countTask();
  };
  countTask();
}



