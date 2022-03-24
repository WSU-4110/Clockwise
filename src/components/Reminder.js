import React, { useState } from 'react';
import ReminderForm from './ReminderForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Reminder = ({ reminders, completeReminder, removeReminder, updateReminder }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateReminder(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ReminderForm edit={edit} onSubmit={submitUpdate} />;
  }

  return reminders.map((reminder, index) => (
    <div
      className={reminder.isComplete ? 'reminder-row complete' : 'reminder-row'}
      key={index}
    >
      <div key={reminder.id} onClick={() => completeReminder(reminder.id)}>
        {reminder.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeReminder(reminder.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: reminder.id, value: reminder.text })}
          className='edit-icon'
        />
      </div>
    </div>
  ));
};

export default Reminder;
