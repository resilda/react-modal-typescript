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

	& .animation-form {
		animation: opt-animation3 1s;
		-moz-animation-fill-mode: forwards;
		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;
	}

	@-webkit-keyframes opt-animation3 {
		0% {
			opacity: 0;
			transform: scale(0.75);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@-moz-keyframes opt-animation3 {
		0% {
			opacity: 0;
			transform: scale(0.75);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@-o-keyframes opt-animation3 {
		0% {
			opacity: 0;
			transform: scale(0.75);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
	@keyframes opt-animation3 {
		0% {
			opacity: 0;
			transform: scale(0.75);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
`;