interface Option {
	value: any;
	label: String;
}

export interface Props {
	options: Option[];
	value: any;
	onChange: (optionValue: any) => void;
	placeholder: String;
}

export interface DescriptionProps {
	placeholder: String;
}

export interface DateProps {
	dateOption: any;
	selectedDate: any;
	dateFormat: any;
	color: String;
}

export interface TimeProps {
	timeOption: any;
	selectedTime: any;
	timeFormat: any;
}
