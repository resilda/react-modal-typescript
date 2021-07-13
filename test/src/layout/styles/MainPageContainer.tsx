import styled from 'styled-components';

export const MainPageContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	margin-left: 70px;

	& .wrapper-1 {
		display: flex;
		flex-direction: row;
	}

	& .checkbox {
		border: 1px solid black;
		width: 10px;
		height: 10px;
		margin-right: 10px;
		margin-top: 5px;
		cursor: pointer;
	}

	& .user-data {
		font-family: monospace;
		font-size: 18px;
	}
`;
