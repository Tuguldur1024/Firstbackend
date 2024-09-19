const users = [
  { id: 1, name: "Bat", age: 19 },
  {
    id: 2,
    name: "Dulmaa",
    age: 21,
  },
];

exports.updateUser = (request, response) => {
  const { id } = request.params;
  const name = request.body.name;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === Number(id)) {
      users[i].name = name;
    }
  }
  response.status(200).json(users);
};
