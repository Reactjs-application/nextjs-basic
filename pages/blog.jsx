import React from "react";

import api from "@/api";

export default function Blog({ data }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {data.map((list) => {
          return <li key={list.id}>{list.title}</li>;
        })}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(api.blog);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
