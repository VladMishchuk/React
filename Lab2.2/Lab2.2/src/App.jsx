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

  const [publish, setPublish] = useState({});

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
  
      // Оновіть масив posts, додаючи новий об'єкт
      setPosts([...posts, newPublish]);
  
      // Очистіть значення полів форми
      setName("");
      setSurname("");
      setEmail("");
      setPost("");
      setColor("");
    }
  };
  
  return (
    <div className="App">
      <h1>Create post</h1>
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
