import { useState } from 'react';
import { Props } from './types/propsTypes';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { WrapperContainer, ArrowContainer } from './styles/ModuleContentContanier';

function TargetOptions({ options, value, onChange, placeholder }: Props) {
	const [ showTarget, setShowTarget ] = useState(false);
	const selectedOptionTarget = options.find((option) => option.value === value);
	const labelTarget = selectedOptionTarget ? selectedOptionTarget.label : placeholder;

	function onClick() {
		setShowTarget(!showTarget);
	}

	return (
		<div style={{ marginRight: '30px' }}>
			<WrapperContainer>
				<div className="wrapper-container" onClick={() => onClick()}>
					<div className="label-option">{labelTarget}</div>
					<div className="arrow-container-option">
						<ArrowContainer opened={showTarget}>
							<ArrowDropDown />
						</ArrowContainer>
					</div>
				</div>
				{showTarget ? (
					<div className="options-list" onClick={() => setShowTarget(false)}>
						{options.map((element) => (
							<div key={element.value} onClick={() => onChange(element.value)} className="option-value">
								{element.label}
							</div>
						))}
					</div>
				) : null}
			</WrapperContainer>
		</div>
	);
}

export default TargetOptions;
