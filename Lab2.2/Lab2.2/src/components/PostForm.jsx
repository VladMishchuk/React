function PostForm (
  {
    usrName, 
    usrSurname, 
    usrEmail, 
    usrPost, 
    usrColor, 
    setName, 
    setSurname, 
    setEmail, 
    setPost, 
    setColor,
    addPost
  }) {
    return (
      <div>
      <h1>Create post</h1>
      <form>
        <label htmlFor="name">Name:
        <input id="name" type="text" value={usrName} onChange={(e)=>{setName(e.target.value);}} required /></label>
        <label htmlFor="surname">Surname:
        <input id="surname" type="text" value={usrSurname} onChange={(e)=>{setSurname(e.target.value);}} required /></label>
        <label htmlFor="email">Email:
        <input id="email" type="text" value={usrEmail} onChange={(e)=>{setEmail(e.target.value);}} required /></label>
        <label htmlFor="post">Post:
        <textarea id="post" cols="30" rows="5" value={usrPost} onChange={(e)=>{setPost(e.target.value);}} required></textarea></label>
        <label htmlFor="color">Background color:
        <input type="color" name="color" id="color" value={usrColor} onChange={(e)=>{setColor(e.target.value);}}/>
        </label>
        <button className="CreateBtn" onClick={addPost}>Create Post</button>
      </form>
      </div>
    );
  };
  
  export default PostForm;
  