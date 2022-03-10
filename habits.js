//class to create, delete, and check off habits
class Habit {
    //method to add habit
    AddHabit()
    {
        let addBtn = document.getElementById("addBtn");
        let addBtn = document.getElementById("addBtn");
        
        addBtn.addEventListener("click", function(e) 
        {
            let addTxt = document.getElementById("addTxt");
            let habits = localStorage.getItem("habits");

            if (habits == null) habitsObj = [];
             else habitsObj = JSON.parse(habits);

            habitsObj.push(addTxt.value);
            localStorage.setItem("habits", JSON.stringify(habitsObj));
            addTxt.value = "";

             ShowHabits();
        });
    }

    //method to delete habit
    DeleteHabit(index) {
        let habit = localStorage.getItem("habits");
    
        if (habits == null) habitsObj = [];
        else habitsObj = JSON.parse(habits);
    
        habitsObj.splice(index, 1);
    
        localStorage.setItem("habits",
            JSON.stringify(habitsObj));
    
        ShowHabit();
    }


    //method to check off habit
    CheckHabit() {

        let habits = localStorage.getItem("habits");
    
        if (habits == null) habitsObj = [];
        else habitsObj = JSON.parse(habits);
    
        let html = "";
    
        habitsObj.forEach(function(element, index) {
            html += `<div class="noteCard my-2 mx-2 card"
                style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">
                            Habit ${index + 1}
                        </h5>
                        <p class="card-text">
                            ${element}
                        </p>
                      <button id="${index}" onclick=
                        "deleteHabit(this.id)"
                        class="btn btn-primary">
                        Delete Habit
                    </button>
                    <button id="checkoff" onclick=
                      "uncheckHabit(this.id)"
                      class="btn btn-primary">
                      Habit Complete!
                  </button>
                </div>
            </div>`;
        });
    
        let habitsElm = document.getElementById("habits");
    
        if (habitsObj.length != 0) habitsElm.innerHTML = html;
        else
            habitsElm.innerHTML = `No Habits here!
            Add habits using the "Add a Habit" section above.`;
    
            showHabit();
    }

    //method to uncheck habit
    UncheckHabit() {
        let habits = localStorage.getItem("habits");
    
        if (habits == null) habitsObj = [];
        else habitsObj = JSON.parse(habits);
    
        let html = "";
    
        habitsObj.forEach(function(element, index) {
            html += `<div class="noteCard my-2 mx-2 card"
                style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">
                            Habit ${index + 1}
                        </h5>
                        <p class="card-text">
                            ${element}
                        </p>
                      <button id="${index}" onclick=
                        "deleteHabit(this.id)"
                        class="btn btn-primary">
                        Delete Habit
                    </button>
                    <button id="checkoff" onclick=
                      "checkHabit(this.id)"
                      class="btn btn-primary">
                      Check off habit
                  </button>
                </div>
            </div>`;
        });
    
        let habitsElm = document.getElementById("habits");
    
        if (habitsObj.length != 0) habitsElm.innerHTML = html;
        else
            habitsElm.innerHTML = `No Habits here!
            Add habits using the "Add a Habit" section above.`;
    
            ShowHabit();
    }

}

//class to observe habits and log in the history/display habits
// (observer class that recieves info about habit being checked off)
class HabitHistory {


    constructor (date)
    {

    }
    //method to display habits
    ShowHabits() {

        
    
        if (habits == null) habitsObj = [];
        else habitsObj = JSON.parse(habits);
    
        let html = "";
    
        habitsObj.forEach(function(element, index) {
            html += `<div class="noteCard my-2 mx-2 card"
                style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">
                            Habit ${index + 1}
                        </h5>
                        <p class="card-text">
                            ${element}
                        </p>
                      <button id="${index}" onclick=
                        "deleteHabit(this.id)"
                        class="btn btn-primary">
                        Delete Habit
                    </button>
                    <button id="checkoff" onclick=
                      "checkHabit(this.id)"
                      class="btn btn-primary">
                      Check off Habit
                  </button>
                </div>
            </div>`;
        });
    
        let habitsElm = document.getElementById("habits");
    
        if (habitsObj.length != 0) habitsElm.innerHTML = html;
        else
            habitsElm.innerHTML = `No Habits here!
            Add habits using the "Add a Habit" section above.`;
    }

}

class HistoryLog
{
    DailyHistory()
    MonthlyHistory()
    YearlyHistory()


}
