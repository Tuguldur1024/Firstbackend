const blogs = [
  {
    id: 1,
    title:
      "There's a new DEV theme in town for all you 10x hackers out there (plus one actually useful new feature",
    tags: "meta, changelog, css, ux",
    published_at: "2019-10-24T13:52:17Z",
  },
  {
    id: 2,
    title: "The Problem of Knowledge Debt in Tech",
    tags: "opensource",
    published_at: "2024-09-19T16:26:32Z",
  },
  {
    id: 3,
    title: "Quickly index these web pages with IndexNow",
    tags: "webdev, seo, beginners, tutorial",
    published_at: "2024-09-19T09:55:16Z",
  },
];
exports.getBlog = (require, response) => {
  const { id } = require.params;
  const searched = blogs.filter((blog) => blog.id === Number(id));
  if (searched) {
    response.status(200).json(searched);
  } else {
    response.status(400).send(`${id} id tai blog oldsongui`);
  }
};
