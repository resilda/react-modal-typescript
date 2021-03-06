import { useState } from 'react';
import { Props } from './types/propsTypes';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { WrapperContainer, ArrowContainer } from './styles/ModuleContentContanier';

function FormsOptions({ options, value, onChange, placeholder }: Props) {
	const [ showForms, setShowForms ] = useState(false);
	const selectedOptionForm = options.find((option) => option.value === value);
	const labelForm = selectedOptionForm ? selectedOptionForm.label : placeholder;

	function onClick() {
		setShowForms(!showForms);
	}

	return (
		<WrapperContainer>
			<div>
				<div className="wrapper-container" onClick={() => onClick()}>
					<div className="label-option">{labelForm}</div>
					<div className="arrow-container-option">
						<ArrowContainer opened={showForms}>
							<ArrowDropDown />
						</ArrowContainer>
					</div>
				</div>
				{showForms ? (
					<div className="options-list" onClick={() => setShowForms(false)}>
						{options.map((element) => (
							<div key={element.value} onClick={() => onChange(element.value)} className="option-value">
								{element.label}
							</div>
						))}
					</div>
				) : null}
			</div>
		</WrapperContainer>
	);
}

export default FormsOptions;
