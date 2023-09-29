import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState();
  const handleSubmit = () => {
    event.preventDefault();
    /* setPOSTS(prevState => ({
        ...prevState,

    })); */
  }

  return (
    <>
      <h1>Create post</h1>
      <form>
        <label htmlFor="name">Name:
        <input id="name" type="text" value={usrName} required /></label>
        <label htmlFor="surname">Surname:
        <input id="surname" type="text" value={usrSurname} required /></label>
        <label htmlFor="email">Email:
        <input id="email" type="email" value={usrEmail} required /></label>
        <label htmlFor="post">Post:
        <textarea id="post" cols="30" rows="5" value={usrPost}></textarea></label>
        <input onClick={handleSubmit} className='button' type="submit" value="Submit" />
    </form>
    <hr />
    <div className="posts">{posts}</div>
    </>
  )
}

export default App
