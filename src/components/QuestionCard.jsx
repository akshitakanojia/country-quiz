import React, { useEffect, useState } from 'react'
import { QuestionWrapper, Question, Option } from './QuestionCard.style'

const label = ['A', 'B', 'C', 'D']

export const QuestionCard = ({
  question,
  options,
  flag,
  answer,
  setUserAnswer,
  userAnswer
}) => {
  const [disableOptions, setDisableOptions] = useState(false)

  useEffect(() => {
    setDisableOptions(false)
  }, [question, options, flag])

  return (
    <QuestionWrapper>
      {flag && <img src={flag} alt='flag' className='flag-img' />}
      <Question>{question}</Question>
      {
        options.map((option, i) => {
          let correct = (option === userAnswer && userAnswer === answer) || (userAnswer && (option === answer));
          let incorrect = option === userAnswer && userAnswer !== answer;
          return <Option key={i}
            disabled={disableOptions}
            correct={correct}
            incorrect={incorrect}
            onClick={() => { !disableOptions && setUserAnswer(option); setDisableOptions(true) }}>
            <div>
              <span className="tag">{label[i]}</span>
            </div>
            <div style={{ flexGrow: 1 }}>{option}</div>
            {correct && <div><span style={{ verticalAlign: "middle" }} className="material-icons">
              check_circle_outline
            </span>
            </div>}
            {incorrect && <div><span style={{ verticalAlign: "middle" }} className="material-icons">
              highlight_off
            </span>
            </div>}
          </Option>
        }
        )
      }
    </QuestionWrapper>
  )
}
