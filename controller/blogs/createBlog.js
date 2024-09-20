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

exports.createBlog = (require, response) => {
  const newOne = require.body;
  blogs.push(newOne);
  response.status(200).json(blogs);
};
