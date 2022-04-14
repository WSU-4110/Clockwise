import React, { Component } from 'react';
//USING HOOKS IN THIS FILE
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';

//notes: function for total times habit is completed, weekly, 
//monthly, etc, function for habit streaks.

//NOTES: EDIT BUTTON NOT WORKING
//edit button not working rn

//add completion rate
 //variables
 var TotalHabits = 1;
 var HabitsDone = 0;
 var PercentVar = 0;


function Habit({ habit, index, HabitCounter, checkHabit, uncheckHabit, editHabit, deleteHabit }) {
  return (
    <div
      className="habit"
      style={{ textDecoration: habit.isChecked ? "line-through": "" }}
    >
      {habit.text}
      <div className='button'>
        <button onClick={() => checkHabit(index)}>Check Habit</button>
        <button onClick={() => uncheckHabit(index)}>Un-Check Habit</button>
        <button onClick={() => deleteHabit(index)}>Delete</button>
      </div>
      <div className="w3-container">
      <span id="habitCountTotal"></span>
      </div>
    </div>
  );
}

//function for creating new habit
//NOTE: USEFORM IS A HOOK
function HabitForm({ addHabit }) 
{ 
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addHabit(value);
    setValue("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        //need to put restriction on length of input
        type="text"
        className="input"
        value={value}
        onChange={event => setValue(event.target.value)}
      />

    </form>
  );
}

function App() 
{
  //habit count (checked off)
  const [doneCount, setCount] = React.useState(0);

  //habit count (total habits, regardless of if done or not)
  const [habitsTotal, setTotal] = React.useState(1);

  //Habits useState setup
  const [habits, setHabits] = React.useState([
    {
      text: "Read Book (Example Habit)",
      isCompleted: false
    },
  ]);

   //Add new habit (user input side)------------------------------------------------------------------------------
   const addHabit = function(text) 
   {
     //increment total habits counter
     setTotal(habitsTotal+1)
     TotalHabits = TotalHabits + 1;

     //add habit
    const newHabits = [...habits, { text }];
    setHabits(newHabits);

    //recalculate completion rate
    if (TotalHabits > 0)
    {
       PercentVar = ( (HabitsDone / TotalHabits) * 100);
    }
  };
  //-------------------------------------------------------------------------------------------------------------

  //Edit habit---------------------------------------------------------------------------------------------------
  const editHabit = function(text) 
  {
    const newHabits  = [...habits, { text }];
    setHabits(newHabits);
  };
  //--------------------------------------------------------------------------------------------------------------

  //Check off habit----------------------------------------------------------------------------------------------
  const checkHabit = function(index) {

    //make sure habit isn't already checked, then check off habit
    const newHabits = [...habits];
    if (newHabits[index].isChecked !== true)
    {
    newHabits[index].isChecked = true;
    setHabits(newHabits);
    //increment count 
    setCount(doneCount+1)
    HabitsDone = HabitsDone + 1;

    //recalculate completion rate
    if (TotalHabits > 0)
    {
       PercentVar = ( (HabitsDone / TotalHabits) * 100);
    }
    }

      
  };
  //-------------------------------------------------------------------------------------------------------------

  //Un-check habit----------------------------------------------------------------------------------------------
  const uncheckHabit = function(index) {

    //check that habit isn't already un-checked, then un-check habit
    const newHabits = [...habits];
    if (newHabits[index].isChecked !== false)
    {
    newHabits[index].isChecked = false;
    setHabits(newHabits);

    //decrement count 
    if (doneCount !== 0)
      {
    setCount(doneCount-1)
    HabitsDone = HabitsDone - 1;
      }

       //recalculate completion rate
    if (TotalHabits > 0)
    {
       PercentVar = ( (HabitsDone / TotalHabits) * 100);
    }
    }

      
  };
//------------------------------------------------------------------------------------------------------------

    //Delete Habit----------------------------------------------------------------------------------------------
    const deleteHabit = index => {
      //decrement total habits counter
      if (habitsTotal !== 0)
      {
      setTotal(habitsTotal-1)
      TotalHabits = TotalHabits - 1;
      }

     //check if we need to decrement habitCount
     const tempHabits = [...habits];
     if (tempHabits[index].isChecked === true)
     {
        //decrement counts 

        setCount(doneCount-1)
        HabitsDone = HabitsDone - 1;
     }

      //delete habit
      const newHabits = [...habits];
      //need to handle zero and dividing w percent rate, could be where issues are coming from
      newHabits.splice(index, 1);
      setHabits(newHabits);

         //recalculate completion rate
    if (TotalHabits > 0)
    {
       PercentVar = ( (HabitsDone / TotalHabits) * 100);
    }
    };
    //--------------------------------------------------------------------------------------------------------

  return (
    <div className="app">
      <div className="habitsDisplay">
        <div className="HabitInfo">
        <p>Total Existing Habits: <div className='varOne'> {habitsTotal}</div></p>
        <br></br>
        <p>Total Habits Complete: <div className='varTwo'> {doneCount}</div></p>
        <br></br>
        <p>Total Habit Completion Rate: <div className='varThree'>{PercentVar}%</div></p>
        </div>
        <p>---ENTER HABIT IN THE BOX BELOW.---</p>
        {habits.map((habit, index) => (
          <Habit
            key={index}
            index={index}
            habit={habit}
            checkHabit={checkHabit}
            uncheckHabit={uncheckHabit}
            deleteHabit={deleteHabit}
          />
        ))}
        <HabitForm addHabit={addHabit} />
      </div>
    </div>
  );
}

export default App

