import { MdDeleteForever } from 'react-icons/md';

const Reminder = ({ id, text, date, handleDeleteReminder }) => {
	return (
		<div className='reminder'>
			<span>{text}</span>
			<div className='reminder-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handleDeleteReminder(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Reminder;