import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  /**
   * @type {[
   *  import('./User.d').User,
   *  React.Dispatch<React.SetStateAction<import('./User.d').User>>
   * ]}
   */
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/user/1/projects')
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err))
  }, []);

  console.log(user);

  return <div className="card">
    {/*  */}
  </div>
}

export default App
