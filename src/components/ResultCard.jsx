import React from 'react'
import resultImg from '../assets/undraw_winners_ao2o 2.svg'
import { ResultWrapper } from './ResultCard.style'

const ResultCard = ({correctAnsCount, tryAgain}) => {
  return (
    <ResultWrapper>
      <div className="result-img">
        <img src={resultImg} alt="result" />
      </div>
      <p className="result-text">Results</p>
      <p className="result">You got <span className="score">{correctAnsCount}</span> correct answers</p>
      <button onClick={tryAgain}>Try again</button>
    </ResultWrapper>
  )
}

export default ResultCard
