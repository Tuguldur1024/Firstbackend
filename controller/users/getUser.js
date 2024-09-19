const users = [
  { id: 1, name: "Bat", age: 19 },
  {
    id: 2,
    name: "Dulmaa",
    age: 21,
  },
];

exports.getUser = (request, response) => {
  const { id } = request.params;

  const user = users.find((user) => user.id === Number(id));

  if (user) {
    response.status(200).json({
      user,
    });
  } else {
    response.status(400).send(`User with id ${id} does not exist`);
  }
};
