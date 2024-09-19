const users = [
  { id: 1, name: "Bat", age: 19 },
  {
    id: 2,
    name: "Dulmaa",
    age: 21,
  },
];

exports.createUser = (request, response) => {
  users.push({ ...request.body });
  response.status(200).json({ users: users });
};
