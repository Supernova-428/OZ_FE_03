
import { useNavigate } from 'react-router-dom'
import {styled} from 'styled-components'

const LoginPage = () => {

  let iwannaregister = false

  const navigate = useNavigate()
  
  const handleLogIn = () => {
      navigate('/main')
  }
  
  const handleSignUp = () => {
    iwannaregister=true
    navigate('/signUp')
}

  return (
    <Container>
      <Center>
        <Logo src='/images/apple-gray-logo.svg' alt='logo'/>
        <HeadingText>Sign in with your Apple Id</HeadingText>
        <Description>You will be signed in to Apple TV and Apple Music.</Description>
        <Email type='email' placeholder='email'></Email>
        <Password type='password' placeholder='password'></Password>
        <SignIn onClick={handleLogIn}>Sign In</SignIn>
        <Button>Apple ID</Button>
        <LinkText onClick={handleSignUp}>Create New Apple ID</LinkText>
        <LinkText>Forgot Apple ID or Password?</LinkText>
      </Center>
    </Container>
 )
}

const Email = styled.input`
color: white;
margin-top: 2.5rem;
font-size: 18px;
padding: 1rem;
border: 1px solid transparent;
border-radius: 12px;
border-color: #424245;
background-color: hsla(0, 0%, 100%, .04);
width: 310px;
font-weight: 400;
`

const Password = styled.input`
color: white;
margin-top: 1rem;
font-size: 18px;
padding: 1rem;
border: 1px solid transparent;
border-radius: 12px;
border-color: #424245;
background-color: hsla(0, 0%, 100%, .04);
width: 310px;
font-weight: 400;
`

const SignIn = styled.a`
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, .3);
  width: 310px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;

  &:hover{
    background-color: hsla(0, 0%, 100%, .23);
  }
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.img`
  margin-bottom: 1.3rem;
  width: 50px;
`

const HeadingText = styled.h1`
  font-size: 1.9rem;
`

const Description = styled.p`
  margin: 0;
  font-size: 1.3rem;
`
const LinkText = styled.p`
  font-size: 1.2rem;
  color: #2997ff;
  margin: 1rem 0;
  cursor: pointer;
`
const Button = styled.a`
  margin-top: 2.5rem;
  margin-bottom: 8rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%, .04);
  width: 310px;
  font-weight: 400;
  cursor: pointer;

  &:hover{
    background-color: hsla(0, 0%, 100%, .08);
  }
`

export default LoginPage