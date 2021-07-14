import styled from 'styled-components';

export const DetailsDropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	width: 15vw;
	height: 30vh;
	border: 0;
	box-shadow: 0 2px 3px 2px #c5e2da;
	position: absolute;

	.img {
		margin-left: 70px;
		margin-bottom: 10px;
	}

	& .user-data {
		font-size: 13px;
		margin: 5px 20px;
		font-family: cursive;
		font-weight: normal;
		text-align: left;
	}

	& .star-component-wrapper {
		margin-left: 250px;
		margin-bottom: 10px;
	}
`;