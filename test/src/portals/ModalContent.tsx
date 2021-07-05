//child component
import { Wrapper1 } from './styles/ModalContainer';
import Button from '@material-ui/core/Button';

type Props = {
	setModalOpen: any;
};

function ModalContent(component: Props) {
	return (
		<Wrapper1>
			<div className="opacity-animate3">
				<Button className="button" type="button" onClick={() => component.setModalOpen(false)}>
					<span>Close Modal</span>
				</Button>
				<div className="wrapper-label">
					<label>
						Label
						<input className="input" id="label-1" placeholder="Label" type="text" />
					</label>
				</div>
				<Button className="button">Submit 1</Button>
			</div>
		</Wrapper1>
	);
}

export default ModalContent;
