//child component
import React from "react";
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import { Wrapper1 } from '../styles/ModalContainer';
import Button from '@material-ui/core/Button';

type Props = {
	setModalOpen: any;
};

function ModalContent(component: Props) {
	const [index, setIndex] = React.useState<number>(0);

	const renderStep = () => {
		switch (index) {
			case 0:
				return (
				<Step1>
					<div className="animation-form">
					<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
							<span>Close</span>
					</Button>
					</div>

					<Button className="button" type="button" onClick={(e) => {
						//jo inherit onClick i parent tek ky child
						e.stopPropagation()
						setIndex(index + 1)}}>
							<span>Next</span>
					</Button>

				</Step1>
				);
			case 1:
				return (
				<Step2>
					<div className="animation-form">
					<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
							<span>Close</span>
					</Button>
					</div>

					<Button className="button" type="button" onClick={() => setIndex(index + 1)}>
							<span>Next</span>
					</Button>

				</Step2>
				)
			case 2:
				return (
				<Step3>
					<div className="animation-form">
					<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
							<span>Close</span>
					</Button>
					</div>

					<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
							<span>Next</span>
					</Button>

				</Step3>
				)		
			default:
				return <div />;
		}
	}

	return (
		<Wrapper1>	
				{renderStep()}
		</Wrapper1>
	);
}

export default ModalContent;
