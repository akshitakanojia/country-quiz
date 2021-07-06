import styled from "styled-components";

export const MainWrapper  = styled.div`
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
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  background :${({dummy})=>dummy?"#fff":"#F9A826"} ;
  border-radius: 12px;
  padding: 15px 35px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  align-self: right;
  cursor: pointer;
`