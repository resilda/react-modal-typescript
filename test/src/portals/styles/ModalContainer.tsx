import styled from 'styled-components';

const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;

const FullWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.button {
		margin-bottom: 20px;
		background-color: blueviolet;
		color: white;
		margin: 10px;
		width: 130px;
		height: 35px;
	}
`;

const Container = styled.div`
	position: fixed;
	background: #00000050;
	opacity: 0.5;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
`;

const Wrapper0 = styled.div``;

const Wrapper1 = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-height: 70vh;
	margin-top: calc(120vh - 85vh - 10px);
	margin-left: calc(120vh - 85vh - 10px);
	background: #e8e8e8;
	box-shadow: '0 2px 3px 2px #8ABAAC';
	border-radius: 4px;
	padding: 20px;
	border: 0;
	background-color: whitesmoke;
	height: 100vh;
	width: calc(1920/2 - 500px);
	height: 20vh;
	/* width: pageWidth/2;
	height: pageHeight/2; */

	.opacity-animate3 {
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

	.wrapper-div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.wrapper-label {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 15px;
	}

	.input {
		width: 200px;
		height: 20px;
		margin-left: 5px;
	}

	.button {
		margin-bottom: 20px;
		background-color: blueviolet;
		color: white;
		margin: 10px;
		width: 130px;
		height: 35px;
	}
`;

const Wrapper2 = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
`;

export { FullWrapper, Container, Wrapper0, Wrapper1, Wrapper2 };
