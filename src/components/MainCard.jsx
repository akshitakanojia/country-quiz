import React, { useState,useEffect } from 'react'

import { QuestionCard } from './QuestionCard'
import { MainWrapper, Button, ButtonWrapper } from './MainCard.style'
import advImg from '../assets/undraw_adventure_4hum 1.svg'
import ResultCard from './ResultCard'

const MainCard = ({ countryData }) => {
  const [questionData, setQuestionData] = useState(null);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const [showResult, setShowResult] = useState(false); 

  const randomInteger = (n) => Math.floor(Math.random() * n)

  const getNRandomIndex = (n) => {
    let result = [];
    while (n) {
      let i = randomInteger(countryData?.length)
      if (!result.includes(i)) {
        result.push(i)
        n--;
      }
    }
    return result
  }

  const getQuestion = () => {
    if (countryData?.length > 4) {

      let indexes = getNRandomIndex(4);
      let questionData = countryData[indexes[randomInteger(4)]]
      let options = indexes.map((i) => countryData[i].name);

      // true: flag question; false: capital question
      if (Math.random() < 0.5) {
        let resObj = {
          statement: "Which country does this flag belong to?",
          flag: questionData.flag,
          options,
          answer: questionData.name
        }
        return resObj
      }
      else {
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
    if (countryData?.length > 4) {
      setQuestionData(getQuestion());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryData])

  useEffect(() => {
    checkAns()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswer])

  return (
    <MainWrapper>
      <p className="title">Country Quiz</p>
      {!showResult&&<img style={{ position: "absolute", right: "0", top: "-1rem" }} src={advImg} alt='adventure' />}
      <div className="content">
        {
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
