import React from "react";

import api from "@/api";

export default function Post({ post }) {
  return (
    <div>
      <h1>Post</h1>
      <p>{post.title}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(api.blog);
  const allData = await res.json();

  const paths = allData.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${api.blog}/${params.id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
}
