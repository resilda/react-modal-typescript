//creation of child
import { Wrapper2 } from './styles/ModalContainer';
import { createPortal } from 'react-dom';

type Props = {
	modalOpen: boolean;
	children: any;
};

function Modal(components: Props) {
	if (!components.modalOpen) return null;

	return createPortal(
		<Wrapper2>
			<div>{components.children}</div>
		</Wrapper2>,
		(document as any).getElementById('modal-root')
	);
}

export default Modal;
