const baseUrl = "https://jsonplaceholder.typicode.com";
const resources = [
  { key: "posts" },
  { key: "comments" },
  { key: "albums" },
  { key: "photos" },
  { key: "todos" },
  { key: "users" },
];

resources.forEach(({ key }) => {
  const url = `${baseUrl}/${key}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});
