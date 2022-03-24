//declare variables
//varaible for new habit
var habitInput=document.getElementById("new-habit");
//variable for adding button
var addButton=document.getElementsByTagName("button")[0];
//create variable for incomplete habits
var incompleteHabitHolder=document.getElementById("incomplete-habits");
//create varaible for completed habits
var completedHabitsHolder=document.getElementById("completed-habits");


//function to create new habit
var createNewHabitElement=function(habitString)
{
	   	var listItem=document.createElement("li");

			//check box to check off habits
			var checkBox=document.createElement("input");

			//label
			var label=document.createElement("label");

			//create area to input text
			var editInput=document.createElement("input");

			//create button to delete habit
			var deleteButton=document.createElement("button");

			//create button to edit habit
			var editButton=document.createElement("button");

			label.innerText=habitString;

			editButton.innerText="Edit";
			editButton.className="edit";
			deleteButton.innerText="Delete";
			deleteButton.className="delete";
			checkBox.type="checkbox";
			editInput.type="text";

			listItem.appendChild(checkBox);
			listItem.appendChild(label);
			listItem.appendChild(editInput);
			listItem.appendChild(editButton);
			listItem.appendChild(deleteButton);

			//return new habit
			return listItem;
}


//function to add habit and display
var addHabit=function()
{
	    console.log("Add Habit!");

			//add new habit to list
			var listItem=createNewHabitElement(habitInput.value);

			//move to incomplete habits
			incompleteHabitHolder.appendChild(listItem);
			bindHabitEvents(listItem, habitCompleted);

			habitInput.value="";
}


//function to edit a habit
	  	var editHabit=function(){
	  	console.log("Edit Habit!");
      console.log("Save Habit!'");

			var listItem=this.parentNode;
			var editInput=listItem.querySelector('input[type=text]');
			var label=listItem.querySelector("label");
			var containsClass=listItem.classList.contains("editMode");


			if(containsClass)
			{
			label.innerText=editInput.value;
	   	}
			else
			{
			editInput.value=label.innerText;
		  }

		  listItem.classList.toggle("editMode");
}


//function for deleting a habit
var deleteHabit=function(){
		console.log("Delete Habit!");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;

		//remove it
		ul.removeChild(listItem);

}


//function to make habit complete
var habitCompleted=function()
{
		console.log("Complete Habit!");

	  //move to display in completed habits
	  var listItem=this.parentNode;
	  completedHabitsHolder.appendChild(listItem);
		bindHabitEvents(listItem, habitIncomplete);
}

//function to make habit incomplete
var habitIncomplete=function()
{
		console.log("Incomplete Habit!");

	  //move to display in incompleted habits
		var listItem=this.parentNode;
	  incompleteHabitHolder.appendChild(listItem);
	  bindHabitEvents(listItem,habitCompleted);
}

//fuction for AJAX request
var ajaxRequest=function()
{
	console.log("AJAX Request!");
}

addButton.onclick=addHabit;
addButton.addEventListener("click",addHabit);
addButton.addEventListener("click",ajaxRequest);

//function for binding habits
var bindHabitEvents=function(habitListItem,checkBoxEventHandler)
{
	console.log("bind list item events");

	var checkBox=habitListItem.querySelector("input[type=checkbox]");
	var editButton=habitListItem.querySelector("button.edit");
	var deleteButton=habitListItem.querySelector("button.delete");


			//Binding vaiables to their respective buttons
			editButton.onclick=editHabit;
			deleteButton.onclick=deleteHabit;
			checkBox.onchange=checkBoxEventHandler;
}

		//binding incomplete and complete
for (var i=0; i<incompleteHabitHolder.children.length;i++)
{
		bindHabitEvents(incompleteHabitHolder.children[i],habitCompleted);
}

for (var i=0; i<completedHabitsHolder.children.length;i++)
{

		bindHabitEvents(completedHabitsHolder.children[i],habitIncomplete);
}
