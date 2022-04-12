import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';

//notes: function or lines for catching negative input/errors, function for total times habit is completed, weekly, 
//monthly, etc, function for habit streaks, also delete will delete past messages?? Like the beginning ones.

//NOTES: EDIT BUTTON NOT WORKING, PERCENT COMPLETION NOT WORKING

//edit button not working rn
//add completion rate
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
        <button onClick={() => editHabit(index)}>Edit</button>
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

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addHabit(value);
    setValue("");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() 
{
  
    //variables
     var TotalHabits = 0;
     var HabitsDone = 0;
     var PercentVar = 0;

    //different area to display messages and counter to not let buttons effect them


  //habit count (checked off)
  const [doneCount, setCount] = React.useState(0);

  //habit count (total habits, regardless of if done or not)
  const [habitsTotal, setTotal] = React.useState(1);

  //completion rate NOT WORKING RN
  const [percentRate, setRate] = React.useState(0);

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
       setRate(PercentVar);
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
    //increment count 
    setCount(doneCount+1)
    HabitsDone = HabitsDone + 1;

    //check off habit
    const newHabits = [...habits];
    newHabits[index].isChecked = true;
    setHabits(newHabits);

      //recalculate completion rate
      if (TotalHabits > 0)
      {
         PercentVar = ( (HabitsDone / TotalHabits) * 100);
         setRate(PercentVar);
      }
  };
  //-------------------------------------------------------------------------------------------------------------

  //Un-check habit----------------------------------------------------------------------------------------------
  const uncheckHabit = function(index) {
    //decrement count 
    setCount(doneCount-1)
    HabitsDone = HabitsDone - 1;

    //un-check habit
    const newHabits = [...habits];
    newHabits[index].isChecked = false;
    setHabits(newHabits);

       //recalculate completion rate
    if (TotalHabits > 0)
    {
       PercentVar = ( (HabitsDone / TotalHabits) * 100);
       setRate(PercentVar);
    }
  };
//------------------------------------------------------------------------------------------------------------

    //Delete Habit----------------------------------------------------------------------------------------------
    const deleteHabit = index => {
      //decrement total habits counter
      setTotal(habitsTotal-1)
      TotalHabits = TotalHabits - 1;

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
       setRate(PercentVar);
    }
    };
    //--------------------------------------------------------------------------------------------------------

  return (
    <div className="app">
      <div className="habit-list">
        <p>Total Existing Habits: {habitsTotal}</p>
        <p>Total Habits Complete: {doneCount}</p>
        <p>Total Habit Completion Rate(IGNORE THIS, STILL BEING WORKED ON): {percentRate}%</p>
        <p>ENTER HABIT IN THE BOX BELOW.</p>
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

