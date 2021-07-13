import { useState } from 'react';
import { Props } from './types/propsTypes';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import { WrapperContainer, ArrowContainer } from './styles/ModuleContentContanier';

function TargetOptions({ options, value, onChange, placeholder }: Props) {
	const [showTarget, setShowTarget] = useState(false);
	const [isSelected, setIsSelected] = useState(false);
	const selectedOptionTarget = options.find((option) => option.value === value);
	const labelTarget = selectedOptionTarget ? selectedOptionTarget.label : placeholder;

	function onClick() {
		setShowTarget(!showTarget);
		setIsSelected(!isSelected)
	}

	return (
		<div style={{ marginRight: '11px' }}>
			<WrapperContainer>
				<div className="wrapper-container" onClick={() => onClick()}
					style={isSelected ? { border: '0.1px solid rgba(99, 91, 91, 0.3)' } : {}}>
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
