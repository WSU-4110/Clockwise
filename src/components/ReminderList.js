import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import Reminder from './Reminder';

function ReminderList() {
  const [reminders, setReminders] = useState([]);

  const addReminder = reminder => {
    if (!reminder.text || /^\s*$/.test(reminder.text)) {
      return;
    }

    const newReminders = [reminder, ...reminders];

    setReminders(newReminders);
    console.log(...reminders);
  };

  const updateReminder = (reminderId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setReminders(prev => prev.map(item => (item.id === reminderId ? newValue : item)));
  };

  const removeReminder = id => {
    const removedArr = [...reminders].filter(reminder => reminder.id !== id);

    setReminders(removedArr);
  };

  const completeReminder = id => {
    let updatedReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        reminder.isComplete = !reminder.isComplete;
      }
      return reminder;
    });
    setReminders(updatedReminders);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <ReminderForm onSubmit={addReminder} />
      <Reminder
        reminders={reminders}
        completeReminder={completeReminder}
        removeReminder={removeReminder}
        updateReminder={updateReminder}
      />
    </>
  );
}

export default ReminderList;
