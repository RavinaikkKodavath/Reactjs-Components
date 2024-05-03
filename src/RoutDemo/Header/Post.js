import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [Post, setPost] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((response) => {
      setPost(response.data);
      // console.log(response.data);
    });
  });
  return (
    <div>
      <h2 style={{color:'red'}}>This is Post Data</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserId</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          {Post.map((post) => (
            <tr>
              <td className="table-primary">{post.id} </td>
              <td>{post.userId} </td>
              <td>{post.title} </td>
              <td>{post.body} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
