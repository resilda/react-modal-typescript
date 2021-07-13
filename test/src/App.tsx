import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './state/rootReducer';
import MainPage from './layout/MainPage';
import ModalWrapper from './portals/ModalWrapper';
import './App.css';

function App() {
	const userData = useSelector((state: RootState) => state.data.userData);
	const [ valueChecked, setValueChecked ] = useState(null);
	const [ valueSelected, setValueSelected ] = useState(null);

	console.log('userData', userData);

	return (
		<div className="App">
			<ModalWrapper />
			<MainPage
				components={userData}
				valueChecked={valueChecked}
				checked={setValueChecked}
				valueSelected={valueSelected}
				selected={setValueSelected}
			/>
		</div>
	);
}

export default App;
