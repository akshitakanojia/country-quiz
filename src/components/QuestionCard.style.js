import styled from "styled-components";

export const QuestionWrapper = styled.div`
  .flag-img{
    height: 54px;
    box-shadow: 0px 4px 24px 0px #0000001A;
    margin-bottom: 12px;
    border-radius: 4px;
  }
`


export const Question = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #2F527B;

  @media (max-width:769px){
    font-size: 18px;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  flex: 1 100%; 
  padding: 12px 20px;
  border: ${({ correct, incorrect }) => correct ? "2px solid #60BF88" : incorrect ? "2px solid #EA8282" : "2px solid #6066D0"};
  border-radius: 12px;
  background: ${({ correct, incorrect }) => correct ? "#60BF88" : incorrect ? "#EA8282" : "#fff"};
  margin: 15px 0;
  color: ${({ correct, incorrect }) => (correct || incorrect) ? "#fff" : "#6066D0"};
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;

  .tag{
    margin-right:46px;
    font-size: 24px;
  }

  &:hover{
    border-color: ${({ correct, incorrect, disabled }) =>
    correct ? "#60BF88" : incorrect ? "#EA8282" : disabled ? "#6066D0" : "#F9A826"};
    background: ${({ correct, incorrect, disabled }) => correct ? "#60BF88" : incorrect ? "#EA8282" : disabled ? "#fff" : "#F9A826"};
    color: ${({ correct, incorrect, disabled }) => (incorrect || correct) ? "#fff" : disabled ? "#6066D0" : "#fff"};
  }

  @media (max-width:769px){
    font-size: 15px;
    .tag{
      font-size: 20px;
    }
  }
`