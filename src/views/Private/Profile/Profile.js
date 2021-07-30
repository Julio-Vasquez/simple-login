import { useAuth0 } from '@auth0/auth0-react'

import { Loading } from './../../../components/Loading'

const Profile = () => {
  const { user, logout, isLoading, isAuthenticated  } = useAuth0();

  console.log(user)
  if(isLoading){
    return <Loading />
  }

  return isAuthenticated&&(
    <div>
      <h2>Perfil</h2>
      <div>
        <img src={user.picture} alt={user.name} />
        <h4>{user.name}</h4>
        <p>{user.email}</p>
      </div>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    </div>
  )
}

export default Profile