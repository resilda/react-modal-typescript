import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { DateProps } from './types/propsTypes';
import { WrapperContainer } from './styles/ModuleContentContanier';
import EventIcon from '@material-ui/icons/Event';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';

function DateOptions({ dateOption, selectedDate, dateFormat, color }: DateProps) {
	const [openDatePicker, setOpenDatePicker] = useState(false);
	const [dateFormatInput, setDateFormatInput] = useState(dateFormat)

	return (
		<WrapperContainer>
			<div className="wrapper-container-date">
				<div className="wrapper-container-date-2">
					<div className="label-option">{dateFormatInput}</div>
					<EventIcon className="calendar-option" style={{ color: `${color}` }}
						onClick={() => {
							setOpenDatePicker(!openDatePicker);
							setDateFormatInput('')
						}}
					/>
				</div>
				{openDatePicker ? <DatePicker
					onChange={selectedDate}
					value={dateOption}
					// format={dateFormat}
					calendarIcon={null}
					clearIcon={null}
					calendarAriaLabel={'Toggle Calendar'}
					className="date-time-option"
				/> : null}
			</div>
		</WrapperContainer>
	);
}

export default DateOptions;
