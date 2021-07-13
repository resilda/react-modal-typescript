import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import LinearProgress from '@material-ui/core/LinearProgress';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
	<Suspense fallback={<LinearProgress />}>
		<Provider store={store}>
			<App />
		</Provider>
	</Suspense>,
	document.getElementById('root')
);

reportWebVitals();
