import { useEffect, useState } from "react"
import { withRouter } from "react-router"
import { HomeContainer, InputWrapper, ErrorMessage, Button } from "./Home.style"

const Home = ({ setPassCode, history }) => {
  const [credentials, setCredentials] = useState({ username: '', passcode: '' })
  const [authenticated, setAuthenticated] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((credentials.username?.length > 0 || authenticated) && credentials.passcode === "AK47") {
      !authenticated && localStorage.setItem('quiz_username', credentials.username)
      setPassCode(true)
      history.push('/quiz')
    }
    else {
      setError(true)
    }
  }

  useEffect(() => {
    setPassCode(false);
    if (!(!localStorage.getItem('quiz_username') ||
      localStorage.getItem('quiz_username')?.length === 0 ||
      localStorage.getItem('quiz_username') === "null" ||
      localStorage.getItem('quiz_username') === "undefined"
    )) setAuthenticated(true);
  }, [])

  return (
    <HomeContainer>
      <h2>Welcome to country quiz</h2>
      <form onSubmit={handleSubmit}>
        {
          !authenticated &&
          <InputWrapper>
            <label htmlFor="username">Please choose a username</label>
            <input type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              maxLength="20"
              required
            />
          </InputWrapper>
        }
        <InputWrapper>
          <label htmlFor="passcode">Enter passcode</label>
          <input type="text"
            name="passcode"
            value={credentials.passcode}
            onChange={handleChange}
            maxLength="4"
            required
          />
          {error && <ErrorMessage>Invalid passcode</ErrorMessage>}
        </InputWrapper>
        <Button>Start</Button>
      </form>
    </HomeContainer>
  )
}

export default withRouter(Home)
