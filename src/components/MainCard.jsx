import React, { useState, useEffect } from 'react'

import { QuestionCard } from './QuestionCard'
import { MainWrapper, Button, ButtonWrapper, QuestionCount } from './MainCard.style'
import advImg from '../assets/undraw_adventure_4hum 1.svg'
import ResultCard from './ResultCard'
import axios from 'axios'
import Timer from './Timer'
import { Prompt, withRouter } from 'react-router'

const useData = () => {
  const [countryCapitalData, setCountryCapitalData] = useState([]);
  const [countryFlagData, setCountryFlagData] = useState([]);
  const [error, setError] = useState(false);
  let isSubscribed = true
  const getCountryCapital = () => {
    axios.get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        if (isSubscribed) {
          setError(false)
          setCountryCapitalData(response.data.data);
        }
      })
      .catch((error) => {
        if (isSubscribed) {
          setError(true)
        }
      })
  }
  const getCountryFlag = () => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => {
        if (isSubscribed) {
          setError(false)
          setCountryFlagData(response.data.data);
        }
      })
      .catch((error) => {
        if (isSubscribed) {
          setError(true)
        }
      })
  }

  useEffect(() => {
    getCountryCapital();
    getCountryFlag();
    return () => isSubscribed = false
  }, [])

  return { countryFlagData, countryCapitalData, error }
}

const MainCard = ({ history }) => {
  const { countryFlagData, countryCapitalData, error } = useData()
  const [questionData, setQuestionData] = useState(null);
  const [correctAnsCount, setCorrectAnsCount] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [displayNext, setDisplayNext] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const time = { initialMinute: 0, initialSeconds: 40 }

  const [promptFlag, setPromptFlag] = useState(false)
  useEffect(() => {
    setPromptFlag(true)
  }, [])

  const randomInteger = (n) => Math.floor(Math.random() * n)

  const getNRandomIndex = (n, maxIndex) => {
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
        let indexes = getNRandomIndex(4, countryFlagData?.length);
        let data = countryFlagData[indexes[randomInteger(4)]]
        let options = indexes.map((i) => countryFlagData[i].name);
        let resObj = {
          statement: "Which country does this flag belong to?",
          flag: data.flag,
          options,
          answer: data.name
        }
        return resObj
      }
    } else {
      if (countryCapitalData?.length > 4) {
        let indexes = getNRandomIndex(4, countryCapitalData?.length);
        let data = countryCapitalData[indexes[randomInteger(4)]]
        let options = indexes.map((i) => countryCapitalData[i].name);
        let resObj = {
          statement: `${data.capital} is the capital of`,
          flag: null,
          options: options,
          answer: data.name
        }
        return resObj
      }
    }
  }

  const nextQuestion = () => {
    setCurrentQuestion(prev => prev + 1)
    setUserAnswer(null);
    setDisplayNext(false);
    setUserAnswer(null);
  }

  const checkAns = () => {
    if (userAnswer) {
      if (userAnswer === questionData[currentQuestion].answer) {
        setCorrectAnsCount(count => count + 1)
      }
      if (currentQuestion === 9) {
        setGameOver(true)
      }
      setDisplayNext(true)
    }
  }

  const tryAgain = () => {
    history.push('/')
  }

  useEffect(() => {
    if (!gameOver && countryFlagData?.length > 4 && countryCapitalData?.length > 4) {
      let questionArray = []
      for (let i = 0; i < 10; i++) {
        questionArray.push(getQuestion())
      }
      setQuestionData(questionArray)
      setCurrentQuestion(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryFlagData, countryCapitalData, gameOver])

  useEffect(() => {
    checkAns()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswer])

  return (
    <MainWrapper>
      {
        !gameOver &&
        <>
          {promptFlag && <Prompt message="Are you sure you want to leave the quiz?" />}
          {
            questionData?.length > 0 && <Timer setShowResult={setShowResult}
              setGameOver={setGameOver}
              time={time}
            />
          }
        </>
      }
      <div>
        <p className="title">Country Quiz</p>
        {!showResult && <img className="top-img" src={advImg} alt='adventure' />}
        <div className="content">
          {
            error ? <>Quiz cannot be loaded, please try again in a while &gt;_&lt;</> :
              showResult ? <ResultCard correctAnsCount={correctAnsCount} tryAgain={tryAgain} />
                : questionData ?
                  <>
                    <QuestionCard
                      question={questionData[currentQuestion].statement}
                      options={questionData[currentQuestion].options}
                      flag={questionData[currentQuestion].flag}
                      answer={questionData[currentQuestion].answer}
                      currentQuestion={currentQuestion}
                      setUserAnswer={setUserAnswer}
                      userAnswer={userAnswer}
                    />
                    <ButtonWrapper>
                      <QuestionCount>{currentQuestion + 1} / 10</QuestionCount>
                      {
                        gameOver ?
                          <Button onClick={() => setShowResult(true)}>See Results</Button>
                          : displayNext ?
                            <Button onClick={nextQuestion}>Next</Button>
                            :
                            <Button dummy disabled>Dummy</Button>
                      }
                    </ButtonWrapper>
                  </>
                  : <div>loading...</div>
          }
        </div>
      </div>
    </MainWrapper>
  )
}

export default withRouter(MainCard)
