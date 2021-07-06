//child component
import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Register from '../../forms/Register';
import { Wrapper1 } from '../styles/ModalContainer';
import Button from '@material-ui/core/Button';

type Props = {
	setModalOpen: any;
};

function ModalContent(component: Props) {
	const [ index, setIndex ] = useState<number>(0);

	function renderStep() {
		switch (index) {
			case 0:
				return (
					<Step1>
						<div className="animation-form">
							<div className="buttons-wrapper">
								<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
									<span>Close</span>
								</Button>
								<Button
									className="button"
									type="button"
									onClick={(e) => {
										e.preventDefault();
										setIndex(index + 1);
									}}
								>
									<span>Next</span>
								</Button>
							</div>
							<Register />
						</div>
					</Step1>
				);
			case 1:
				return (
					<Step2>
						<div className="animation-form">
							<div className="buttons-wrapper">
								<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
									<span>Close</span>
								</Button>
								<Button
									className="button"
									type="button"
									onClick={(e) => {
										e.preventDefault();
										setIndex(index + 1);
									}}
								>
									<span>Next</span>
								</Button>
							</div>
							<Register />
						</div>
					</Step2>
				);
			case 2:
				return (
					<Step3>
						<div className="animation-form">
							<div className="buttons-wrapper">
								<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
									<span>Close</span>
								</Button>
								<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
									<span>Next</span>
								</Button>
							</div>
							<Register />
						</div>
					</Step3>
				);
			default:
				return <div />;
		}
	}

	return <Wrapper1>{renderStep()}</Wrapper1>;
}

export default ModalContent;
