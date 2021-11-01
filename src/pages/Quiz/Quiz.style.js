import styled from "styled-components";

export const QuizWrapper = styled.div`
  position: relative;
  height: 100vh;
  margin-top:0.25rem;
`

export const Message = styled.div`
  padding: 1rem 2rem 0;
  gap:1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  color:#d6d8ff;
  @media (max-width:769px){
    justify-content: space-between;
    padding: 1rem 1rem 0;
  }
`