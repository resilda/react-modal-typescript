import { DescriptionProps } from './types/propsTypes';
import { WrapperContainer } from './styles/ModuleContentContanier';

function DescriptionOption({ placeholder }: DescriptionProps) {
	return (
		<div
			style={{
				background: 'rgba(196, 196, 196, 0.3)',
				marginRight: '5px',
				marginLeft: '8px',
			}}
		>
			<WrapperContainer>
				<div className="label-option-description">{placeholder}</div>
			</WrapperContainer>
		</div>
	);
}

export default DescriptionOption;
