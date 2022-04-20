import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import RemindersList from './RemindersList';
import Search from './Search';

const ReminderApp = () => { 
	const [reminders, setReminders] = useState([]);

	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		const savedReminders = JSON.parse(
			localStorage.getItem('react-reminders-app-data')
		);

		if (savedReminders) {
			setReminders(savedReminders);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-reminders-app-data',
			JSON.stringify(reminders)
		);
	}, [reminders]);

	const addReminder = (text) => {
		const date = new Date();
		const newReminder = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newReminders = [...reminders, newReminder];
		setReminders(newReminders);
	};

	const deleteReminder = (id) => {
		const newReminders = reminders.filter((reminder) => reminder.id !== id);
		setReminders(newReminders);
	};

	return (
			<div className='container'>
				<h1>Reminders</h1>
				<Search handleSearchReminder={setSearchText} />
				<RemindersList
					reminders={reminders.filter((reminder) =>
						reminder.text.toLowerCase().includes(searchText)
					)}
					handleAddReminder={addReminder}
					handleDeleteReminder={deleteReminder}
				/>
			</div>
	);
};

export default ReminderApp;