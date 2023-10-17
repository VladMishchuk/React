import { useState } from "react";
import PostForm from "./components/PostForm.jsx";
import PostList from "./components/PostList.jsx"
import "./App.css";


const App = () => {
  const [posts, setPosts] = useState([]);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [post, setPost] = useState("");
  const [color, setColor] = useState();

  const addPost = (e) => {
    e.preventDefault();
    if (name && surname && email && post) {
      const newPublish = {
        name: name,
        surname: surname,
        email: email,
        color: color,
        post: post,
      };
      setPosts([...posts, newPublish]);
      setName("");
      setSurname("");
      setEmail("");
      setPost("");
      setColor("");
    }
  };
  
  return (
    <div className="App">
      <PostForm
      usrName={name}
      usrSurname={surname} 
      usrEmail={email} 
      usrPost={post}
      usrColor={color}
      setName={setName}
      setSurname={setSurname} 
      setEmail={setEmail}
      setPost={setPost}
      setColor={setColor}
      addPost={addPost}
      />
      <PostList posts={posts} />
    </div>
  );
};

export default App;
