import { useState } from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { DetailsDropdownContainer } from './styles/DetailsDropdownContainer';

function DetailsDropdown({ user }: any) {
	const [giveAStar, setGiveAStar] = useState(false);

	return (
		<DetailsDropdownContainer>
			<div className="animation-form">
				<div className="user-data">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRog6epfJWr_aK4Q5m5o6OYOGoJAHZMpky4mA&usqp=CAU"
						alt="sth"
						width="90px"
						height="70px"
						className="img"
					/>
					<header>{user.username}</header>
					<h4>{user.email}</h4>
					<h4>{user.address.city}</h4>
					<h4>{user.company.name}</h4>
					<footer>{user.website}</footer>
				</div>
				<div>
					<footer onClick={() => setGiveAStar(!giveAStar)} className="star-component-wrapper">
						{giveAStar ? (
							<StarIcon className="star-component" color="secondary" />
						) : (
							<StarOutlineIcon />
						)}
					</footer>
				</div>
			</div>
		</DetailsDropdownContainer>
	);
}

export default DetailsDropdown;
