import { useState } from 'react';
import TimePicker from 'react-time-picker';
import { TimeProps } from './types/propsTypes';
import { WrapperContainer } from './styles/ModuleContentContanier';

function TimeOptions({ timeOption, selectedTime, timeFormat }: TimeProps) {
	const [ openTimeCapsule, setOpenTimeCapsule ] = useState(false);

	return (
		<WrapperContainer>
			<div className="wrapper-container-date">
				<div className="wrapper-container-date-2" onClick={() => setOpenTimeCapsule(!openTimeCapsule)}>
					<TimePicker
						value={timeOption}
						onChange={selectedTime}
						clearIcon={null}
						disableClock={true}
						format={timeFormat}
						className="date-time-option"
					/>
					{openTimeCapsule ? (
						<TimePicker
							value={timeOption}
							onChange={selectedTime}
							clearIcon={null}
							disableClock={true}
							format={timeFormat}
							className="date-time-option"
						/>
					) : null}
				</div>
			</div>
		</WrapperContainer>
	);
}

export default TimeOptions;
