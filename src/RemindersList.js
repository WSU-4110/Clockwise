import Reminder from './Reminder';
import AddReminder from './AddReminder';

const RemindersList = ({
	reminders,
	handleAddReminder,
	handleDeleteReminder,
}) => {
	return (
		<div className='reminders-list'>
			{reminders.map((reminder) => (
				<Reminder
					id={reminder.id}
					text={reminder.text}
					date={reminder.date}
					handleDeleteReminder={handleDeleteReminder}
				/>
			))}
			<AddReminder handleAddReminder={handleAddReminder} />
		</div>
	);
};

export default RemindersList;