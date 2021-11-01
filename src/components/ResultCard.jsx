import React, { useEffect } from 'react'
import resultImg from '../assets/undraw_winners_ao2o 2.svg'
import { ResultWrapper } from './ResultCard.style'

const ResultCard = ({ correctAnsCount, tryAgain }) => {
  useEffect(() => {
    if (parseInt(localStorage.getItem('country_quiz_high_score'))) {
      if (parseInt(localStorage.getItem('country_quiz_high_score')) < correctAnsCount) {
        localStorage.setItem('country_quiz_high_score', correctAnsCount)
      }
    }
    else {
      localStorage.setItem('country_quiz_high_score', correctAnsCount)
    }
  }, [])

  return (
    <ResultWrapper>
      <div className="result-img">
        <img src={resultImg} alt="result" />
      </div>
      <p className="result-text">Results</p>
      <p className="result">You got <span className="score">{correctAnsCount}</span> correct {`${correctAnsCount === 1 ? "answer" : "answers"}`}</p>
      <button onClick={tryAgain}>Try again</button>
    </ResultWrapper>
  )
}

export default ResultCard
