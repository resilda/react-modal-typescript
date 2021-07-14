import styled from 'styled-components';

export const MainPageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	position: relative;
	margin-top: 50px;

	h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

	& .wrapper-0 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: space-around;
	}

	& .wrapper-1 {
		display: flex;
		flex-direction: row;
	}

	& .wrapper-2 {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	& .checkbox {
		border: 1px solid black;
		border-radius: 30px;
		width: 10px;
		height: 10px;
		margin-right: 10px;
		margin-top: 5px;
		cursor: pointer;
	}

	& .user-data {
		font-family: monospace;
		font-size: 18px;
		margin-left: 20px;	
	}

	& .arrow-dropdown-icon {
		margin-left: 10px;
		cursor: pointer;
	}
`;

interface CheckIconProps {
	showIcon: boolean;
}

export const CheckIconContainer = styled.div<CheckIconProps>`visibility: (${(props) => (props.showIcon ? 'visible' : 'hidden')})`
