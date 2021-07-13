import { useState } from 'react';
import TimePicker from 'react-time-picker';
import { TimeProps } from './types/propsTypes';
import { WrapperContainer } from './styles/ModuleContentContanier';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function TimeOptions({ timeOption, selectedTime, color }: TimeProps) {
	const [openTimeCapsule, setOpenTimeCapsule] = useState(false);
	const [timeFormatInput, setTimeFormatInput] = useState(timeOption)

	return (
		<WrapperContainer>
			<div className="wrapper-container-date">
				<div className="wrapper-container-date-2">
					<div className="label-option">{timeFormatInput}</div>
					<ArrowDropDownIcon className="clock-option" style={{ color: `${color}` }} onClick={() => {
						setOpenTimeCapsule(!openTimeCapsule);
						setTimeFormatInput('')
					}} />
					{openTimeCapsule ? <TimePicker
						value={timeOption}
						onChange={selectedTime}
						clearIcon={null}
						disableClock={true}
						className="date-time-option"
					/> : null}
				</div>
			</div>
		</WrapperContainer>
	);
}

export default TimeOptions;
