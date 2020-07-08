import { useAuth } from '@redwoodjs/auth'

const LoginPage = () => {
  const {logIn, logOut, currentUser, isAuthenticated} = useAuth()
  return (
    <div>
      <h1>LoginPage</h1>
      {isAuthenticated && <p>{currentUser.email}</p>}
      {!isAuthenticated && <p>Logged out</p>}
      <button onClick={logIn}>Log IN</button>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default LoginPage
