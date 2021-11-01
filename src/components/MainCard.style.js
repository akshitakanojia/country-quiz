import styled from "styled-components";

export const MainWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .title{
    font-weight: 700;
    font-size: 36px;
    color: #fff;
    text-transform: uppercase;
    margin-bottom:10px;
  }
  
  .content{
    background: #FFFFFF;
    border-radius: 24px;
    padding: 3.5rem 2rem 2rem;
    width: 465px;
  }

  .top-img{
    position: absolute; 
    right: 0;
    top: 20px;
  }

  @media (max-width:769px){
    .title{
      font-size: 26px;
      margin-bottom:8px;
    }
    .top-img{
      max-height: 6rem;
    }
    .content{
      padding: 3rem 1.5rem 1.5rem;
      width: fit-content;
      min-width: 90vw;
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Button = styled.button`
  background :${({ dummy }) => dummy ? "#fff" : "#F9A826"} ;
  border-radius: 12px;
  padding: 15px 35px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  align-self: right;
  cursor: pointer;
`

export const QuestionCount = styled.p`
  color: #6066D0;
  font-weight: 500;
  font-size: 18px;
`