import styled from "styled-components";

export const HomeContainer = styled.div`
  background: #FFFFFF;
  border-radius: 24px;
  padding: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 90vw;

  h2{
    margin-bottom:1.5rem;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;

  input{
    max-width: 85vw;
    margin-top: 0.5rem;
    border: 1.5px solid #5c62c1;
    padding: 0.5rem 1rem;
    border-radius: 12px;
  }

  input:focus{
  outline: none;
  }
`

export const ErrorMessage = styled.span`
  color: #ff5757;
  font-size: 13px;
`

export const Button = styled.button`
  background-color: #60BF88;
  padding: 1rem 2rem;
  color: #fff;
  border: none;
  border-radius: 1rem;
  margin-top: 0.5rem;
`