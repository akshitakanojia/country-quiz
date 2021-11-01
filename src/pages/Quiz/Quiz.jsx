import MainCard from "../../components/MainCard"
import { QuizWrapper, Message } from "./Quiz.style"

const Quiz = () => {
  return (
    <>
      <Message>
        <h4>
          Hey {localStorage.getItem('quiz_username')}
        </h4>
        <div>High score : {`${parseInt(localStorage.getItem('country_quiz_high_score')) ? localStorage.getItem('country_quiz_high_score') : 0}`}</div>
      </Message>
      <QuizWrapper>
        <MainCard />
      </QuizWrapper>
    </>
  )
}

export default Quiz
