import styled from 'styled-components';

export const ModuleContentContainer = styled.div`
	& .wrapper-1 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
		
		.react-date-picker__wrapper {
			border: 0 solid black;
		}
	}

	& .wrapper-2 {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: space-between;
	}

	& .p {
		font-family: Lato;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		line-height: 14px;
		color: #3c3f42;
		padding-left: 12px;
		padding-top: 7px;
	}

	& .submit-button {
		width: 100%;
		height: 33px;
		border: 2px solid #492b66;
		color: #492b66;
		background-color: whitesmoke;
		border-radius: 3;
		font-weight: bold;
		font-size: 10px;
		margin-left: 10px;
		margin-top: 20px;
	}

	& .submit-button:hover {
		background-color: #492b66;
		color: white;
	}
`;

export const WrapperContainer = styled.div`
	width: 100%;
	height: 36px;
	position: relative;
	border-radius: 3px;
	margin: 10px;
	margin-right: 3.9px;
	margin-left: 7px;

	& .wrapper-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
		background-color: rgba(196, 196, 196, 0.3);
	}

	& .label-option {
		width: 100%;
		height: 18.9px;
		font-family: Lato;
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 14px;
		color: #000000;
		opacity: 0.5;
		padding-top: 10px;
		padding-bottom: 7px;
		padding-left: 18.16px;
		padding-right: 194.75;
	}

	& .label-option-description {
		width: 100%;
		height: 18.9px;
		font-family: Lato;
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 14px;
		color: #000000;
		opacity: 0.5;
		margin-top: 2px;
		margin-bottom: 2px;
		padding-top: 9px;
		padding-bottom: 7px;
		padding-left: 7px;
		padding-right: 194.75;
	}

	& .arrow-container-option {
		width: 35px;
		height: 25px;
		margin-top: 5px;
		padding-bottom: 14.03;
		padding-right: 16.01;
		color: #777777;
	}

	& .options-list {
		position: absolute;
		max-height: 15vh;
		width: 100%;
		overflow: auto;
		font-size: 12px;
		box-shadow: 0 2px 3px 2px rgba(196, 196, 196);
		background: whitesmoke;
		color: #3f3f3f;
		margin-top: 10px;
		padding-top: 2px;
		padding-bottom: 2px;
		cursor: pointer;
		z-index: 9999;

		::-webkit-scrollbar {
			width: 12px;
		}

		::-webkit-scrollbar-track {
			background: #e9ecef;
		}

		::-webkit-scrollbar-button {
			display: none;
		}

		::-webkit-scrollbar-thumb {
			background: #ced4da;
			border-radius: 4px;
		}
	}

	& .option-value {
		padding-left: 8px;
		padding-bottom: 6px;
		padding-right: 8px;
		padding-top: 6px;
	}

	& .option-value:hover {
		background-color: rgba(196, 196, 196, 0.3);
		height: 15px;
	}

	& .wrapper-container-date {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
		background-color: rgba(196, 196, 196, 0.3);
		width: 100%;
		height: 33px;
	}

	& .wrapper-container-date-2 {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: space-between;
	}

	& .date-time-option {
		position: absolute;
		width: 100%;
		height: 33px;
		font-family: Lato;
		font-style: normal;
		font-weight: 500;
		font-size: 13px;
		line-height: 14px;
		color: #000000;
		opacity: 0.5;
		cursor: pointer;
	}

	& .calendar-option {
		position: absolute;
		width: 100%;
		height: 20px;
		margin-left: 150px;
		margin-top: 6px;
		opacity: 0.8;
		cursor: pointer;
	}

	& .clock-option {
		position: absolute;
		width: 100%;
		height: 25px;
		margin-left: 150px;
		margin-top: 5px;
		margin-bottom: 3px;
		opacity: 0.8;
		cursor: pointer;
	}
`;

interface ArrowContainerProps {
	opened: boolean;
}

export const ArrowContainer =
	styled.div <
		ArrowContainerProps >`
	//transform: rotate(${(props) => (props.opened ? '180deg' : '0deg')});
`;

// interface WrapperDateTimeProps {
// 	clicked: boolean;
// }

// export const WrapperDateTime =
// 	styled.div < WrapperDateTimeProps >`color: (${(props) => (props.clicked ? '#492b66' : 'black')})`;

// export const WrapperDateTime = styled.div`
// 	color: #492b66;
// `