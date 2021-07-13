import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/rootReducer';
import { fetchData } from '../state/actions/actions';
import { MainPageProps } from './types/propsTypes';
import { MainPageContainer } from './styles/MainPageContainer';
import DetailsDropdown from './DetailsDropdown';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function MainPage({ components, valueChecked, checked, valueSelected, selected }: MainPageProps) {
	const loading = useSelector((state: RootState) => state.data.loading);
	const error = useSelector((state: RootState) => state.data.error);
	const dispatch = useDispatch();

	const [ showMoreData, setShowMoreData ] = useState(false);
	const [ setColorIcon ] = useState('#f4ff81');

	useEffect(
		() => {
			dispatch(fetchData());
		},
		[ dispatch ]
	);

	return (
		<MainPageContainer>
			{loading && <CircularProgress />}
			{error && <div>{error}</div>}
			<div>
				{components.map((user: any) => (
					<div key={user.id} className="wrapper-1">
						<div
							className="checkbox"
							onClick={() => {
								checked(user.id);
							}}
							style={
								valueChecked === user.id ? { backgroundColor: '#4a2685' } : { backgroundColor: '#ffff' }
							}
						/>
						<div className="user-data">{user.name}</div>
						<div>
							<ArrowDropDownIcon
								onClick={() => {
									setShowMoreData(!showMoreData);
									selected(user.id);
								}}
								className="arrow-dropdown-icon"
							/>
							{showMoreData && valueSelected === user.id ? (
								<DetailsDropdown user={user} color={setColorIcon} />
							) : null}
						</div>
					</div>
				))}
			</div>
		</MainPageContainer>
	);
}

export default MainPage;
