import React from 'react';
import './App.css';
import ReminderList from './components/ReminderList';

<head>
  <nav>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="calendar.html">Calendar</a></li>
        <li><a class="active" href="#reminders">Reminders</a></li>
        <li><a href="notes.html">Notes</a></li>
        <li><a href="habits.html">Daily Habit Tracker</a></li>
        <li><a href="dailycheckin.html">Daily Check-in</a></li>
      </ul>
    </nav>
</head>

function App() {
  return (
    <div className='todo-app'>
      <ReminderList />
    </div>
  );
}

export default App;
