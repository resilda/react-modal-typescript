import { useState } from 'react';
import { DetailsPageProps } from './types/propsTypes';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { DetailsDropdownContainer } from './styles/DetailsDropdownContainer';

function DetailsDropdown({ user }: any, { color }: DetailsPageProps) {
	const [ giveAStar, setGiveAStar ] = useState(false);

	return (
		<DetailsDropdownContainer>
			<div className="user-data">
				<header>{user.username}</header>
				<h4>{user.email}</h4>
				<h4>{user.address.city}</h4>
				<h4>{user.company.name}</h4>
				<footer>{user.website}</footer>
			</div>
			<footer onClick={() => setGiveAStar(!giveAStar)} className="star-component-wrapper">
				{giveAStar ? (
					<StarIcon style={{ color: `${color}` }} className="star-component" />
				) : (
					<StarOutlineIcon />
				)}
			</footer>
		</DetailsDropdownContainer>
	);
}

export default DetailsDropdown;
