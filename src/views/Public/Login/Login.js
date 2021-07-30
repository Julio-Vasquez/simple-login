import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {

  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h3>Iniciar Sesión</h3>
      <button onClick={()=>loginWithRedirect()}>Login</button>
    </div>
  );
}

export default Login