import { useState } from 'react';
import { Props } from './types/propsTypes';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { WrapperContainer, ArrowContainer } from './styles/ModuleContentContanier';

function ModuleOptions({ options, value, onChange, placeholder }: Props) {
	const [ showModule, setShowModule ] = useState(false);
	const selectedOption = options.find((option) => option.value === value);
	const label = selectedOption ? selectedOption.label : placeholder;

	function onClick() {
		setShowModule(!showModule);
	}

	return (
		<WrapperContainer>
			<div className="wrapper-container" onClick={() => onClick()}>
				<div className="label-option">{label}</div>
				<div className="arrow-container-option">
					<ArrowContainer opened={showModule}>
						<ArrowDropDownIcon />
					</ArrowContainer>
				</div>
			</div>
			{showModule ? (
				<div className="options-list" onClick={() => setShowModule(false)}>
					{options.map((element) => (
						<div key={element.value} onClick={() => onChange(element.value)} className="option-value">
							{element.label}
						</div>
					))}
				</div>
			) : null}
		</WrapperContainer>
	);
}

export default ModuleOptions;
