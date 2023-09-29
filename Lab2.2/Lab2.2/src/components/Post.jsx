function Post(props) {
  return (
    <div>
        <label htmlFor="name">Name:
        <p>{props.name}</p></label>
        <label htmlFor="surname">Surname:
        <input id="surname" type="text" value={usrSurname} required /></label>
        <label htmlFor="email">Email:
        <input id="email" type="email" value={usrEmail} required /></label>
        <label htmlFor="post">Post:
        <textarea id="post" cols="30" rows="5" value={usrPost}></textarea></label>
        <input onClick={handleSubmit} className='button' type="submit" value="Submit" />
    </div>
  )
}

export default Post