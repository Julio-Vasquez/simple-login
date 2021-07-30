import { useAuth0 } from '@auth0/auth0-react'

import { Public } from './Public'
import { Private} from './Private'

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div className="App">
      {isAuthenticated ? <Private/> : <Public/>}
    </div>
  );
}

export default App;
