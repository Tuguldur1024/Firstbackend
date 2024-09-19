const users = [
  { id: 1, name: "Bat", age: 19 },
  {
    id: 2,
    name: "Dulmaa",
    age: 21,
  },
];
exports.deleteUser = (request, response) => {
  const { id } = request.params;
  const result = users.filter((user) => user.id === Number(id));
  if (result === users) {
    response.status(400).send(`user with ${id} not exist`);
  } else {
    response.status(200).json({
      result,
    });
  }
};
