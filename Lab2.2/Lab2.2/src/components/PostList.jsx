const PostList = (props) => {
    return (
      <>
      <ul className="PostList">
        {props.posts.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.color }}>
            <h2>{item.name}</h2>
            <h2>{item.surname}</h2>
            <h2>{item.email}</h2>
            <p>{item.post}</p>
          </li>
        ))}
      </ul>
    </>
  );
  };
  
  export default PostList;
  