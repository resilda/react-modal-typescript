import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { DateProps } from './types/propsTypes';
import { WrapperContainer } from './styles/ModuleContentContanier';
// import EventIcon from '@material-ui/icons/Event';
import 'react-calendar/dist/Calendar.css';

function DateOptions({ dateOption, selectedDate, dateFormat, color }: DateProps) {
	const [ openDatePicker, setOpenDatePicker ] = useState(false);
	// const [ dateFormatInput, setDateFormatInput ] = useState(dateFormat);

	return (
		<WrapperContainer>
			<div className="wrapper-container-date">
				<div className="wrapper-container-date-2" onClick={() => setOpenDatePicker(!openDatePicker)}>
					<DatePicker
						onChange={selectedDate}
						value={dateOption}
						format={dateFormat}
						clearIcon={null}
						calendarAriaLabel={'Toggle Calendar'}
						className="date-time-option"
					/>
					{/* <EventIcon
						className="calendar-option"
						style={{ color: `${color}` }}
						onClick={() => {
							setOpenDatePicker(!openDatePicker);
							setDateFormatInput('');
						}}
					/> */}
					{openDatePicker ? (
						<DatePicker
							onChange={selectedDate}
							value={dateOption}
							format={dateFormat}
							clearIcon={null}
							calendarAriaLabel={'Toggle Calendar'}
							className="date-time-option"
						/>
					) : null}
				</div>
			</div>
		</WrapperContainer>
	);
}

export default DateOptions;
