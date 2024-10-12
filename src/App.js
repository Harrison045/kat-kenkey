// import Navbar from "./components/Navbar";

import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([])
  const getPlace = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setPosts(await response.data);

      // const response = await fetch(
      //   "https://jsonplaceholder.typicode.com/todos"
      // );
      // console.log(await response.json());
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getPlace();
  });

  return (
    <>
      {posts.map((post) =>{
          return (
            <div>
              <h1>{post.title}</h1>
              <p>{post.id}</p>
            </div>
          )
      })}
    </>
  );
}

export default App;
