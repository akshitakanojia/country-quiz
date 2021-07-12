import styled from "styled-components";

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .result-text{
    font-size: 48px;
    font-weight: 700;
    color: #1D355D;
    margin-top: 70px;
  }

  .result{
    font-weight: 400;
    font-size: 18px;
    color: #1D355D;
    margin-bottom: 70px;
  }

  .score{
    font-size:36px;
    color: #6fcf97;
    font-weight: 800;
  }

  button{
    font-weight: 600;
    font-size: 18px;
    color: #1D355D;
    border: 2px solid #1D355D;
    border-radius: 12px;
    width: fit-content;
    padding: 18px 60px;
    background: #fff;
    cursor: pointer;
  }

  @media (max-width:769px){
    .result-text{
      margin-top: 50px;
      font-size: 40px;
    }

    button{
      padding: 15px 40px;
      font-size: 15px;
    }
  }

`