import { useState } from 'react';
import { moduleList } from './options/moduleList';
import { formsList } from './options/formsList';
import { targetList } from './options/targetList';
import ModuleOptions from './ModuleOptions';
import FormsOptions from './FormsOptions';
import TargetOptions from './TargetOptions';
import DescriptionOption from './DescriptionOption';
import DateOptions from './DateOptions';
import moment from 'moment';
import TimeOptions from './TimeOptions';
import { ModuleContentContainer } from './styles/ModuleContentContanier';
import Button from '@material-ui/core/Button';

function ContentContainer() {
	const [ valueOptionModule, setValueOptionModule ] = useState(null);
	const [ valueOptionsForms, setValueOptionForms ] = useState(null);
	const [ valueOptionTarget, setValueOptionTarget ] = useState(null);
	const [ valueDatePicker, setValueDatePicker ] = useState(new Date());
	const [ valueTimePicker, setValueTimePicker ] = useState(moment().format('hh:mm'));
	const [ setColorCalendarIcon ] = useState('#1f1c1c');

	return (
		<ModuleContentContainer>
			<p className="p">General Information</p>
			<div className="wrapper-1">
				<ModuleOptions
					options={moduleList}
					value={valueOptionModule}
					onChange={(optionValue) => setValueOptionModule(optionValue)}
					placeholder={'Module'}
				/>
				<FormsOptions
					options={formsList}
					value={valueOptionsForms}
					onChange={(optionValue) => setValueOptionForms(optionValue)}
					placeholder={'Forms'}
				/>
			</div>
			<div className="wrapper-2">
				<TargetOptions
					options={targetList}
					value={valueOptionTarget}
					onChange={(optionValue) => setValueOptionTarget(optionValue)}
					placeholder={'Target'}
				/>
				<DescriptionOption placeholder={'Type your text in here'} />
			</div>
			<p className="p">Due Date</p>
			<div className="wrapper-1">
				<DateOptions
					dateOption={valueDatePicker}
					selectedDate={setValueDatePicker}
					dateFormat={'dd-MM-yy'}
					color={setColorCalendarIcon}
				/>
				<TimeOptions timeOption={valueTimePicker} selectedTime={setValueTimePicker} timeFormat={'hh:mm a'} />
			</div>
			<div className="wrapper-2" style={{ marginRight: '30px' }}>
				<Button className="submit-button">Submit New Record</Button>
			</div>
		</ModuleContentContainer>
	);
}

export default ContentContainer;

//https://www.youtube.com/watch?v=I0NqxaUkjR8&list=RDIiqfKF9BlcI&index=8
