//Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.

//Problem: User interaction does not provide the correct results.
//Solution: Add interactivity so the user can manage daily tasks.
//Break things down into smaller steps and take each step at a time.


//Event handling, uder interaction is what starts the code execution.

var habitInput=document.getElementById("new-habit");//Add a new habit.
var addButton=document.getElementsByTagName("button")[0];//first button
var incompleteHabitHolder=document.getElementById("incomplete-habits");//ul of #incomplete-habits
var completedHabitsHolder=document.getElementById("completed-habits");//completed-habits


//New habit list item
var createNewHabitElement=function(habitString){

	var listItem=document.createElement("li");

	//input (checkbox)
	var checkBox=document.createElement("input");//checkbx
	//label
	var label=document.createElement("label");//label
	//input (text)
	var editInput=document.createElement("input");//text
	//button.edit
	var editButton=document.createElement("button");//edit button

	//button.delete
	var deleteButton=document.createElement("button");//delete button

	label.innerText=habitString;

	//Each elements, needs appending
	checkBox.type="checkbox";
	editInput.type="text";

	editButton.innerText="Edit";//innerText encodes special characters, HTML does not.
	editButton.className="edit";
	deleteButton.innerText="Delete";
	deleteButton.className="delete";



	//and appending.
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addHabit=function(){
	console.log("Add Habit!");
	//Create a new list item with the text from the #new-habit:
	var listItem=createNewHabitElement(habitInput.value);

	//Append listItem to incompleteHabitHolder
	incompleteHabitHolder.appendChild(listItem);
	bindHabitEvents(listItem, habitCompleted);

	habitInput.value="";

}

//Edit an existing task.

var editHabit=function(){
console.log("Edit Habit!");
console.log("Save Habit!'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}




//Delete habit.
var deleteHabit=function(){
		console.log("Delete Habit!");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}


//Mark task completed
var habitCompleted=function(){
		console.log("Complete Habit!");

	//Append the habit list item to the #completed-habits
	var listItem=this.parentNode;
	completedHabitsHolder.appendChild(listItem);
				bindHabitEvents(listItem, habitIncomplete);

}


var habitIncomplete=function(){
		console.log("Incomplete Habit!");
//Mark habit as incomplete.
	//When the checkbox is unchecked
		//Append the habit list item to the #incomplete-habits.
		var listItem=this.parentNode;
	incompleteHabitHolder.appendChild(listItem);
			bindHabitEvents(listItem,habitCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addHabit;
addButton.addEventListener("click",addHabit);
addButton.addEventListener("click",ajaxRequest);


var bindHabitEvents=function(habitListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	var checkBox=habitListItem.querySelector("input[type=checkbox]");
	var editButton=habitListItem.querySelector("button.edit");
	var deleteButton=habitListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editHabit;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteHabit;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
	//for each list item
	for (var i=0; i<incompleteHabitHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindHabitEvents(incompleteHabitHolder.children[i],habitCompleted);
	}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedHabitsHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindHabitEvents(completedHabitsHolder.children[i],habitIncomplete);
	}




// Issues with usabiliy don't get seen until they are in front of a human tester.

//prevent creation of empty tasks.

//Shange edit to save when you are in edit mode.
}
