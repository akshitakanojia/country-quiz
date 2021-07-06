import styled from "styled-components";


export const Question = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: #2F527B;
`

export const Option =  styled.div`
  display: flex;
  align-items: center;
  flex: 1 100%; 
  /* width: 100%; */
  padding: 12px 20px;
  border: ${({correct,incorrect})=>correct?"2px solid #60BF88":incorrect?"2px solid #EA8282":"2px solid #6066D0"};
  border-radius: 12px;
  background: ${({correct,incorrect})=>correct?"#60BF88":incorrect?"#EA8282":"#fff"};
  margin: 15px 0;
  color: ${({correct,incorrect})=>(correct||incorrect)?"#fff":"#6066D0"};
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;

  span{
    margin-right:46px;
    font-size: 24px;
  }

  &:hover{
    border-color: ${({correct,incorrect,disabled})=>
                        correct?"#60BF88":incorrect?"#EA8282":disabled?"#6066D0":"#F9A826"};
    background: ${({correct,incorrect,disabled})=>correct?"#60BF88":incorrect?"#EA8282":disabled?"#fff":"#F9A826"};
    color: ${({correct,incorrect,disabled})=>(incorrect||correct)?"#fff":disabled?"#6066D0":"#fff"};
  }
`