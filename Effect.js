import { useEffect, useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  console.log(posts.length);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  setTimeout(() => {
    console.log(posts.length);
    var allPosts = [...posts];
    allPosts[10].title = "a new title";
    setPosts(allPosts);
  }, 6000);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {post.id}: <input type="text" readOnly value={post.title} />
        </div>
      ))}
    </div>
  );
}
