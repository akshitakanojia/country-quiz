import React, { useState, useEffect } from 'react'

import { QuestionCard } from './QuestionCard'
import { MainWrapper, Button, ButtonWrapper } from './MainCard.style'
import advImg from '../assets/undraw_adventure_4hum 1.svg'
import ResultCard from './ResultCard'

const MainCard = ({ countryFlagData, countryCapitalData, error }) => {
  const [questionData, setQuestionData] = useState(null);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const randomInteger = (n) => Math.floor(Math.random() * n)

  const getNRandomIndex = (n,maxIndex) => {
    let result = [];
    while (n && maxIndex) {
      let i = randomInteger(maxIndex)
      if (!result.includes(i)) {
        result.push(i)
        n--;
      }
    }
    return result
  }

  const getQuestion = () => {
    // true: countryFlagData, countryCapitalData question; false: capital question
    if (Math.random() < 0.5) {
      if (countryFlagData?.length > 4) {
        let indexes = getNRandomIndex(4,countryFlagData?.length);
        let questionData = countryFlagData[indexes[randomInteger(4)]]
        let options = indexes.map((i) => countryFlagData[i].name);
        let resObj = {
          statement: "Which country does this flag belong to?",
          flag: questionData.flag,
          options,
          answer: questionData.name
        }
        return resObj
      }
    } else {
      if (countryCapitalData?.length > 4) {
        let indexes = getNRandomIndex(4,countryCapitalData?.length);
        let questionData = countryCapitalData[indexes[randomInteger(4)]]
        let options = indexes.map((i) => countryCapitalData[i].name);
        let resObj = {
          statement: `${questionData.capital} is the capital of`,
          flag: null,
          options: options,
          answer: questionData.name
        }
        return resObj
      }
    }
  }

  const nextQuestion = () => {
    setQuestionData(getQuestion());
    setUserAnswer(null);
    setDisplayNext(false);
    setUserAnswer(null);
  }

  const checkAns = () => {
    if (userAnswer) {
      if (userAnswer === questionData.answer) {
        setCorrectAnsCount(count => count + 1)
        setDisplayNext(true)
      }
      else {
        setGameOver(true)
      }
    }
  }

  const tryAgain = () => {
    setCorrectAnsCount(0)
    setGameOver(false)
    setShowResult(false)
    setQuestionData(null)
    nextQuestion()
  }

  useEffect(() => {
    if (countryFlagData?.length > 4 && countryCapitalData?.length > 4) {
      setQuestionData(getQuestion());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryFlagData, countryCapitalData])

  useEffect(() => {
    checkAns()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswer])

  return (
    <MainWrapper>
      <p className="title">Country Quiz</p>
      {!showResult && <img className="top-img" src={advImg} alt='adventure' />}
      <div className="content">
        {
          error ? <>Quiz cannot be loaded, please try again in a while &gt;_&lt;</> :
            showResult ? <ResultCard correctAnsCount={correctAnsCount} tryAgain={tryAgain} />
              : questionData ?
                <>
                  <QuestionCard
                    question={questionData.statement}
                    options={questionData.options}
                    flag={questionData.flag}
                    answer={questionData.answer}
                    setUserAnswer={setUserAnswer}
                    userAnswer={userAnswer}
                  />
                  <ButtonWrapper>
                    {
                      gameOver ?
                        <Button onClick={() => setShowResult(true)}>See Results</Button>
                        : displayNext ?
                          <Button onClick={nextQuestion}>Next</Button>
                          :
                          <Button dummy>Dummy</Button>
                    }
                  </ButtonWrapper>
                </>
                : <div>loading...</div>
        }
      </div>
    </MainWrapper>
  )
}

export default MainCard
