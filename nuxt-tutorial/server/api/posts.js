let posts = [
  { id: 1, title: "test1" },
  { id: 2, title: "test2" },
  { id: 3, title: "test3" },
];

export default defineEventHandler(() => {
  return posts;
});
