import styled from 'styled-components';

export const FullWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	& .button {
		margin-bottom: 20px;
		background-color: #492b66;
		color: white;
		margin: 10px;
		width: 130px;
		height: 35px;
	}
`;

export const ModalOverlay = styled.div`
	position: fixed;
	background: rgba(0, 0, 0, 0.7);
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Wrapper1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: space-between;
	background: #e8e8e8;
	box-shadow: '0 2px 3px 2px #8ABAAC';
	border-radius: 4px;
	padding: 20px;
	border: 0;
	background-color: whitesmoke;

	& .full-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
		background-color: rgba(196, 196, 196, 0.3);
		height: 25vh;
	}

	& .buttons-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		margin-right: 5px;
		margin-bottom: 30px;
	}

	.h3 {
		font-family: Lato;
		font-style: normal;
		font-weight: bold;
		font-size: 18px;
		line-height: 22px;
		color: #3c3f42;
		padding-left: 10px;
	}

	@media screen and (min-width: 280px) and (max-width: 480px) {
		width: 80vw;
		height: 72vh;
		& .buttons-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}

	@media screen and (min-width: 481px) and (max-width: 768px) {
		width: 85vw;
		height: 70vh;
	}

	@media screen and (min-width: 769px) and (max-width: 1024px) {
		width: 80vw;
		height: 70vh;
	}

	@media screen and (min-width: 1025px) and (max-width: 1200px) {
		width: 75vw;
		height: 70vh;
	}

	@media screen and (min-width: 1201px) and (max-width: 1400px) {
		width: 70vw;
		height: 60vh;
	}

	@media screen and (min-width: 1400px) {
		width: 50vw;
		height: 72vh;
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

	& .wrapper-div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	& .wrapper-label {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 15px;
	}

	& .input {
		width: 200px;
		height: 20px;
		margin-left: 5px;
	}

	& .buttons-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	& .button {
		color: #492b66;
		cursor: pointer;
		margin-right: 7px;
		margin-top: 7px;
	}
`;

export const Wrapper2 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
`;
