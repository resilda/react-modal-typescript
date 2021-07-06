//parent and child
import { useState } from 'react';
import Modal from './Modal';
import ModalContent from './ModalContent';
import { FullWrapper, ModalOverlay } from './styles/ModalContainer';
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
			<Modal modalOpen={modalOpen}>
				<ModalOverlay>
					<ModalContent setModalOpen={setModalOpen} />
				</ModalOverlay>
			</Modal>
		</FullWrapper>
	);
}

// onClick={() => setModalOpen(false)}

export default ModalWrapper;
