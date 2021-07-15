//parent and child
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/rootReducer';
import Modal from './Modal';
import ModalContent from './ModalContent';
import FilterUsers from '../layout/FilterUsers';
import { FullWrapper, ModalOverlay } from './styles/ModalContainer';
import { FilterUsersContainer } from '../layout/styles/FilterUsersContainer';
import Button from '@material-ui/core/Button';

function ModalWrapper() {
	const [modalOpen, setModalOpen] = useState(false);

	function handleModalOpen() {
		setModalOpen(!modalOpen);
	}

	return (
		<FullWrapper>
			<Button type="button" className="button" onClick={handleModalOpen}>
				Modal
			</Button>
			<Modal modalOpen={modalOpen}>
				<ModalOverlay>
					<ModalContent setModalOpen={setModalOpen} />
				</ModalOverlay>
			</Modal>
			<FilterUsersContainer>
				<FilterUsers />
			</FilterUsersContainer>
		</FullWrapper>
	);
}

export default ModalWrapper;
