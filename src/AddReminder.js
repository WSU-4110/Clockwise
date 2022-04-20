import { useState } from 'react';

const AddReminder = ({ handleAddReminder }) => {
	const [reminderText, setReminderText] = useState('');
	const characterLimit = 200;

	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setReminderText(event.target.value);
		}
	};

	const handleSaveClick = () => {
		if (reminderText.trim().length > 0) {
			handleAddReminder(reminderText);
			setReminderText('');
		}
	};

	return (
		<div className='reminder new'>
			<textarea
				rows='8'
				cols='10'
				placeholder='Type to add a reminder...'
				value={reminderText}
				onChange={handleChange}
			></textarea>
			<div className='reminder-footer'>
				<small>
					{characterLimit - reminderText.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddReminder;