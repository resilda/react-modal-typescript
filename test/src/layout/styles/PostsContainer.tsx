import styled from "styled-components";

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 200px;

    h2 {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    
    & .text-field-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;
    }

    & .elements {
        margin-right: 10px;
        /* margin-bottom: 20px */
    }

    & .text-field {
        margin-top: 15px
    } 

    & .post-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: space-between;
    }

    & .elements-wrapper {
        display: flex;
        flex-direction: row;
    }

    .body {
        color: #492b66;
        margin-left: 10px;
    }

    & .button {
		background-color: #492b66;
		color: white;
		margin: 25px;
        margin-left: 20px;
		width: 80px;
		height: 28px;
	}

    & .delete-button {
        background-color: #492b66;
		color: white;
		margin: 20px;
        margin-left: 20px;
		width: 55px;
		height: 23px;
        font-size: 11px
    }

`