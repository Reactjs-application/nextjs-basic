import { comments } from "@/data/comments";

export default function handler(req, res) {
  const { commentId } = req.query;

  if (req.method === "GET") {
    const comment = comments.find(
      (commment) => commment.id === parseInt(commentId)
    );

    if (!comment) {
      return res.status(404).json({ messgae: "comment not found!" });
    }
    return res.status(200).json(comment);
  } else if (req.method === "DELETE") {
    const deleteComment = comments.find(
      (commment) => commment.id === parseInt(commentId)
    );

    const index = comments.findIndex(
      (commment) => commment.id === parseInt(commentId)
    );
    comments.splice(index, 1);

    return res.status(200).json(deleteComment);
  }
}
