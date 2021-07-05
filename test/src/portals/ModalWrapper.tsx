//parent and child
import { useState } from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import { FullWrapper, Container, Wrapper0 } from './styles/ModalContainer';
import Button from '@material-ui/core/Button';

function ModalWrapper() {
	const [ modalOpen, setModalOpen ] = useState(false);

	function handleModalOpen() {
		setModalOpen(!modalOpen);
	}

	return (
		<FullWrapper>
			<Button type="button" className="button" onClick={handleModalOpen}>
				Click me
			</Button>
			{modalOpen ? (
				<Container>
					<Wrapper0>
						<Modal modalOpen={modalOpen}>
							<ModalContent setModalOpen={setModalOpen} />
						</Modal>
					</Wrapper0>
				</Container>
			) : null}
		</FullWrapper>
	);
}

export default ModalWrapper;
