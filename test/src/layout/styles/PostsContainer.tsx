import styled from "styled-components";

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 200px;

    h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    & .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: space-evenly;
    }

    & .button {
		background-color: #492b66;
		color: white;
		margin: 25px;
        margin-left: 20px;
		width: 80px;
		height: 28px;
	}

`