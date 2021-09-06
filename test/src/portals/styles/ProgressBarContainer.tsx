import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .progress-bar-dots-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .progress-bar-dots {
    border: 1px solid orange;
    background-color: orange;
    width: 1px;
    height: 1px;
    margin-right: 2px;
  }

  .completed-dots {
    border: 1px solid green;
    background-color: green;
    width: 1px;
    height: 1px;
    margin-right: 2px;
  }

  .step-contianer {
    border: 3px solid black;
    border-radius: 50%;
    color: black;
    padding: 5px 5px;
  }
`
