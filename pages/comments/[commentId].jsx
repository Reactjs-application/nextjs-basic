import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Comment() {
  const router = useRouter();
  const Id = parseInt(router.query.commentId);

  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/comments/${Id}`,
    fetcher
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Not found!</p>;
  }

  return (
    <div>
      Message: {data?.text}
      <p>Hello world!</p>
    </div>
  );
}

const fetcher = (url) => fetch(url).then((r) => r.json());
