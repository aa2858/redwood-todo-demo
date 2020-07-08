import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const { logIn, logOut, currentUser, isAuthenticated } = useAuth()
  return (
    <div>
      <h1>Login Page</h1>
      {isAuthenticated && <p>{currentUser}</p>}
      {!isAuthenticated && <p>Logged out</p>}
      <button onClick={logIn}>Log IN</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default LoginPage
