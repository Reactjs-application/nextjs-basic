const fetchUser = () => {
  return [
    {
      id: 1,
      name: "deepak kurmi",
    },
  ];
};

export default function handler(req, res) {
  const users = fetchUser();

  return res.status(200).json(users);
}
