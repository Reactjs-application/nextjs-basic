import React, { useRef, useState } from "react";

export default function CommentsPage() {
  const [comments, setComments] = useState([]);
  const commentRef = useRef("");

  async function fetchComments() {
    const res = await fetch("/api/comments");
    const data = await res.json();
    setComments(data);
  }

  async function hanldeComment() {
    const { value } = commentRef.current;

    const res = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setComments((pre) => [...pre, data]);
  }

  async function handleDeleteComment(id) {
    const res = await fetch(`/api/comments/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log("data", data);
    fetchComments();
  }

  return (
    <>
      <br />
      <button onClick={fetchComments}>Load Comments</button> <br /> <br />
      <input
        type="text"
        placeholder="type comments"
        ref={commentRef}
      /> <br /> <br />
      <button onClick={hanldeComment}>submit</button>
      <br />
      <br />
      {comments.map((list) => {
        return (
          <div key={list.id}>
            <p>{list.text}</p>
            <button onClick={() => handleDeleteComment(list.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
}
